import { readFileSync, writeFileSync, existsSync } from 'node:fs';
import { join } from 'node:path';

const DIR = import.meta.dirname || join(process.cwd(), 'berkas-finalis');
const credPath = process.env.GDRIVE_CRED_PATH || join(DIR, 'credentials.json');
const tokenPath = process.env.GDRIVE_TOKEN_PATH || join(DIR, 'token.json');
const linksJsonPath = join(DIR, 'google-drive-links.json');

if (!existsSync(credPath) || !existsSync(tokenPath)) {
  console.error('Error: File kredensial atau token Google Drive tidak ditemukan.');
  console.error('Gunakan GDRIVE_CRED_PATH dan GDRIVE_TOKEN_PATH atau letakkan credentials.json dan token.json di folder berkas-finalis.');
  process.exit(1);
}

const creds = JSON.parse(readFileSync(credPath, 'utf8')).installed;
const tokenData = JSON.parse(readFileSync(tokenPath, 'utf8'));

async function getAccessToken() {
  const params = new URLSearchParams({
    client_id: creds.client_id,
    client_secret: creds.client_secret,
    refresh_token: tokenData.refresh_token,
    grant_type: 'refresh_token'
  });
  const res = await fetch('https://oauth2.googleapis.com/token', {
    method: 'POST',
    body: params
  });
  const data = await res.json();
  if (!data.access_token) {
    throw new Error('Failed to refresh access token: ' + JSON.stringify(data));
  }
  return data.access_token;
}

async function uploadPdfFile(token, folderId, fileName, localPath, desc) {
  const fileBytes = readFileSync(localPath);
  const metadata = {
    name: fileName,
    parents: [folderId],
    description: desc,
    mimeType: 'application/pdf'
  };

  const boundary = '-------314159265358979323846';
  const delimiter = `\r\n--${boundary}\r\n`;
  const closeDelimiter = `\r\n--${boundary}--`;

  const multipartBody = Buffer.concat([
    Buffer.from(
      delimiter +
      'Content-Type: application/json; charset=UTF-8\r\n\r\n' +
      JSON.stringify(metadata) +
      delimiter +
      'Content-Type: application/pdf\r\n\r\n'
    ),
    fileBytes,
    Buffer.from(closeDelimiter)
  ]);

  const res = await fetch('https://www.googleapis.com/upload/drive/v3/files?uploadType=multipart&fields=id,name,webViewLink', {
    method: 'POST',
    headers: {
      Authorization: `Bearer ${token}`,
      'Content-Type': `multipart/related; boundary=${boundary}`
    },
    body: multipartBody
  });

  const data = await res.json();
  if (!data.id) {
    throw new Error(`Upload failed for ${fileName}: ` + JSON.stringify(data));
  }

  // Set permission to anyone with link view
  await fetch(`https://www.googleapis.com/drive/v3/files/${data.id}/permissions`, {
    method: 'POST',
    headers: {
      Authorization: `Bearer ${token}`,
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({ role: 'reader', type: 'anyone' })
  });

  return data;
}

async function updateFileContent(token, fileId, localPath, newName) {
  const fileBytes = readFileSync(localPath);

  // 1. Update media content
  const res = await fetch(`https://www.googleapis.com/upload/drive/v3/files/${fileId}?uploadType=media`, {
    method: 'PATCH',
    headers: {
      Authorization: `Bearer ${token}`,
      'Content-Type': 'application/pdf'
    },
    body: fileBytes
  });

  if (!res.ok) {
    const err = await res.text();
    throw new Error(`Update content failed for ${fileId}: ` + err);
  }

  // 2. Update name if provided
  if (newName) {
    await fetch(`https://www.googleapis.com/drive/v3/files/${fileId}`, {
      method: 'PATCH',
      headers: {
        Authorization: `Bearer ${token}`,
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({ name: newName })
    });
  }

  console.log(`  Updated file content: ${newName || fileId}`);
}

async function trashFile(token, fileId, fileName) {
  const res = await fetch(`https://www.googleapis.com/drive/v3/files/${fileId}`, {
    method: 'PATCH',
    headers: {
      Authorization: `Bearer ${token}`,
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({ trashed: true })
  });
  console.log(`  Removed internal presentation file from Dospem folder: ${fileName} (${res.status})`);
}

async function renameFolder(token, folderId, newName) {
  await fetch(`https://www.googleapis.com/drive/v3/files/${folderId}`, {
    method: 'PATCH',
    headers: {
      Authorization: `Bearer ${token}`,
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({ name: newName })
  });
  console.log(`  Renamed folder to: ${newName}`);
}

async function main() {
  console.log('Memulai Sinkronisasi Google Drive untuk Dokumen Dosen Pembimbing...\n');
  const token = await getAccessToken();

  const folder1Id = '1CixzTVF7vHjHbgZlY9q7JpQc-Qf41BWY'; // Folder 1
  const folder2Id = '1McoQe8tIe6XNzPtrG8RJX30AwPWkZ3YN'; // Folder 2
  const folder3Id = '1v7ZDuz3nxdec7q-kANTL4ynxEIJjtpr-'; // Folder 3

  // 1. Rename Folder 1
  await renameFolder(token, folder1Id, '01 - Evaluasi Juri & Ringkasan Eksekutif');

  // 2. Remove presentation files from Drive (Keep Local)
  const presentationFileIds = [
    { id: '1GWpV048SB3uhQHn4GRu1IaEeXf9vNPqf', name: '04 - Panduan Eksekusi Live Demo & Mitigasi Offline.pdf' },
    { id: '1wFLMB3K0s13gR1NQtmndwyWWP2ZxTqS5', name: '03 - Buku Saku Tanya Jawab Juri (Defense Matrix).pdf' },
    { id: '1GxPB0D-B7Fi9t0F3J6PUMVvE7vUM_enY', name: '02 - Naskah Presentasi & Live Demo 10 Menit.pdf' }
  ];

  for (const pf of presentationFileIds) {
    try {
      await trashFile(token, pf.id, pf.name);
    } catch (err) {
      console.warn(`  Warning trashing ${pf.name}:`, err.message);
    }
  }

  // 3. Upload new Evaluasi Juri & Action Plan to Folder 1
  console.log('\nMengunggah Dokumen Evaluasi Dewan Juri & Rencana Tindak Lanjut...');
  const evalUpload = await uploadPdfFile(
    token,
    folder1Id,
    '01 - Evaluasi Dewan Juri & Rencana Tindak Lanjut Finalis.pdf',
    join(DIR, '00-evaluasi-dewan-juri-dan-action-plan-finalis.pdf'),
    'Rekapitulasi penilaian dewan juri babak penyisihan (skor 32/42) dan rencana aksi komprehensif'
  );
  console.log('  Berhasil diunggah:', evalUpload.name, '-> ID:', evalUpload.id);

  // 4. Update Executive Summary & Factsheet in Folder 1
  console.log('\nMemperbarui Dokumen Executive Summary Factsheet...');
  await updateFileContent(
    token,
    '1XBS1-52MOyZqDjayZpFPxpe_4JSBwaDU',
    join(DIR, '06-executive-summary-one-pager.pdf'),
    '02 - Executive Summary Factsheet (One Pager).pdf'
  );

  // 5. Update Katalog Panduan in Folder 1
  console.log('Memperbarui Dokumen Katalog Berkas...');
  await updateFileContent(
    token,
    '1S-ZA7RGkD7nnEFnOIqKZsqwYu18TMLuO',
    join(DIR, '00-katalog-panduan-berkas-finalis.pdf'),
    '00 - Katalog & Panduan Lengkap Berkas Finalis.pdf'
  );

  // 6. Update Makalah IEEE in Folder 2
  console.log('\nMemperbarui Makalah Ilmiah Format IEEE Gemastik...');
  await updateFileContent(
    token,
    '1b5jUYy7W9u5bexLGegpX7dX7QcrYY4qj',
    join(DIR, '04-draf-makalah-ilmiah-gemastik.pdf'),
    '02 - Draf Makalah Ilmiah Format IEEE Gemastik.pdf'
  );

  // 7. Update Dokumen Deskripsi HKI in Folder 3
  console.log('\nMemperbarui Dokumen Deskripsi Ciptaan HKI DJKI...');
  await updateFileContent(
    token,
    '1bA-jw7p-GGQxSFFgFtHavuPQ9MN5VRSw',
    join(DIR, '05-dokumen-pendaftaran-hki-deskripsi-ciptaan.pdf'),
    '01 - Dokumen Deskripsi Ciptaan Program Komputer (HKI DJKI).pdf'
  );

  // 8. Update Surat Pernyataan HKI Bermeterai in Folder 3
  console.log('Memperbarui Draf Surat Pernyataan Hak Cipta Bermeterai...');
  await updateFileContent(
    token,
    '1uCE3xwArC9ril2Dmndk3nua71xF7R2-H',
    join(DIR, 'syarat-resmi-finalis/05-surat-pernyataan-hki-bermeterai.pdf'),
    '02 - Draf Surat Pernyataan Hak Cipta Bermeterai Rp10.000.pdf'
  );

  // 9. Update google-drive-links.json
  const finalJson = {
    rootFolder: {
      id: '1SwHqhgmQfS5e98LXP2f99fzRQb1EjIuh',
      name: 'GEMASTIK XIX 2026 - Berkas Finalis Verifin (Three Achilles UGM)',
      webViewLink: 'https://drive.google.com/drive/folders/1SwHqhgmQfS5e98LXP2f99fzRQb1EjIuh'
    },
    folders: [
      {
        id: folder1Id,
        name: '01 - Evaluasi Juri & Ringkasan Eksekutif',
        desc: 'Evaluasi dewan juri penyisihan, action plan, dan factsheet eksekutif'
      },
      {
        id: folder2Id,
        name: '02 - Proposal & Makalah Ilmiah',
        desc: 'Proposal resmi 30 halaman dan naskah ilmiah IEEE'
      },
      {
        id: folder3Id,
        name: '03 - Dokumen Administrasi & HKI',
        desc: 'Dokumen pendaftaran Hak Cipta DJKI dan surat-surat pernyataan resmi'
      }
    ],
    files: [
      {
        name: '00 - Katalog & Panduan Lengkap Berkas Finalis.pdf',
        folder: '01 - Evaluasi Juri & Ringkasan Eksekutif',
        id: '1S-ZA7RGkD7nnEFnOIqKZsqwYu18TMLuO',
        link: 'https://drive.google.com/file/d/1S-ZA7RGkD7nnEFnOIqKZsqwYu18TMLuO/view?usp=drivesdk'
      },
      {
        name: '01 - Evaluasi Dewan Juri & Rencana Tindak Lanjut Finalis.pdf',
        folder: '01 - Evaluasi Juri & Ringkasan Eksekutif',
        id: evalUpload.id,
        link: evalUpload.webViewLink
      },
      {
        name: '02 - Executive Summary Factsheet (One Pager).pdf',
        folder: '01 - Evaluasi Juri & Ringkasan Eksekutif',
        id: '1XBS1-52MOyZqDjayZpFPxpe_4JSBwaDU',
        link: 'https://drive.google.com/file/d/1XBS1-52MOyZqDjayZpFPxpe_4JSBwaDU/view?usp=drivesdk'
      },
      {
        name: '01 - Proposal Lengkap Babak Penyisihan (30 Halaman).pdf',
        folder: '02 - Proposal & Makalah Ilmiah',
        id: '1OY8F4AgK06u_U45o_jriJxBoDkPWyX2S',
        link: 'https://drive.google.com/file/d/1OY8F4AgK06u_U45o_jriJxBoDkPWyX2S/view?usp=drivesdk'
      },
      {
        name: '02 - Draf Makalah Ilmiah Format IEEE Gemastik.pdf',
        folder: '02 - Proposal & Makalah Ilmiah',
        id: '1b5jUYy7W9u5bexLGegpX7dX7QcrYY4qj',
        link: 'https://drive.google.com/file/d/1b5jUYy7W9u5bexLGegpX7dX7QcrYY4qj/view?usp=drivesdk'
      },
      {
        name: '01 - Dokumen Deskripsi Ciptaan Program Komputer (HKI DJKI).pdf',
        folder: '03 - Dokumen Administrasi & HKI',
        id: '1bA-jw7p-GGQxSFFgFtHavuPQ9MN5VRSw',
        link: 'https://drive.google.com/file/d/1bA-jw7p-GGQxSFFgFtHavuPQ9MN5VRSw/view?usp=drivesdk'
      },
      {
        name: '02 - Draf Surat Pernyataan Hak Cipta Bermeterai Rp10.000.pdf',
        folder: '03 - Dokumen Administrasi & HKI',
        id: '1uCE3xwArC9ril2Dmndk3nua71xF7R2-H',
        link: 'https://drive.google.com/file/d/1uCE3xwArC9ril2Dmndk3nua71xF7R2-H/view?usp=drivesdk'
      },
      {
        name: '03 - Surat Pernyataan Orisinalitas Karya.pdf',
        folder: '03 - Dokumen Administrasi & HKI',
        id: '1Q9Qv4jQUHVWtTkezDyvdJ5fH9u_Y1e3G',
        link: 'https://drive.google.com/file/d/1Q9Qv4jQUHVWtTkezDyvdJ5fH9u_Y1e3G/view?usp=drivesdk'
      },
      {
        name: '04 - Surat Pernyataan Batasan Penggunaan AI.pdf',
        folder: '03 - Dokumen Administrasi & HKI',
        id: '1M2ZM8eFPp8G2OpI8SKS3XR9BQnUpbWJ5',
        link: 'https://drive.google.com/file/d/1M2ZM8eFPp8G2OpI8SKS3XR9BQnUpbWJ5/view?usp=drivesdk'
      },
      {
        name: '05 - Surat Pernyataan Status Pengembangan Karya.pdf',
        folder: '03 - Dokumen Administrasi & HKI',
        id: '1-U3dEMNSxtS6TnTaO02wtwQwDUjrJGqV',
        link: 'https://drive.google.com/file/d/1-U3dEMNSxtS6TnTaO02wtwQwDUjrJGqV/view?usp=drivesdk'
      }
    ]
  };

  writeFileSync(linksJsonPath, JSON.stringify(finalJson, null, 2), 'utf8');
  console.log('\nSinkronisasi Google Drive Berhasil Sempurna!');
}

main().catch(err => {
  console.error('Error syncing to Drive:', err);
  process.exit(1);
});
