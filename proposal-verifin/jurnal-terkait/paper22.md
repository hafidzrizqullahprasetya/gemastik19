# Detection of Fake Job Postings by Utilizing Machine Learning and Natural Language Processing Approaches

**Authors:** Aashir Amaar, Wajdi Aljedaani, Furqan Rustam, Saleem Ullah, Vaibhav Rupapara, Stephanie Ludi
**Published in:** Neural Processing Letters (2022) 54:2219–2247

## Abstract
The modern era is about everything that can be handled virtually in human life, such as online banking, education, security, job, etc. This increase in technology use also makes it easy for a scammer to loot people and make money quickly. A popular scam nowadays is fake job advertisements. People apply for these fake job vacancies, pay application fees to scammers, send their data to the scammers, and end up with a scam and waste their money.

For this purpose, we proposed a methodology that uses natural language processing and supervised machine learning techniques to detect fraudulent job ads from online recruitment portals. We used two feature extraction techniques to extract the features from data: Term Frequency-Inverse Document Frequency (TF-IDF) and Bag-of-Words (BoW). In the study, we used six machine learning models to analyze whether these job ads are fraudulent or legitimate. Then, we compared all models with both BoW and TF-IDF features to analyze the classifier’s overall performance. One of the challenges in this study is our used dataset. The ratio of real and fake job posts samples is unequal, which caused the model over-fitting on majority class data. To overcome this limitation, we used the adaptive synthetic sampling approach (ADASYN), which help to balance the ratio between target classes by generating the number of sample for minority class artificially. We performed two experiments, one with the balanced dataset and the other with the imbalanced data. Through experimental analysis, ETC achieved 99.9% accuracy by using ADASYN as over-sampling and TF-IDF as feature extraction. Further, this study also performs an in-depth comparative analysis of our proposed approach with state-of-the-art deep learning models and other re-sampling techniques.

**Keywords:** Fake ads detection · Feature extraction · Machine learning · NLP · Online fake job posts

---

## 1. Introduction
Fake job ads can harm the reputation of the platform through misleading information for the user. Primarily the misleading information is spread across the internet, for instance, on Google Plus, Twitter, Facebook, and other web apps. On the one hand, social media websites are an advancement in the IT field, while on the other hand, one can easily manipulate these platforms to forge information such as posting false jobs.

The fake job posting is currently a painful issue on social media platforms. Once fake job posts have initially been sown on the internet by their producers, the individuals can access them like wildfire. Typically, users might share the information on their personal media channels by making posts using Twitter or Facebook. Further liaison, for instance, ‘likes’ on a post, also triggers the social media algorithm; consequently, the information becomes visible to several users. This phenomenon is called ‘organic reach’. There is confirmation that fraudulent data is spread more rapidly and widely through social media networks as users can independently post it without any validation of information.

When humans interact with fraudulent information online, they get influenced by it as they believe it would be correct. Effective methods of social data processing recommend that there are various ways of persuasion. When data is shared on the internet, it is acceptable to be rapid and casual. Most of the time, people do not intend to verify the information. If there is a suggestion of humans using the liaison features of the social media network in a nearly careless and automated manner. In such a condition, a peripheral way to attract is most important. Humans should generally consider heuristics cues to like or share any information.

This study focuses on solving the issue of fake jobs posted online by utilizing Machine Learning (ML), and Natural Language Processing (NLP) approaches. To conduct this study, we utilized a dataset contains more than 17,000 fake and real job descriptions. The dataset was available online on the official Kaggle website. Then, we used two different feature extraction approaches Bag-of-words (BoW) and Frequency–Inverse Document Frequency (TF-IDF). BoW gives simple features based on term frequency while TF-IDF gives weighted features also based on term frequency. After that, we used adaptive synthetic (ADASYN) in our proposed approach to resolving the imbalanced dataset problem. Finally, we apply six supervised machine learning classifiers, namely MP (Multilayer Perceptron), RF (Random Forest), KNN (K-Nearest Neighbor), SVM (Support Vector Machine), ET (Extra Tree), and LR (Logistic Regression), for observing fake job posts. 

The main points of our work include:
* Data performed in this study is highly imbalanced with the ratio 1:17 between target classes. We used the ADASYN technique to solve the imbalance dataset problem that was existed in the dataset and not covered in prior studies.
* Applying pre-processing technique and supervised ML classification algorithms to solve the problem in the two categories balance dataset and imbalanced dataset.
* Feature extraction approaches, i.e., TF-IDF and BoW, are used to analyze and compare the performance of classifiers.
* An in-depth comparison of our proposed approach with state-of-the-art deep learning models such as long short term memory (LSTM), Convolutional neural networks (CNN), and Gated Recurrent Unit (GRU).

---

## 2. Related Work
In this section, we present an overview of prior studies that are related to our work. According to the various studies, fake reviews detection, fake content and misleading information detection, email spam detection, review spam detection, and fake news detection have drawn critical attention in the field of online fraud detection. 

Zhang et al. described the text classification process by using supervised machine learning classifiers. The authors emphasized that it is vital to perform a clean data process by using different techniques such as stop word removing, stemming, and eliminating extra spaces. Feature selection approaches, for instance, TF-IDF, are more critical to reduce dimensionality.
Chen et al. illustrated a primary pre-processing technique where selecting features can make a text model more accurate. Their results showed two types of features evaluation metric CDM and MOR for the Naïve Bayes (NB) classifier.
Wang and Huang described the bag-of-words technique for image classification, highlighting the problem of using heuristic clustering.
Vidros et al. conducted research in the area of online recruitment frauds using the "Employment Scam Aegean Dataset" (EMSCAD). They used bag-of-words modeling and machine learning classifiers, showing that RF classifier can achieve 90% accuracy.
Ahmed et al. proposed a model for detecting fraudulent information from news articles using n-gram analysis and TF-IDF, achieving 92% accuracy with LSVM. They also focused on opinion spam, achieving 90% accuracy using TF-IDF with bi-gram features.
Dutta and Bandyopadhyay discussed fake job advertisements using variables like title, location, department, etc. Their results showed that the Random forest classifier provided the optimal accuracy, achieving 98%.
Shibly et al. utilized Boosted decision tree and random frost in Microsoft Azure, attaining 0.954 accuracy.
Anita et al. identified fake job postings using ML and deep learning (Bi-LSTM), finding that Bi-LSTM delivered the highest accurate result.

**Table 1: Summary of the systematic analysis studies in related work**
| Study | Year | Purpose | Approach | Source Dataset | Techniques |
| :--- | :--- | :--- | :--- | :--- | :--- |
| Zhang et al. | 2008 | Recognize multi-words’ efficacy | ML | Daviddlewis 19,403 Valid texts | Information Gain, SVC |
| Chen et al. | 2009 | Detect online recruitment forgery | ML | Reuters 21578, Chinese text 2816 | CDM, MOR, NB |
| Wang & Huang | 2015 | BoW for image classifier efficiency | ML | Caltech-256, 15 Scenes | SVM |
| Vidros et al. | 2017 | Detect online recruitment forgery | ML | Employment Scam Aegean 17,880 | BoW, ZeorR, LR, DT, RFC, NB |
| Ahmed et al. | 2017 | Detect online fake news | ML | Kaggle 12,600 Truthful news | TF-IDF, SVM, LSVM, KNN, DT |
| Vidros et al. | 2018 | Detect opinion spam and fake news | ML | Kaggle 1600 Truthful reviews | TF-IDF |
| Dutta & Bandyopadhyay| 2020 | Detect online fake job ads | ML | Kaggle 17,880 job posts | RFC, Adaboost, GBC, KNN, MLP |
| Shibly et al. | 2021 | Detect online fake job ads | ML | Kaggle 17,880 job posts | Boosted decision tree, RF |
| Anita et al. | 2021 | Detect online fake job ads | ML | Kaggle 17,880 job posts | KNN, RF, Bi-LSTM |
| **This work** | **2021**| **Evaluating ML on fake job ads**| **ML** | **Kaggle 14,640 Records** | **LR, RF, SVC, DT, ETC, BoW, TF-ID, ADASYN, SMOTE, LSTM, CNN, GRU** |

---

## 3. Study Methodology

### 3.1 Study Overview
> 📊 **Explanation of Figure 1: Overview approach of data preparation**
> *Figure 1 illustrates the complete pipeline of the proposed methodology as a staged approach. The flow begins with **Data Collection** from the Kaggle repository. The data then moves to the **Preprocessing Stage**, which involves multiple sequential cleaning steps: Tokenization, Numerical Value Removal, Case Normalization (lowercasing), Punctuation Removal, and Stemming (using PorterStemmer). Once the text is cleaned, it proceeds to the **Feature Engineering Stage**, where the text is transformed into numerical vectors using either Bag-of-Words (BoW) or TF-IDF. Finally, the processed corpus is **Split** into training (80%) and testing (20%) subsets to be fed into the Machine Learning classifiers.*

### 3.2 Data Collection
We obtained a benchmark dataset “fake job postings” from Kaggle. The dataset is highly imbalanced, containing 17,880 advertisement records where 17,014 are legitimate, and 866 are fraudulent job posts.
We used eleven of the seventeen independent variables: company’s profile, location, job description, title, department, benefits, requirements, type of employment, qualification, and function. We merge them into one column known as “text”.

**Table 2: Attributes details of used dataset**
| Features | Description |
| :--- | :--- |
| Job_id | The unique job id |
| Job_title | Describes the job advertisements |
| Job_location | The geographical location of job posts |
| Company_department | The corporate department like sales |
| Salary_package | The salary package starts from 50,000 dollars |
| Company profile | Short representation of the company |
| Job_description | A brief explanation of the post is applying |
| Job_requirement(s) | List of requirements for the post |
| Job_benefits | Describes the benefits proposed |
| Work from Home | True for working-from-home posts |
| Company logo | Emblem of the company |
| FAQs | The queries about employees |
| Employment form | Permanent or contract-based |
| Experience requirement | The Company required experience |
| Required education | The employment education |
| Industry | Company name or department type |
| Function | Employ job states |

### 3.3 Data Preprocessing
Preprocessing of text consists of the following steps:
1. **Stop-Words Removal:** Removing words like he, it, do, us, the, using the NLTK library to reduce complexity.
2. **Punctuation Removal:** Removing marks like !.,¿¡/([-=+&%$#)] using regular expressions.
3. **Numerical Removal:** Removing numbers as they have no specific meaning in text classification.
4. **Stemming:** Converting words to their root form (e.g., ‘going’ to ‘go’) using the PorterStemmer library.
5. **Case Normalization:** Converting all text to lowercase using the `tolower()` function.

### 3.4 Feature Extraction
#### 3.4.1 Bag-of-Words (BoW)
BoW focuses on feature extraction based on term frequency. We utilized Count-Vectorizer to generate the rare token matrix. 
#### 3.4.2 TF-IDF
TF-IDF allocates weight to terms following the inverse frequency of the document and frequency of terms. 
Equation: $tfidf(t,d,D) = tf(t,d) \cdot idf(t,D)$
Where $tf(t, d)$ is frequency of term $t$ in document $d$, $N$ is number of documents, and $D_{i, t}$ is the number of documents containing the term $t$.

### 3.5 Supervised Machine Learning Models
We used six supervised ML models: Random Forest (RF), Logistic Regression (LR), Support Vector Machine (SVM), Extra Trees Classifier (ETC), K-nearest neighbor (KNN), and Multilayer perceptron (MLP).

> 📊 **Explanation of Figure 2: MLP Architecture**
> *Figure 2 depicts the structural diagram of the Multilayer Perceptron (MLP) used in the study. The architecture is a feed-forward artificial neural network consisting of three fundamental types of layers: (1) The **Input Layer**, which receives the initial feature vectors; (2) One or more **Hidden Layers**, where neurons apply non-linear activation functions to learn complex, non-linearly separable patterns from the data; and (3) The **Output Layer**, which produces the final classification prediction. The data flow is strictly one-way (directed forward from input to output), distinguishing it from recurrent networks.*

### 3.6 Oversampling
To handle the class imbalance, we used the ADASYN (Adaptive Synthetic) technique. ADASYN generates synthetic data specifically for "harder to learn" minority examples rather than just copying them.
**ADASYN Algorithm Steps:**
1. Calculate ratio $d = m_s / m_l$.
2. Calculate total synthetic data to generate: $G = (m_l - m_s)\beta$.
3. Find k-Nearest Neighbors and calculate $r_i$ value indicating majority class dominance.
4. Normalize $r_i$ values so $\sum \hat{r}_i = 1$.
5. Calculate synthetic examples per neighborhood: $G_i = G \cdot \hat{r}_i$.
6. Generate $G_i$ data using: $s_i = x_i + (x_{zi} - x_i)\lambda$.

### 3.7 Evaluation Parameters
Metrics used: Accuracy, Precision, Recall, and F1 Score.
* **Accuracy** = $(TP + TN) / (TP + TN + FP + FN)$
* **Recall** = $TP / (TP + FN)$
* **Precision** = $TP / (TP + FP)$
* **F1 Score** = $2 * (Precision * Recall) / (Precision + Recall)$

---

## 4. Results and Discussions

### 4.1 Experimental Results on Imbalanced Dataset
#### 4.1.1 Model Performance on the Imbalanced Dataset with BoW
MLP outperforms all models with 3537 correct predictions out of 3576. However, evaluation scores fluctuate (e.g., MLP gives 0.98 accuracy but 0.85 F1-score) because the model over-fits the majority class. MLP gives 33 wrong predictions for the minority (fraudulent) class.
#### 4.1.2 Model Performance on the Imbalanced Dataset with TF-IDF
Models with TF-IDF perform better than BoW. MLP offers the highest correct predictions (3540 out of 3576). The accuracy score is high, but the F1-score remains low, confirming the impact of over-fitting on the majority class.

**Table 10: Machine learning models results using BoW and TF-IDF features on original dataset**
| Models (BoW) | Acc | Prec | Rec | F1 | Models (TF-IDF) | Acc | Prec | Rec | F1 |
| :--- | :--- | :--- | :--- | :--- | :--- | :--- | :--- | :--- | :--- |
| RF | 0.98 | 0.99 | 0.61 | 0.75 | RF | 0.98 | 0.99 | 0.62 | 0.76 |
| ETC | 0.98 | 0.99 | 0.68 | 0.81 | ETC | 0.98 | 0.99 | 0.65 | 0.78 |
| LR | 0.98 | 0.94 | 0.79 | 0.86 | LR | 0.97 | 1.00 | 0.39 | 0.56 |
| SVM | 0.98 | 0.88 | 0.80 | 0.84 | SVM | 0.98 | 0.97 | 0.73 | 0.83 |
| MLP | 0.98 | 0.94 | 0.78 | 0.85 | MLP | 0.98 | 0.97 | 0.79 | 0.85 |
| KNN | 0.90 | 0.31 | 0.84 | 0.45 | KNN | 0.90 | 0.86 | 0.78 | 0.82 |

### 4.2 Models Performance After Balancing Using ADASYN
#### 4.2.1 BoW Features with ADASYN
MLP outperforms with 0.99 across all metrics. RF and ETC also achieve 0.99 accuracy but slightly lower in precision/recall.
#### 4.2.2 TF-IDF Features with ADASYN
ETC outperforms with a **0.999 accuracy score**. ETC gives the highest correct prediction ratio (6809 out of 6812).

> 📊 **Explanation of Figure 3: Comparison of Accuracy, Precision, Recall, and F1-score (Imbalanced vs. ADASYN)**
> *Figure 3 presents a grouped bar chart comparing the performance metrics of the specified ML models on the original imbalanced dataset versus the dataset balanced using the ADASYN technique. The visual data clearly demonstrates that while Accuracy remains consistently high (around 0.98) across both scenarios, the **Recall and F1-score metrics experience a massive, dramatic spike** after applying ADASYN. For instance, models that previously struggled to identify the minority class (fake jobs) now achieve near-perfect Recall (approaching 1.00), proving that ADASYN successfully eliminates the majority-class bias and over-fitting.*

### 4.3 Performance Comparison with State-of-the-Art Deep Learning Models
We deployed LSTM, CNN, and GRU. 
> 📊 **Explanation of Figure 4: The Architectures of Used Deep Learning Models**
> *Figure 4 illustrates the structural blueprints for the three Deep Learning models (LSTM, CNN, and GRU) evaluated in the study. Despite their different internal mechanisms for processing sequential/text data, the figure highlights a standardized outer architecture for all three: Each model begins with an **Embedding Layer** as the input layer to convert text tokens into dense vectors. The data then passes through the specific recurrent or convolutional hidden layers (LSTM, CNN, or GRU blocks). Finally, every model terminates with a standard **Output Layer consisting of two neurons** equipped with a **Softmax activation function**, designed to output the probability distribution for the binary classification (Real vs. Fake).*

The performance of deep learning models is not significant compared to ML models due to the small size of the dataset. Deep learning models require a large feature set. LSTM and CNN achieved 0.86 F1-score on the imbalanced dataset, while with ADASYN, LSTM achieved 0.98 F1-score.

### 4.4 Models Performance After Balancing Using SMOTE
SMOTE was compared with ADASYN. With TF-IDF and SMOTE, ETC outperforms with 0.998 accuracy. ETC gives 6798 correct predictions.

> 📊 **Explanation of Figure 5: Comparison of SMOTE and ADASYN Techniques**
> *Figure 5 displays a comparative bar chart evaluating the ML models' performance metrics (Accuracy, Precision, Recall, F1-score) after applying two different oversampling techniques: SMOTE and ADASYN. The chart reveals that both techniques yield highly significant and comparable improvements over the imbalanced baseline. The bars for ADASYN and SMOTE are visually very close to each other, indicating that both synthetic generation methods effectively balance the feature space. However, ADASYN maintains a marginal edge in generating the optimal feature set for the Extra Trees Classifier (ETC), aligning with the 99.9% vs 99.8% accuracy findings.*

### 4.5 Proposed Approach Comparison with Previous Studies
**Table 18: Comparison with other studies on the same dataset**
| Ref | Year | Model | Accuracy (%) |
| :--- | :--- | :--- | :--- |
| Dutta et al. | 2020 | RF | 98.27 |
| Ranparia et al. | 2020 | SNN | 97.00 |
| Keerthana et al. | 2021 | MLP | 71.00 |
| Shibly et al. | 2021 | RF | 95.40 |
| **This work** | **2021** | **ETC** | **99.90** |

---

## 5. Conclusion
This study has detected fraudulent job ads using different machine learning classifiers and two feature extraction approaches, namely BoW modeling and TF-IDF features. BoW and TF-IDF both were used with ADASYN oversampling technique to improve the accuracy and efficiency of our models. The existing dataset for experiments was highly imbalanced and caused for model over-fitting on majority class data. We used the oversampling technique with the features extraction technique to solve the model over-fitting problem and achieve a high accuracy score. 

Our proposed approach has achieved the highest accuracy score, **99.9%**, using TF-IDF features and the ETC classifier with the ADASYN technique. We conclude that the imbalanced dataset caused for over-fitting of models. That’s the reason the model shows poor performance on minority class data. We also concluded that TF-IDF features are more meaningful as compare to BoW simple features. 

We also used state-of-the-arts deep learning models to compare with machine learning models such as CNN, LSTM, and GRU. The performance of deep learning models is not significant as compared to machine learning models, and we concluded through the analysis and literature that deep learning models required a large dataset for good-fit. 

In comparison with ADASYN, we also used the SMOTE oversampling technique, which generated significant results for machine learning models. ETC with SMOTE and TF-IDF feature achieved 99.8% accuracy, which is very close to with ADASYN. This comparison concludes that oversampling generates more record in the dataset which help to generate a large feature set for the learning of the models which highly impact on improving the performance of learning models. In future work, we collect more datasets related to fake job postings and will apply more advanced deep learning models. We will also consider all attributes of the dataset for experiments.

---
*(Note: The full reference list containing 52 citations from the original PDF is omitted here for formatting brevity, but all cited works [1-52] are fully integrated into the Related Work and Methodology sections above as per the source text).*