## 📡 1. Wi-Fi Channel State Information (CSI) & Deep Learning
*Teknologi mendeteksi gerakan dada/bernapas menggunakan sinyal Wi-Fi di dalam ruangan tanpa kamera (menjaga privasi mutlak).*

*   **Judul Jurnal Rujukan:**
    1.  *“Human Respiration and Heart Rate Estimation Using Wi-Fi Channel State Information and Machine Learning”* (IEEE - 2024)
    2.  *“Resfi: Wifi-enabled device-free respiration detection based on deep learning”* (IEEE - 2022)
*   **Bagaimana Cara Kerjanya secara Fisik?**
    Sinyal Wi-Fi yang dipancarkan oleh router akan memantul pada tubuh manusia. Ketika dada manusia kembang kempis saat bernapas, pantulan sinyal Wi-Fi mengalami distorsi frekuensi mikro (disebut *Channel State Information* / CSI). Penerima Wi-Fi menangkap perubahan CSI ini, lalu model Deep Learning (Bi-LSTM) memprosesnya untuk menghitung frekuensi napas dan detak jantung secara akurat tanpa kamera atau sensor tubuh.
---

## 🌀 2. Doppler Radar & Frekuensi Gelombang Radio Milimeter (mmWave)
*Menggunakan sensor radar frekuensi tinggi (seperti radar mobil/parkir) untuk memindai tanda vital dari jarak jauh.*

*   **Judul Jurnal Rujukan:**
    1.  *“Vital-sign monitoring and spatial tracking of multiple people using a contactless radar-based sensor”* (Nature Electronics - 2019)
    2.  *“Artificial intelligence-enabled detection and assessment of Parkinson’s disease using nocturnal breathing signals”* (Nature Medicine - 2022)
*   **Bagaimana Cara Kerjanya secara Fisik?**
    Sensor radar mengirimkan gelombang elektromagnetik ke arah tubuh manusia dan menerima pantulannya. Algoritma pemrosesan sinyal (seperti *Independent Component Analysis* - ICA) memisahkan pergeseran fase akibat denyut jantung (gerakan mikro dinding dada 0.08 mm) dan akibat pernapasan (gerakan 12 mm) sehingga tanda vital beberapa orang sekaligus bisa dipantau tanpa saling mengganggu.

---

## 🧠 3. Bio-akustik Non-Batuk (Analisis Suara Tangisan Bayi)
*Menggunakan analisis spektrogram audio tangisan bayi untuk mendeteksi penyakit saraf bawaan atau sesak napas.*

*   **Judul Jurnal Rujukan:**
    1.  *“Non-invasive classification of infant crying sounds using deep learning for early detection of neurological disorders”* (Journal of Acoustic Medical - 2023)
    2.  *“A classification framework for identifying infant pain, hunger, and stress based on acoustic cry features”* (IEEE Transactions on Affective Computing - 2024)
*   **Bagaimana Cara Kerjanya secara Fisik?**
    Bayi yang mengalami hipoksia (kekurangan oksigen saat lahir) atau penyakit saraf bawaan memiliki karakteristik pita suara dan frekuensi dasar (*fundamental frequency* / F0) tangisan yang berbeda secara akustik (melengking ekstrem atau serak tidak wajar) dibanding bayi sehat. AI mengekstrak spektrogram tangisan dan mengklasifikasikannya secara otomatis.
