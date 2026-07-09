Here is the comprehensively rewritten version of the journal article in English, maintaining the exact structure, data, methodologies, and technical meaning of the original document, formatted in Markdown.

***

# A Comparison of Data Mining Classification Methods for Detecting the Authenticity of Job Vacancies on Social Media
**Authors:** Mohammad Malik Fajar, Annisa Rizkiana Putri, Khadijah Fahmi Hayati Holle  
**Affiliation:** Informatics Engineering Study Program, Universitas Islam Negeri Maulana Malik Ibrahim, Malang, Indonesia  
**Journal:** Jurnal Ilmiah Informatika (JIMI), Volume 7, Issue 1, pp. 41–48, June 2022  

## Abstract
The global shift triggered by the COVID-19 pandemic has led to widespread job losses and corporate bankruptcies, forcing many individuals to seek employment through social media platforms. Unfortunately, this surge in online job hunting has been exploited by unscrupulous actors who post fraudulent job vacancies for personal gain or malicious purposes. To address this issue, this study compares three data mining classification algorithms—Naive Bayes, K-Nearest Neighbor (KNN), and Decision Tree—to detect the authenticity of job postings on social media. Utilizing the CRISP-DM methodology and a dataset sourced from Kaggle, the models were evaluated to determine which algorithm yields the highest accuracy. The experimental results demonstrate that the KNN method achieves the highest accuracy at 94.93%, followed by the Decision Tree model at 91.57%, and the Naive Bayes model at 84.35%. Consequently, KNN is identified as the most effective method for classifying and preventing job vacancy fraud on social media.

**Keywords:** Classification, Naive Bayes, KNN, Decision Tree, Accuracy Value.

---

## 1. Introduction
Indonesia ranks sixth globally and fourth in Asia in terms of cybercrime incidents, serving as a stark warning to remain vigilant against digital threats. In the modern era, social media has become a primary venue for job searching; however, not all posted vacancies are legitimate. Irresponsible individuals frequently create fake job listings to commit fraud, deceiving job seekers and tarnishing the reputations of legitimate companies. A notable historical example involves public companies on platforms like Facebook, email, and Google around 2007 and 2009, where fraudulent job information was manipulated and published to exploit digital job seekers.

This study aims to build and compare classification models to determine whether a social media job posting is genuine or fake. The models are developed using a dataset obtained from Kaggle and processed via RapidMiner software. The three classification algorithms compared in this research are Naive Bayes, K-Nearest Neighbor (KNN), and Decision Tree. 

Previous studies have explored similar comparative analyses. For instance, research on student program classification found that the Decision Tree (C4.5) algorithm achieved an accuracy of 96.73%. Another study comparing algorithms for skin disease prediction concluded that Naive Bayes and SVM outperformed C4.5 and KNN. In the context of employment status analysis in Demak Regency, KNN proved superior to Naive Bayes with a lower error rate. Additionally, a study on poverty classification in Tibawa District using Naive Bayes yielded a 73% accuracy rate. Building on these foundations, this research specifically targets the detection of fake job vacancies on social media.

---

## 2. Research Methodology
This study employs the **CRISP-DM** (Cross-Industry Standard Process for Data Mining) framework, which consists of six sequential phases:
1.  **Business Understanding:** Defining the project objectives and the underlying business context.
2.  **Data Understanding:** Collecting the initial dataset, exploring its properties, and identifying data quality issues.
3.  **Data Preparation:** Cleaning the data, handling missing values, transforming variables, and selecting features for modeling.
4.  **Modeling:** Applying the chosen data mining algorithms (Naive Bayes, KNN, Decision Tree) to build the classification models.
5.  **Evaluation:** Assessing the models based on performance metrics (accuracy) and reviewing the process to ensure the objectives are met.
6.  **Deployment:** Organizing the findings and preparing the final report for practical application.

---

## 3. Results and Discussion

### 3.1 Business Understanding
The core problem addressed in this research is the vulnerability of job seekers during the pandemic. Many individuals faced layoffs or company bankruptcies, leading them to rely heavily on social media for job opportunities. While social media offers limitless job postings, it also hosts numerous fake vacancies created by malicious actors for fraud. The objective is to compare Decision Tree, KNN, and Naive Bayes to identify the best model for authenticating social media job postings.

### 3.2 Data Understanding
The dataset utilized in this study is sourced from Kaggle, titled "fake job postings." It contains a mix of genuine and fraudulent job vacancies in CSV format. The dataset comprises 18 attributes: `job_id`, `title`, `location`, `department`, `salary_range`, `company_profile`, `description`, `requirements`, `benefits`, `telecommuting`, `has_questions`, `employment_type`, `required_experience`, `required_education`, `industry`, `function`, and the target variable `fraudulent`.

### 3.3 Data Preparation
The dataset consists of 17,880 rows. During the initial exploration, a total of 49,468 missing data points (cells) were identified across the attributes. The data preparation process in RapidMiner involved the following steps:
1.  **Read CSV:** Loading the dataset into the workflow.
2.  **Replace Missing Value:** Handling null values specifically in the `company_profile` attribute by assigning a value of `0` for missing data and `1` for present data.
3.  **Select Attributes:** Filtering the dataset to retain only the relevant features for modeling.
4.  **Filter Examples:** Removing any remaining rows that still contained missing values to ensure data integrity.
After these steps, the dataset was cleansed and ready for the modeling phase.

### 3.4 Modeling
The prepared dataset was split into training and testing subsets. The modeling phase utilized the **Cross Validation Nominal** operator in RapidMiner, which is suitable for nominal data types. Inside the cross-validation loop, the three algorithms—Decision Tree, KNN, and Naive Bayes—were trained and tested. To statistically compare the performance of the models, a **T-test** operator was applied to the cross-validation results.

### 3.5 Evaluation
The primary metric for evaluation is **Accuracy**, which measures the proportion of correctly classified instances. The evaluation yielded the following results:
*   **K-Nearest Neighbor (KNN):** 94.93%
*   **Decision Tree:** 91.57%
*   **Naive Bayes:** 84.35%

The T-test analysis confirmed the statistical significance of these performance differences. Based on the accuracy values, the KNN model emerged as the superior algorithm for this specific classification task.

### 3.6 Deployment
While the developed models are functional and capable of detecting fake job postings, there is room for improvement to achieve even higher accuracy. Future enhancements should focus on increasing the volume of the dataset and introducing greater data variance. A more diverse dataset will allow the models to extract richer patterns and knowledge. Additionally, exploring other advanced classification algorithms could further optimize detection capabilities.

---

## 4. Conclusion
This research successfully compared three data mining classification methods—Decision Tree, KNN, and Naive Bayes—for detecting the authenticity of job vacancies on social media. The experimental results indicate that the **KNN method** achieves the highest accuracy at **94.93%**, significantly outperforming the Decision Tree (91.57%) and Naive Bayes (84.35%) models. Therefore, KNN is concluded to be the most optimal algorithm for classifying and mitigating fake job posting fraud on social media platforms.

---

## References
1.  I. Sutoyo, "Perbandingan 5 Algoritma Data Mining Untuk Klasifikasi Data Peserta Didik," *Simnasiptek*, 2017.
2.  D. Prajarini, S. Tinggi, S. Rupa, D. Desain, and V. Indonesia, "Perbandingan Algoritma Klasifikasi Data Mining Untuk Prediksi Penyakit Kulit," *Informatics Journal*, vol. 1, no. 3, 2016.
3.  N. I. Wibowo, T. A. Maulana, H. Muhammad, and N. A. Rakhmawati, "Perbandingan Algoritma Klasifikasi Sentimen Twitter Terhadap Insiden Kebocoran Data Tokopedia," *JISKA (Jurnal Informatika Sunan Kalijaga)*, vol. 6, no. 2, 2021.
4.  R. E. Putri, Suparti, and R. Rahmawati, "Perbandingan Metode Klasifikasi Naïve Bayes Dan K-Nearest Neighbor Pada Analisis Data Status Kerja Di Kabupaten Demak Tahun 2012," *Jurnal Gaussian*, vol. 3, no. 4, 2014.
5.  H. Annur, "Klasifikasi Masyarakat Miskin Menggunakan Metode Naive Bayes," *ILKOM Jurnal Ilmiah*, vol. 10, no. 2, 2018.
6.  G. Fiastantyo, "Perbandingan Kinerja Metode Klasifikasi Data Mining Menggunakan Naive Bayes dan Algoritma C4.5 untuk Prediksi Ketepatan Waktu Kelulusan Mahasiswa," *Semantic Journal*, 2014.
7.  A. W. Indra Purnama and R. Saputra, "Implementasi Data Mining Menggunakan Crisp-Dm Pada Sistem Informasi Eksekutif Dinas Kelautan Dan Perikanan Provinsi Jawa Tengah," *Annual Review of Information Science and Technology*, vol. 36, 2017.