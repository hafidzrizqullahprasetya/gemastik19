# PREDIKSI REAL OR FAKE JOB POSTING MENGGUNAKAN METODE LONG SHORT-TERM MEMORY

**Innovation and Technology Vol. 2, No. 1, Januari 2025**  
**Jurnal Ilmu Komputer, Sistem Informasi dan Teknologi Informasi (Innotech)**  
E-ISSN: 3031-1640 | DOI: doi-No.  
Received: 20/01/2025, Revised: 25/01/2025, Publish: 30/01/2025  

**Penulis:**  
Disky Phiter Budiyansyah¹, Herwanto²  
¹Program Studi Teknik Informatika/ Fakultas Teknik, Universitas Krisnadwipayana, Indonesia  
²Program Studi Teknik Informatika/ Fakultas Teknik, Universitas Global Jakarta, Indonesia  
Korespondensi: herwanto@jgu.ac.id  

---

## Abstract
In the current era, advances in information technology have had a significant impact, including online job searches. However, the emergence of fake job advertisements poses a serious threat to job seekers, causing the risk of financial loss and misuse of personal data. This research aims to develop a Long Short-Term Memory (LSTM)-based prediction model to distinguish between real and fake job advertisements automatically and accurately. The dataset used is "Real or Fake Job Posting Prediction" from the Kaggle website, which contains job posting data. The research process includes data cleaning, natural language processing (NLP) techniques such as tokenization and lemmatization, and model training using the TensorFlow framework. The resulting model achieved 97.61% accuracy and 0.08% loss rate, showing good performance in identifying patterns in complex text data. The results of this research are expected to help the community, especially job seekers, to reduce the risk of job vacancy fraud.

**Keywords:** Job Posting Prediction, Long Short-Term Memory (LSTM), Natural Language Processing (NLP).

## Abstrak
Di era sekarang, kemajuan teknologi informasi telah memberikan dampak yang signifikan, termasuk pencarian pekerjaan secara daring. Namun, kemunculan iklan lowongan pekerjaan palsu menjadi ancaman serius bagi para pencari kerja, menyebabkan resiko kerugian finansial dan penyalahgunaan data pribadi. Penelitian ini bertujuan untuk mengembangkan model prediksi berbasis Long Short-Term Memory (LSTM) untuk membedakan lowongan pekerjaan asli dan palsu secara otomatis dan akurat. Dataset yang digunakan adalah "Real or Fake Job Posting Prediction" dari website Kaggle, yang berisi data lowongan pekerjaan. Proses penelitian mencakup pembersihan data, Teknik Natural Language Processing (NLP) seperti tokenisasi dan lemmatization, serta pelatihan model menggunakan framework TensorFlow. Model yang dihasilkan mencapai akurasi 97,61% dan tingkat loss 0,08%, menunjukan kinerja yang baik dalam mengidentifikasi pola pada data teks yang kompleks. Hasil penelitian ini diharapkan dapat membantu masyarakat, khususnya para pencari kerja untuk mengurangi resiko terhadap penipuan lowongan pekerjaan.

**Kata Kunci:** Prediksi lowongan pekerjaan, Long Short-Term Memory (LSTM), Natural Language Processing (NLP).

---

## PENDAHULUAN
Pada era saat ini, teknologi sangat berkembang pesat, informasi apapun dari internet pasti mudah kita jumpai, ini juga berpengaruh pada lowongan pekerjaan yang banyak dijumpai di internet (Mubarok & Rahman Prehanto, 2021). Dengan kemajuan teknologi sekarang, tidak sulit untuk menemukan lowongan pekerjaan bagi para pencari kerja, tetapi iklan lowongan pekerjaan ini tidak semuanya asli. Banyak iklan lowongan pekerjaan palsu yang dijumpai di internet dan menjadi ancaman bagi para pencari kerja, yang bertujuan untuk mencuri data pribadi, penipuan, atau bahkan pemerasan (Fajar et al., 2022). Tindakan seperti ini sulit untuk diberantas oleh pihak berwajib, mengingat banyaknya postingan pekerjaan di internet. Oleh karena itu, diperlukan teknologi untuk membantu para pekerja untuk bisa membedakan lowongan pekerjaan asli dan palsu.

Penelitian ini dilakukan dengan lima tahapan proses, yaitu pengumpulan data, preprocessing, implementasi model, evaluasi model, dan terakhir deteksi teks. Metode yang digunakan adalah deep learning dengan algoritma Long Short-Term Memory (LSTM) yang secara khusus dirancang untuk menganalisis data teks yang panjang. Algoritma LSTM digunakan untuk membedakan lowongan pekerjaan asli atau palsu. LSTM dipilih karena sangat bagus untuk memproses data teks yang panjang dan kompleks dan memiliki kemampuan yang unggul dalam memahami pola dalam teks, seperti deskripsi pekerjaan (Fajri & Syaiful, 2022). Sulitnya para pencari kerja membedakan antara iklan lowongan pekerjaan yang asli dan yang palsu menjadi masalah utama dalam penelitian ini. Melalui pengembangan metode yang mampu secara otomatis dan cepat memprediksi keaslian lowongan pekerjaan, diharapkan dapat membantu pencari kerja dalam membedakan antara iklan lowongan asli dan palsu dengan lebih mudah dan akurat.

## TINJAUAN LITERATUR
Beberapa penelitian terdahulu telah dilakukan untuk klasifikasi teks menggunakan LSTM.

Penelitian yang dilakukan oleh Fadli dan Hidayatullah (Fadli & Hidayatullah, n.d.) mendeteksi teks cyberbullying pada media sosial Twitter menggunakan LSTM. Studi ini bertujuan untuk mengidentifikasi cuitan yang mengandung unsur perundungan daring. Hasil penelitian menunjukkan bahwa BiLSTM memiliki performa lebih baik dibandingkan LSTM, dengan akurasi 95.24% dan F1-score 93.84%, sedangkan LSTM memperoleh akurasi 93.77% dan F1-score 92.02%.

Dzikri dan Setiawan (Dzikri & Setiawan, 2024) melakukan penelitian untuk mendeteksi penipuan lowongan pekerjaan. Penelitian yang dilakukan terkait deteksi penipuan lowongan kerja menggunakan algoritma Naïve Bayes menunjukkan bahwa banyak lowongan kerja palsu dipublikasikan melalui berbagai platform digital seperti Facebook, email, situs web, dan Google. Hasil penelitian menunjukkan bahwa model Naïve Bayes mampu mengklasifikasikan data dengan akurasi keseluruhan sebesar 89%. Untuk kategori bukan penipuan, model menghasilkan precision sebesar 83%, recall 100%, dan F1-score 91%, sedangkan untuk kategori penipuan, precision mencapai 100%, recall 76%, dan F1-score 86%.

Penelitian dari Fajar (Fajar et al., 2022) membahas perbandingan metode klasifikasi data mining dalam mendeteksi keaslian lowongan pekerjaan di media sosial, terutama di tengah meningkatnya pencarian kerja akibat pandemi COVID-19. Penelitian ini membandingkan tiga metode klasifikasi, yaitu Naïve Bayes, K-Nearest Neighbors (KNN), dan Decision Tree, guna mengetahui metode mana yang memiliki akurasi tertinggi dalam mengidentifikasi keaslian lowongan kerja. Hasil penelitian menunjukkan bahwa metode KNN memiliki akurasi tertinggi dengan nilai 94.93%, diikuti oleh Decision Tree dengan akurasi 91.57%, dan Naïve Bayes dengan akurasi 84.35%.

Penelitian tentang klasifikasi teks menggunakan LSTM sudah dilakukan oleh Cardova dan Hermawan (Cardova & Hermawan, n.d.) yang membahas klasifikasi berita palsu menggunakan metode deep learning memanfaatkan Long Short-Term Memory (LSTM) untuk mengklasifikasikan klaim politik berdasarkan data dari PolitiFact. Hasil penelitian menunjukkan bahwa model LSTM memiliki akurasi tinggi sebesar 97% dalam mengklasifikasikan berita palsu, sehingga menjadikannya alat yang efektif dalam menangani penyebaran informasi hoaks serta mendukung media terpercaya dalam menyampaikan berita yang akurat.

Subowo, Artanto, Putri, Umaedi (Subowo et al., n.d.) melakukan penelitian terkait analisis sentimen berbasis aspek pada ulasan aplikasi dengan menggabungkan pendekatan Bidirectional Long Short-Term Memory (BiLSTM) dan Support Vector Machine (SVM) untuk klasifikasi aspek. Metode autolabeling dengan Corpus Text digunakan untuk meningkatkan akurasi, menghasilkan akurasi sentimen sebesar 81% dan akurasi aspek sebesar 78%.

## METODE
Bagian ini berisi pembahasan tentang langkah-langkah yang dilakukan dalam penelitian, yaitu pengumpulan data, preprocessing, implementasi model, evaluasi, dan deteksi teks.

Pengumpulan data dilakukan dengan mencari dataset sekunder yang didapatkan dari website Kaggle.com yang berjudul *Real or Fake Job Posting Prediction*. Dataset berisi sekitar 18.000 data lowongan pekerjaan, dan sekitar 800 data di antaranya merupakan data lowongan pekerjaan palsu. Dataset ini diunggah pada tanggal 29 Februari 2020. Representasi data mencakup berbagai informasi tentang lowongan pekerjaan yang diposting di berbagai platform.

Preprocessing merupakan langkah untuk membersihkan data mentah sehingga menjadi data yang baik dan terstruktur (Fadli & Hidayatullah, n.d.). Langkah-langkah preprocessing dilakukan sebagai berikut:
1. Menghapus kolom numerik atau kolom berisi angka.
2. Menghapus nilai NaN.
3. Menghapus data duplikat.
4. Merubah teks ke dalam bentuk lowercase atau huruf kecil.
5. Menghapus tanda baca.
6. Mengubah teks ke unit-unit kecil atau tokenisasi.
7. Menghilangkan stop words.
8. Merubah teks ke bentuk lemma atau bentuk dasar.

**Tabel 1. Preprocessing**
| Sebelum | Sesudah |
| --- | --- |
| Tanggal wawancara adalah 15 Juni 2024, harap membawa CV terbaru Anda. | tanggal wawancara 15 juni 2024 harap membawa cv baru |

Implementasi model untuk melakukan klasifikasi menggunakan algoritma LSTM. Algoritma ini digunakan untuk menyelesaikan permasalahan klasifikasi teks menjadi dua kategori, yaitu "Fraudulent" dan "Non-Fraudulent". Model ini dibangun menggunakan arsitektur jaringan saraf tiruan (JST) tipe sequential, yang berarti lapisan model disusun dalam urutan tertentu. Model ini menggunakan arsitektur LSTM bidirectional dan lapisan dense untuk menghasilkan probabilitas teks menjadi "Fraudulent" dan "Non-Fraudulent".

Evaluasi model dilakukan untuk mengukur kinerja model dalam mengklasifikasikan data. Proses evaluasi ini melibatkan analisis akurasi dan loss. Melalui visualisasi akurasi dan tingkat loss, dapat memberikan pemahaman tentang kemampuan model dalam mendeteksi lowongan pekerjaan asli atau palsu.

Deteksi teks merupakan tahap akhir dalam mendeteksi iklan lowongan pekerjaan yang asli dan palsu. Dalam penelitian ini, streamlit digunakan untuk membuat web, dengan antarmuka yang sederhana dan intuitif, aplikasi ini memungkinkan pengguna dari berbagai latar belakang teknologi untuk memanfaatkan fitur prediksi tanpa memerlukan pelatihan khusus. Hasil prediksi yang disajikan secara cepat meningkatkan efisiensi proses, sehingga pencari kerja dapat segera mengetahui apakah suatu lowongan pekerjaan tergolong asli atau palsu.

## HASIL DAN PEMBAHASAN
Tujuan penelitian ini adalah membuat model klasifikasi yang dapat mempelajari dan mengidentifikasi iklan lowongan pekerjaan palsu menggunakan model LSTM untuk melakukan prediksi. Dataset yang digunakan didapatkan dari website Kaggle.com, berisi 18.000 iklan lowongan pekerjaan, dan sekitar 800 di antaranya merupakan data palsu. Penjelasan kolom utama yang digunakan untuk pemodelan diperlihatkan pada tabel 2.

**Tabel 2. Kolom dataset**
| No | Nama Kolom | Tipe Data | Keterangan |
| --- | --- | --- | --- |
| 1 | fraudulent | Int64 | Kolom target yang menunjukan iklan lowongan pekerjaan asli (0) atau palsu (1) |
| 2 | title | Object | Nama pekerjaan yang ditawarkan |
| 3 | location | Object | Lokasi di mana pekerjaan tersebut berada atau tersedia. |
| 4 | department | Object | Nama perusahaan yang menyediakan lowongan pekerjaan |
| 5 | company_profile | Object | Deskripsi perusahaan yang merekrut, termasuk latar belakangnya, misi, nilai-nilai, produk, dan layanan. |
| 6 | Description | Object | Deskripsi detail tentang peran pekerjaan, tanggung jawab, tugas, dan kualifikasi yang diperlukan. |
| 7 | Requirements | Object | Persyaratan atau kualifikasi spesifik yang harus dipenuhi kandidat untuk dipertimbangkan dalam pekerjaan, seperti pendidikan, pengalaman, keterampilan, sertifikasi |
| 8 | benefits | Object | Manfaat tambahan atau keuntungan yang ditawarkan kepada karyawan, seperti asuransi kesehatan, rencana pensiun, hari libur |
| 9 | required_experience | Object | Tingkat pengalaman yang diperlukan untuk peran pekerjaan, seperti pemula, menengah, senior |
| 10 | required_education | Object | Tingkat pendidikan minimum yang diperlukan untuk pekerjaan, seperti sekolah menengah atas, gelar sarjana, gelar magister |
| 11 | industry | Object | Sektor industri dari perusahaan. seperti teknologi, keuangan, perawatan kesehatan |

Atribut seperti description, requirement, dan location menjadi kolom yang penting dalam menentukan pola yang mencurigakan pada lowongan palsu. Kolom fraudulent berfungsi sebagai label untuk melatih model. Beberapa langkah awal yang dilakukan sebelum melakukan pembangunan model prediksi adalah melakukan data understanding, data preprocessing, dan feature engineering. 

Model yang dihasilkan kemudian dikompilasi menggunakan `model_lstm.compile(loss='binary_crossentropy', optimizer='adam', metrics=['accuracy'])`. Fungsi loss yang digunakan adalah `binary_crossentropy` yang cocok untuk tugas klasifikasi biner karena mengukur perbedaan antara nilai prediksi dan label asli. Optimizer `adam` dipilih karena efisien dan cepat dalam menemukan solusi optimal. Metrik akurasi digunakan untuk mengevaluasi performa model selama pelatihan. Tujuan utama dari langkah ini adalah untuk menyiapkan model agar dapat dilatih menggunakan dataset.

**Tabel 3. Hasil arsitektur model**
| No | Layer (Type) | Output Shape | Param # |
| --- | --- | --- | --- |
| 1 | Embedding (Embedding) | (None, 1445, 40) | 400,000 |
| 2 | Bidirectional (LSTM) | (None, 1445, 64) | 18,688 |
| 3 | Dropout (Dropout) | (None, 1445, 64) | 0 |
| 4 | Bidirectional_1 (LSTM) | (None, 64) | 24,832 |
| 5 | Dropout_1 (Dropout) | (None, 64) | 0 |
| 6 | Dense (Dense) | (None, 1) | 65 |

Total parameter dari model ini adalah 443.585, semuanya dapat dilatih (trainable). Dengan arsitektur ini, model mampu memproses teks secara mendalam dan memberikan hasil prediksi yang akurat.

Proses pelatihan dilakukan dengan menggunakan loss function `binary_crossentropy` yang cocok untuk klasifikasi biner. Fungsi ini bekerja dengan menghitung selisih antara prediksi model dan label sebenarnya, lalu meminimalkan nilai tersebut untuk meningkatkan akurasi model. Selain itu, proses pelatihan ini menggunakan optimizer bernama `adam`, yang dikenal efisiensi dalam mempercepat konvergensi selama pelatihan, sehingga sangat mendukung efisiensi waktu dan hasil pelatihan.

Pada model ini, jumlah epoch atau iterasi yang dirancangkan adalah 25. Namun, untuk mencegah terjadinya overfitting dan mengoptimalkan waktu pelatihan, penulis menggunakan teknik early stopping. Early stopping adalah metode yang menghentikan pelatihan secara otomatis ketika performa model pada data validasi tidak lagi membaik, meskipun epoch yang direncanakan belum selesai. Pelatihan model berhenti pada epoch ke-5, karena nilai metrik pada data validasi yaitu `val_accuracy` sudah tidak menunjukan peningkatan signifikan setelah epoch tersebut. Dengan demikian, epoch ke-6 hingga epoch ke-25 tidak dilanjutkan, karena hasilnya sudah sama dengan epoch ke-5. Hal ini menunjukan bahwa penerapan early stopping berhasil mencegah pelatihan yang berlebihan sekaligus menghemat waktu komputasi.

Berdasarkan hasil pelatihan, model menunjukan performa yang sangat baik pada epoch terakhir sebelum berhenti, dengan akurasi tinggi pada data pelatihan dan validasi. Hal ini mengindikasikan bahwa model mampu mengenali pola pada data dengan baik tanpa kehilangan kemampuan generalisasi pada data yang belum pernah dilihat sebelumnya. Oleh karena itu, metode yang digunakan dalam proses pelatihan ini dinilai cukup optimal untuk masalah klasifikasi biner yang sedang diteliti.

Berdasarkan evaluasi hasil, pada grafik *Loss vs Val-Loss* terlihat nilai loss pada data pelatihan menunjukan penurunan yang konsisten ketika bertambahnya epoch. Hal ini mengindikasikan bahwa model belajar dengan baik pada data pelatihan. Sementara itu, nilai validation loss mengalami sedikit fluktuasi namun cenderung stabil dan naik setelah epoch kedua. Perbedaan antara loss dan validation loss menunjukan performa model pada data pelatihan dan validasi. 

Pada grafik *Accuracy vs Val-Accuracy*, menunjukan kinerja akurasi model. Garis yang merepresentasikan akurasi pada data pelatihan terus meningkat hingga mencapai nilai mendekati 100% pada epoch keempat. Garis yang mewakili akurasi pada data validasi juga mengalami peningkatan secara umum, meskipun terdapat fluktuasi pada beberapa epoch. Hal ini menunjukan kalau model mampu mempelajari pola dari data pelatihan dengan baik dan mempertahankan performa yang cukup stabil pada data validasi. 

Setelah dilakukan pembagian dataset yang komposisinya 90% untuk data latih (training data) dan 10% untuk data uji (testing data), model yang dikembangkan menunjukan hasil yang sangat memuaskan. Berdasarkan evaluasi yang dilakukan, model menghasilkan nilai akurasi sebesar **97,61%** dan nilai loss hanya **0,08%**. Hasil ini mencerminakn bahwa model LSTM yang digunakan memiliki kinerja yang sangat baik dalam memprediksi apakah sebuah lowongan pekerjaan asli atau palsu.

Nilai akurasi yang tinggi menunjukan kemampuan model untuk mengenali pola pada data dengan tingkat keberhasilan yang sangat baik, sementara nilai loss yang rendah mengindikasikan bahwa tingkat kesalahan prediksi model berada pada level yang sangat minim. Kombinasi dari akurasi tinggi dan loss rendah menjadi indikator kuat bahwa model LSTM yang diterapkan mampu memahami data secara mendalam dan efektif dalam membedakan karakteristik antara lowongan pekerjaan asli dan palsu. Selain itu, hasil ini juga mengonfirmasi efektivitas model LSTM dalam menangani data teks, khususnya pada tugas klasifikasi biner seperti ini. Model yang dirancang mampu mengenali dan mempelajari pola kompleks dari data teks yang panjang, sehingga menghasilkan prediksi yang sangat akurat. Dengan performa ini, model LSTM dapat diandalkan untuk mendukung kebutuhan analisis lebih lanjut dalam konteks yang serupa, sekaligus memberikan solusi yang praktis dan efisien dalam mendeteksi keaslian lowongan pekerjaan secara otomatis.

## KESIMPULAN
Sulitnya membedakan antara iklan lowongan pekerjaan asli dan palsu menjadi tantangan utama bagi para pencari kerja, yang dapat menimbulkan risiko kerugian baik secara materi maupun non materi. Penelitian ini berhasil mengembangkan metode berbasis Long Short-Term Memory (LSTM) untuk memprediksi keaslian lowongan pekerjaan secara otomatis dan cepat.

Hasil pemodelan LSTM menunjukkan performa yang sangat baik, dengan tingkat akurasi mencapai **97,61%** dan nilai loss sebesar **0,08%**. Hal ini menunjukkan bahwa model yang dikembangkan mampu mengenali pola kompleks dalam data teks secara efektif. Selain itu, model ini telah diimplementasikan dalam antarmuka berbasis web menggunakan Streamlit, sehingga memudahkan pengguna untuk mengakses dan memanfaatkan hasil prediksi secara interaktif.

Pendekatan ini diharapkan dapat membantu para pencari kerja menghindari risiko penipuan lowongan pekerjaan, sekaligus memberikan kontribusi nyata dalam pemanfaatan teknologi untuk mendukung keamanan dan kenyamanan pencarian kerja di era digital.

## DAFTAR PUSTAKA
- Cardova, A., & Hermawan, A. (n.d.). *Implementasi Metode LSTM Untuk Mengklasifikasi Berita Palsu Pada PolitiFact*.
- Dzikri, M. H., & Setiawan, I. R. (2024). PENERAPAN ALGORITMA NAÏVE BAYES UNTUK MENDETEKSI PENIPUAN LOWONGAN PEKERJAAN. 9(2).
- Fadli, H. F., & Hidayatullah, A. F. (n.d.). *Identifikasi Cyberbullying pada Media Sosial Twitter Menggunakan Metode LSTM dan BiLSTM*.
- Fajar, M. M., Putri, A. R., & Holle, K. F. H. (2022). Perbandingan Metode Klasifikasi Data Mining Untuk Deteksi Keaslian Lowongan Pekerjaan di Medsos. *Jurnal Ilmiah Informatika*, 7(1), 41–48. https://doi.org/10.35316/jimi.v7i1.41-48
- Fajri, F. N., & Syaiful, S. (2022). Klasifikasi Nama Paket Pengadaan Menggunakan Long Short-Term Memory (LSTM) Pada Data Pengadaan. *Building of Informatics, Technology and Science (BITS)*, 4(3). https://doi.org/10.47065/bits.v4i3.2635
- Herwanto, Nuke L Chusna, Muhammad Syamsul Arif (2021). Klasifikasi SMS Spam Berbahasa Indonesia Menggunakan Algoritma Multinomial Naïve Bayes. *JURNAL MEDIA INFORMATIKA BUDIDARMA*, Volume 5, Nomor 4, Oktober 2021, Page 1316-1325.
- Mubarok, H., & Rahman Prehanto, D. (2021). Sistem Analisa Lowongan Kerja di Indonesia pada Media Sosial Facebook Dengan Metode TF-IDF dan Decision Tree. *Journal of Informatics and Computer Science*, 03.
- Sabita, H., & Herwanto, R. (2021). ANALISA DAN PREDIKSI IKLAN LOWONGAN KERJA PALSU DENGAN METODE NATURAL LANGUAGE PROGRAMING DAN MACHINE LEARNING. In *Jurnal Informatika* (Vol. 21, Issue 1).
- Setiawan, E. I., Informasi, T., Sains, I., Surabaya, T., Lestari, I., Teknologi, M., Institut, I., & Terpadu, T. (n.d.). Stance Classification Pada Berita Berbahasa Indonesia Berbasis Bidirectional LSTM. 41–48.
- Song, X. (2023). A Brief Introduction to Exploratory Data Analysis. 420–425. https://doi.org/10.56028/aetr.4.1.420.2023
- Subowo, E., Adi Artanto, F., Putri, I., & Umaedi, W. (n.d.). *BLTSM untuk analisis sentimen berbasis aspek pada aplikasi belanja online dengan cicilan*.