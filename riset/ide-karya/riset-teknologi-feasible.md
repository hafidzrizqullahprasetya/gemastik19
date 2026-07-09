# Riset Teknologi Feasible untuk GEMASTIK XIX (2026)

**Tanggal riset:** 9 Juli 2026
**Kriteria:** Biaya <$500, implementasi 3-6 bulan, dataset bisa dikumpulkan sendiri, referensi open-source tersedia, relevan untuk masalah Indonesia.

---

## A. ON-DEVICE AI (Tanpa Cloud)

### A1. Model AI Ringan

| Model | Parameter | FLOPs | Akurasi (COCO/ImageNet) | Latency | Ukuran |
|-------|-----------|-------|--------------------------|---------|--------|
| **YOLO26-nano** | 2.7M | 6.5G | 40.9 mAP (COCO) | 1.7ms (T4) | ~10MB |
| **YOLO26-small** | 8.4M | 19.9G | 48.0 mAP (COCO) | 2.5ms (T4) | ~34MB |
| **YOLOv8-nano** | 3.2M | 8.7G | 37.3 mAP (COCO) | ~12ms (CPU) | ~12MB |
| **YOLO11-nano** | 2.6M | 6.5G | 39.5 mAP (COCO) | ~11ms (CPU) | ~10MB |
| **MobileNetV3-Large** | 5.4M | - | 75.2% (ImageNet) | ~5ms (mobile) | ~22MB |
| **EfficientNet-Lite0** | 4.7M | 0.39G | 75.1% (ImageNet) | ~8ms (mobile) | ~18MB |
| **EfficientNet-Lite4** | 13M | 1.44G | 81.5% (ImageNet) | ~15ms (mobile) | ~52MB |

**Catatan penting:**
- YOLO26 (rilis Juni 2025) adalah generasi terbaru dengan native end-to-end inference, 43% lebih cepat di CPU dibanding YOLO11-nano
- Semua model nano/small bisa jalan di Raspberry Pi 5 dan HP Android mid-range
- Untuk deteksi objek real-time di edge, YOLO26-nano adalah pilihan terbaik saat ini

### A2. Framework

| Framework | Platform | Fitur Utama | Lisensi |
|-----------|----------|-------------|---------|
| **TensorFlow Lite** | Android, iOS, MCU, RPi | Quantization, delegate GPU/NNAPI | Apache 2.0 |
| **ONNX Runtime Mobile** | Android, iOS, RPi | Optimized untuk mobile, reduced ops | MIT |
| **MediaPipe** | Android, iOS, Web, RPi | Pre-built solutions (face, pose, hand) | Apache 2.0 |
| **Edge Impulse** | Semua platform | End-to-end MLOps, visual training | Freemium (free tier tersedia) |
| **PyTorch Mobile** | Android, iOS | TorchScript, mobile optimizer | BSD |

### A3. Estimasi & Referensi

- **Biaya:** $0 (software) + biaya hardware (lihat bagian E)
- **Waktu implementasi:** 2-4 minggu untuk setup + fine-tuning
- **Paper referensi:**
  - YOLO26: "Ultralytics YOLO26" (arXiv:2606.03748, 2025)
  - MobileNetV3: "Searching for MobileNetV3" (ICCV 2019)
  - EfficientNet: "EfficientNet: Rethinking Model Scaling for CNNs" (ICML 2019)
- **Library open-source:**
  - `ultralytics` (pip install ultralytics) - YOLO26, YOLOv8, YOLO11
  - `tensorflow/lite` - TFLite runtime
  - `onnx/onnxruntime` - ONNX inference
  - `google/mediapipe` - MediaPipe solutions

---

## B. AUDIO/SPEECH AI

### B1. Deteksi Suara Lingkungan

| Model | Kelas Audio | Dataset Training | Ukuran | Latency |
|-------|-------------|------------------|--------|---------|
| **YAMNet** | 521 kelas | AudioSet (2.1M klip) | ~4MB | <10ms |
| **AST (Audio Spectrogram Transformer)** | 527 kelas | AudioSet | ~90MB | ~30ms |
| **PANNs (Cnn14)** | 527 kelas | AudioSet | ~80MB | ~20ms |

**AudioSet** (Google): 2.1 juta video YouTube teranotasi, 632 kelas suara, 5800 jam audio. Dataset terbesar dan paling komprehensif untuk audio event detection.

### B2. Speech Emotion Recognition (SER)

| Model/Library | Arsitektur | Dataset | Akurasi | Bahasa |
|---------------|------------|---------|---------|--------|
| **SenseVoice** (FunAudioLLM) | Non-autoregressive | Multilingual | State-of-art | 50+ bahasa (termasuk ID) |
| **emotion2vec** | Self-supervised (wav2vec2) | IEMOCAP | 87%+ | Multilingual |
| **TIM-Net** | Temporal CNN | Multi-dataset | 70-85% | Multilingual |
| **wav2vec2-SER** | Transformer fine-tune | IEMOCAP, RAVDESS | 80-90% | Multilingual |

**Dataset SER publik:**

| Dataset | Bahasa | Emosi | Ukuran | Akses |
|---------|--------|-------|--------|-------|
| **RAVDESS** | Inggris | 8 emosi | 24 aktor, 7356 file | Free (CC) |
| **IEMOCAP** | Inggris | 6 emosi | 12 jam, 10k utterances | Berbayar ($50) |
| **EmoDB** | Jerman | 7 emosi | 10 aktor, 535 utterances | Free |
| **SAVEE** | Inggris | 7 emosi | 4 aktor, 480 utterances | Free |
| **CASIA** | Mandarin | 6 emosi | 4 aktor, 9600 utterances | Free |

### B3. Keyword Spotting On-Device

| Model | Keyword | Ukuran | Akurasi |
|-------|---------|--------|---------|
| **MicroNet** (TF Lite) | 10-20 keyword | <1MB | 95%+ |
| **DS-CNN** (Depthwise Separable) | 35 keyword | ~1MB | 96.5% |
| **Google Speech Commands** | 35 keyword | ~4MB | 97%+ |

### B4. Estimasi & Referensi

- **Biaya:** $0 (dataset publik) + $10-30 (mikrofon USB berkualitas)
- **Waktu implementasi:** 3-6 minggu
- **Paper referensi:**
  - YAMNet: "YAMNet: Yet Another Mobile Network" (Google, 2019)
  - AST: "AST: Audio Spectrogram Transformer" (INTERSPEECH 2022)
  - SenseVoice: arXiv (2024), 15x lebih cepat dari Whisper
  - emotion2vec: "Self-Supervised Pre-Training for Speech Emotion Representation" (ACL 2024)
  - TIM-Net: "Temporal Modeling Matters" (ICASSP 2023)
- **Library open-source:**
  - `FunAudioLLM/SenseVoice` (GitHub, 8.8k stars) - ASR + SER + audio event
  - `ddlBoJack/emotion2vec` (GitHub, 1.2k stars) - SER pre-trained
  - `Jiaxin-Ye/TIM-Net_SER` (GitHub, 191 stars) - ICASSP 2023
  - `librosa` - Audio feature extraction (MFCC, spectrogram)
  - `opensmile` - Audio feature extraction toolkit
  - `SuperKogito/SER-datasets` - Kumpulan dataset SER

---

## C. SENSOR MURAH (Under $50 per Sensor)

### C1. IMU (Accelerometer + Gyroscope)

| Sensor | Harga | Fitur | Akurasi | Interface |
|--------|-------|-------|---------|-----------|
| **MPU-6050** | $2-5 | 6-axis (acc+gyro) | ±2g/±250°/s | I2C |
| **MPU-9250** | $5-10 | 9-axis (+magnetometer) | ±16g/±2000°/s | I2C/SPI |
| **BMI270** (Bosch) | $5-8 | 6-axis, ultra-low power | ±16g/±2000°/s | I2C/SPI |
| **LSM6DSO** (ST) | $4-7 | 6-axis, ML core | ±16g/±2000°/s | I2C/SPI |

**Use case:** Deteksi jatuh (fall detection), aktivitas fisik, gesture recognition, getaran mesin.

### C2. PPG Sensor (Detak Jantung & SpO2)

| Sensor | Harga | Fitur | Akurasi | Interface |
|--------|-------|-------|---------|-----------|
| **MAX30102** | $5-10 | HR + SpO2 | ±2 bpm, ±2% SpO2 | I2C |
| **MAX30105** | $8-15 | HR + SpO2 + particle sensing | ±2 bpm | I2C |
| **MAX86141** | $10-20 | HR + SpO2, ultra-low power | Medical grade | I2C/SPI |

**Use case:** Monitoring detak jantung, deteksi stres, sleep quality, fitness tracking.

### C3. Ultrasonic & LiDAR Murah

| Sensor | Harga | Range | Akurasi | Interface |
|--------|-------|-------|---------|-----------|
| **HC-SR04** | $1-3 | 2cm-4m | ±3mm | GPIO |
| **JSN-SR04T** | $5-8 | 20cm-6m (waterproof) | ±5mm | GPIO |
| **VL53L0X** (ToF) | $5-10 | 3cm-2m | ±3% | I2C |
| **VL53L1X** (ToF) | $8-15 | 4cm-4m | ±1% | I2C |
| **TF-Luna LiDAR** | $15-25 | 0.2m-8m | ±1cm | UART/I2C |

**Use case:** Navigasi robot, pengukuran jarak, obstacle detection, smart parking.

### C4. Gas Sensor (Kualitas Udara)

| Sensor | Harga | Gas Terdeteksi | Sensitivitas | Interface |
|--------|-------|----------------|--------------|-----------|
| **MQ-2** | $2-3 | LPG, CO, asap, alkohol | 200-10000ppm | Analog |
| **MQ-7** | $2-3 | CO (karbon monoksida) | 20-2000ppm | Analog |
| **MQ-135** | $3-5 | NH3, NOx, CO2, VOC | 10-1000ppm | Analog |
| **BME680** | $8-15 | VOC + temp + humidity + pressure | IAQ index | I2C/SPI |
| **SGP30** | $8-12 | VOC + eCO2 | 0-60000ppb | I2C |
| **PMS5003** | $12-20 | PM1.0, PM2.5, PM10 | ±10μg/m³ | UART |

**Use case:** Monitoring kualitas udara dalam/luar ruangan, deteksi kebocoran gas, smart farming.

### C5. Pressure/Force Sensor

| Sensor | Harga | Range | Aplikasi | Interface |
|--------|-------|-------|----------|-----------|
| **FSR 402** | $5-8 | 20g-20kg | Postur, grip | Analog |
| **FSR 406** | $8-12 | 20g-20kg (larger area) | Seat pressure | Analog |
| **HX711 + Load Cell** | $5-10 | 1kg-50kg | Timbangan | Digital |
| **BMP280** | $2-4 | 300-1100hPa | Altitude, weather | I2C/SPI |

**Use case:** Deteksi postur duduk, smart chair, timbangan IoT, monitoring tekanan kaki.

### C6. Estimasi & Referensi

- **Biaya total (semua sensor):** $50-150 untuk set lengkap
- **Waktu implementasi:** 1-3 minggu per sensor (integrasi + kalibrasi)
- **Paper referensi:**
  - Fall detection: "A Survey of Fall Detection Systems" (IEEE Access, 2021)
  - PPG: "Remote Heart Rate Measurement Based on PPG" (Sensors, 2020)
  - Air quality: "Low-Cost Air Quality Monitoring" (Atmosphere, 2020)
- **Library open-source:**
  - `Adafruit_CircuitPython` - Driver untuk semua sensor di atas
  - `Arduino IDE` libraries - MPU6050, MAX30102, MQ series
  - `ESP-IDF` - Native ESP32 sensor drivers

---

## D. COMPUTER VISION RINGAN

### D1. Face Detection + Emotion

| Solusi | Landmarks | Latency (mobile) | Ukuran | Fitur |
|--------|-----------|-------------------|--------|-------|
| **MediaPipe Face Mesh** | 478 titik | <10ms (GPU) | ~5MB | Real-time, 3D face mesh |
| **MediaPipe Face Detection** | 6 keypoint | <5ms | ~3MB | Bounding box + keypoints |
| **InsightFace** | 106 titik | ~20ms | ~50MB | Face recognition + emotion |

### D2. Pose Estimation

| Solusi | Keypoints | Latency | Ukuran | Akurasi (COCO) |
|--------|-----------|---------|--------|----------------|
| **MoveNet Lightning** | 17 | <10ms | ~3MB | Cepat, kurang akurat |
| **MoveNet Thunder** | 17 | ~20ms | ~6MB | Lebih akurat |
| **BlazePose (MediaPipe)** | 33 | ~15ms | ~5MB | Full body 3D |
| **YOLO26-pose** | 17 | ~5ms (T4) | ~10MB | 52.6 AP (COCO) |

### D3. Hand Tracking

| Solusi | Landmarks | Latency | Ukuran | Fitur |
|--------|-----------|---------|--------|-------|
| **MediaPipe Hands** | 21 titik/tangan | <10ms | ~5MB | 2 tangan, gesture recognition |
| **Hand Landmark (MediaPipe)** | 21 titik + gesture | ~10ms | ~5MB | 18 gesture pre-built |

### D4. Object Detection

| Model | mAP (COCO) | Latency | Ukuran | Catatan |
|-------|------------|---------|--------|---------|
| **YOLO26-nano** | 40.9 | 1.7ms (T4) | ~10MB | Terbaru, end-to-end |
| **YOLO26-small** | 48.0 | 2.5ms (T4) | ~34MB | Balance speed/accuracy |
| **YOLOv8-nano** | 37.3 | ~12ms (CPU) | ~12MB | Stabil, banyak tutorial |
| **YOLO11-nano** | 39.5 | ~11ms (CPU) | ~10MB | Good balance |
| **MobileNet-SSD** | 22.0 | ~15ms (mobile) | ~27MB | Sangat ringan |

### D5. Estimasi & Referensi

- **Biaya:** $0 (semua open-source)
- **Waktu implementasi:** 1-3 minggu per use case
- **Paper referensi:**
  - MediaPipe: "MediaPipe: A Framework for Perceiving and Processing Reality" (ACM, 2019)
  - BlazePose: "BlazePose: On-device Real-time Body Pose Tracking" (CVPR Workshop 2020)
  - MoveNet: "MoveNet: Ultra-fast and Accurate Pose Detection" (Google, 2021)
  - YOLO26: arXiv:2606.03748 (2025)
- **Library open-source:**
  - `google/mediapipe` - Face mesh, hands, pose (Python, JS, Android, iOS)
  - `ultralytics` - YOLO26, YOLOv8, YOLO11 (pip install)
  - `tensorflow/tfjs-models` - MoveNet, BlazePose untuk web

---

## E. EDGE COMPUTING PLATFORMS

### E1. Hardware

| Platform | Harga | CPU | RAM | Konektivitas | Power |
|----------|-------|-----|-----|-------------|-------|
| **Raspberry Pi 5** | $60-80 | BCM2712, 2.4GHz quad-core | 4/8GB | WiFi, BT, Ethernet, USB3 | 5V/5A (25W) |
| **Raspberry Pi Zero 2 W** | $15-20 | BCM2710A1, 1GHz quad | 512MB | WiFi, BT | 5V/1.2A (6W) |
| **ESP32-S3** | $5-10 | Xtensa LX7, 240MHz dual | 512KB+8MB PSRAM | WiFi, BT 5.0 | 3.3V, ~100mA |
| **ESP32-C6** | $3-5 | RISC-V, 160MHz | 512KB+4MB | WiFi 6, BT 5, Zigbee | 3.3V, ~80mA |
| **Arduino Portenta H7** | $100 | STM32H747, 480MHz dual | 1MB+8MB | WiFi, BT, Ethernet | 5V, ~200mA |
| **Seeed XIAO ESP32S3** | $8-12 | Xtensa LX7, 240MHz | 512KB+8MB | WiFi, BT | 3.3V, ~90mA |
| **Orange Pi Zero 3** | $15-25 | H618, 1.5GHz quad | 1-4GB | WiFi, BT, Ethernet | 5V/2A |

### E2. Framework Edge AI

| Framework | Platform Target | Fitur | Lisensi |
|-----------|-----------------|-------|---------|
| **Edge Impulse** | Semua MCU + Linux | Visual IDE, data collection, training, deployment | Free tier (developer) |
| **TensorFlow Lite Micro** | MCU (ESP32, Arduino, dll) | <100KB footprint, C++ | Apache 2.0 |
| **TensorFlow Lite** | Linux SBC (RPi, Orange Pi) | Python/C++ API, GPU delegate | Apache 2.0 |
| **ONNX Runtime** | Linux SBC, mobile | Cross-platform, optimized | MIT |
| **ESP-DL** | ESP32 series | Native ESP32 deep learning | Apache 2.0 |
| **OpenMV** | OpenMV Cam (STM32) | IDE + firmware, MicroPython | MIT |

### E3. Power Consumption & Battery Life

| Platform | Idle | Active (AI inference) | Battery 5000mAh |
|----------|------|-----------------------|-----------------|
| RPi 5 | ~2W | 5-8W | ~3-4 jam |
| RPi Zero 2 W | ~0.5W | 1.5-2W | ~12-15 jam |
| ESP32-S3 | ~20mW | 100-200mW | ~24-48 jam |
| ESP32-C6 | ~15mW | 80-150mW | ~36-72 jam |
| Arduino Portenta | ~50mW | 200-400mW | ~12-24 jam |

### E4. Estimasi & Referensi

- **Biaya:** $15-100 per board (tergantung pilihan)
- **Waktu implementasi:** 1-2 minggu setup environment
- **Paper referensi:**
  - "TinyML: Machine Learning with TensorFlow Lite" (O'Reilly, 2019)
  - "Edge AI: Convergence of Edge Computing and AI" (IEEE, 2020)
- **Library open-source:**
  - `edgeimpulse/edge-impulse-cli` - CLI tools
  - `tensorflow/tflite-micro` - TFLite Micro
  - `espressif/esp-dl` - ESP32 deep learning

---

## F. DATASET COLLECTION METHODS

### F1. Citizen Science (Crowdsourcing)

| Platform | Tipe Data | Fitur | Biaya |
|----------|-----------|-------|-------|
| **KoboToolbox** | Survey, foto, GPS, audio | Offline-first, mobile app, 952+ repos | Free (open-source) |
| **ODK (Open Data Kit)** | Survey, foto, GPS | XForms, offline, enkripsi | Free (open-source) |
| **Zooniverse** | Klasifikasi gambar/audio | Crowdsourcing global, API | Free |
| **SciStarter** | Berbagai tipe | Hub untuk 5000+ proyek | Free |

**KoboToolbox** sangat direkomendasikan untuk konteks Indonesia:
- Digunakan oleh organisasi kemanusiaan, NGO, dan peneliti di seluruh dunia
- Support offline data collection (penting untuk daerah terpencil)
- Bisa collect: teks, foto, audio, video, GPS, barcode
- Export ke CSV, JSON, GeoJSON
- Self-hostable (Docker) atau cloud gratis (5000 submissions/bulan)

### F2. Mobile App untuk Data Collection

| Tool | Platform | Fitur Utama | Biaya |
|------|----------|-------------|-------|
| **KoboCollect** (Android) | Android | Offline, XForms, multimedia | Free |
| **ODK Collect** | Android | Offline, XForms, enkripsi | Free |
| **Epicollect5** | Android/iOS | Citizen science, GPS, media | Free |
| **AppSheet** | Android/iOS/Web | No-code, Google Sheets backend | Free tier |

### F3. Sensor Logging Otomatis

| Metode | Hardware | Software | Output |
|--------|----------|----------|--------|
| **ESP32 + SD card** | ESP32, sensor, SD module | Arduino/ESP-IDF | CSV/JSON di SD |
| **RPi + InfluxDB** | RPi, sensor | Python, InfluxDB | Time-series DB |
| **ESP32 + MQTT** | ESP32, sensor | MQTT broker | Real-time streaming |
| **Arduino + BLE** | Arduino Nano 33 BLE | BLE + mobile app | Data ke HP |

### F4. Wawancara Terstruktur dengan Recording

| Tool | Platform | Fitur | Biaya |
|------|----------|-------|-------|
| **KoboToolbox + audio** | Mobile | Survey + audio recording | Free |
| **Whisper (OpenAI)** | Python | Transkripsi otomatis, 50+ bahasa | Free (open-source) |
| **faster-whisper** | Python | 4x lebih cepat dari Whisper | Free |
| **SenseVoice** | Python | ASR + emotion + audio event | Free |

### F5. Estimasi & Referensi

- **Biaya:** $0 (software open-source) + $10-30 (mikrofon jika audio)
- **Waktu implementasi:** 1-2 minggu setup + durasi pengumpulan data
- **Referensi:**
  - KoboToolbox: https://www.kobotoolbox.org (dokumentasi lengkap)
  - ODK: https://getodk.org (dokumentasi + tutorial)
  - Whisper: `openai/whisper` (GitHub, 70k+ stars)
  - faster-whisper: `SYSTRAN/faster-whisper` (GitHub, 15k+ stars)

---

## MATRIKS REKOMENDASI: Teknologi Paling Feasible

### Ranking berdasarkan 5 kriteria (skala 1-5, 5=terbaik)

| Teknologi | Biaya | Waktu | Dataset | Referensi | Relevansi ID | **TOTAL** |
|-----------|-------|-------|---------|-----------|-------------|-----------|
| **MediaPipe (Face/Pose/Hand)** | 5 | 5 | 4 | 5 | 5 | **24** |
| **YOLO-nano (object detection)** | 5 | 4 | 4 | 5 | 5 | **23** |
| **ESP32-S3 + sensor suite** | 5 | 4 | 5 | 4 | 5 | **23** |
| **Speech Emotion Recognition** | 5 | 3 | 3 | 4 | 5 | **20** |
| **KoboToolbox (data collection)** | 5 | 5 | 5 | 4 | 5 | **24** |
| **Edge Impulse (end-to-end)** | 4 | 4 | 4 | 4 | 4 | **20** |
| **Audio event detection (YAMNet)** | 5 | 4 | 4 | 4 | 4 | **21** |
| **Raspberry Pi 5 + TFLite** | 4 | 4 | 4 | 5 | 4 | **21** |

---

## KOMBINASI TEKNOLOGI TERBAIK (Rekomendasi untuk GEMASTIK)

### Paket 1: "Smart Health Screener" (Biaya: ~$100-200)
**Kombinasi:** MediaPipe Face Mesh + PPG Sensor (MAX30102) + ESP32-S3 + KoboToolbox
- Face mesh untuk deteksi ekspresi wajah/stres
- PPG untuk detak jantung dan SpO2
- KoboToolbox untuk data collection terstruktur
- **Relevansi Indonesia:** Skrining kesehatan mental/stres di puskesmas, sekolah, daerah terpencil

### Paket 2: "Environmental Guardian" (Biaya: ~$80-150)
**Kombinasi:** ESP32-S3 + Gas sensors (MQ/PMS5003) + YOLO-nano + KoboToolbox
- Sensor gas untuk kualitas udara
- YOLO untuk deteksi sumber polusi/kebakaran
- KoboToolbox untuk citizen science reporting
- **Relevansi Indonesia:** Monitoring polusi udara, deteksi kebakaran hutan/lahan

### Paket 3: "Assistive Technology" (Biaya: ~$100-250)
**Kombinasi:** MediaPipe Hands + Pose + Audio AI + Raspberry Pi 5
- Hand tracking untuk sign language detection
- Pose estimation untuk deteksi jatuh (lansia)
- Audio AI untuk deteksi suara darurat
- **Relevansi Indonesia:** Teknologi asistif untuk disabilitas & lansia

### Paket 4: "Smart Agriculture" (Biaya: ~$80-200)
**Kombinasi:** ESP32-S3 + Sensor suite (soil, temp, humidity) + YOLO-nano + KoboToolbox
- Sensor tanah dan lingkungan untuk monitoring tanaman
- YOLO untuk deteksi hama/penyakit tanaman
- KoboToolbox untuk pelaporan petani
- **Relevansi Indonesia:** Pertanian cerdas untuk ketahanan pangan

### Paket 5: "Disaster Response" (Biaya: ~$100-200)
**Kombinasi:** Audio AI (YAMNet) + IMU sensor + YOLO + KoboToolbox
- Audio detection untuk suara bencana (longsor, banjir)
- IMU untuk deteksi getaran gempa
- YOLO untuk damage assessment
- KoboToolbox untuk pelaporan bencana
- **Relevansi Indonesia:** Indonesia rawan bencana alam

---

## RINGKASAN BIAYA TOTAL (Estimasi Prototipe)

| Komponen | Biaya Minimum | Biaya Maksimum |
|----------|---------------|----------------|
| Hardware (SBC/MCU) | $15 | $80 |
| Sensor suite | $20 | $100 |
| Kamera (jika perlu) | $10 | $30 |
| Mikrofon (jika perlu) | $5 | $20 |
| Komponen pendukung (kabel, breadboard, dll) | $10 | $30 |
| Casing/enclosure (3D print) | $10 | $30 |
| **TOTAL** | **$70** | **$290** |

Semua paket berada **jauh di bawah batas $500**, memberikan ruang untuk iterasi dan komponen cadangan.
