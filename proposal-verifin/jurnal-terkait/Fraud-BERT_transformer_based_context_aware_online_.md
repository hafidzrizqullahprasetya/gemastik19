# Fraud-BERT: Transformer-Based Context-Aware Online Recruitment Fraud Detection
**Journal:** Discover Computing (2025) 28:9
**Authors:** Khushboo Taneja, Jyoti Vashishtha, Saroj Ratnoo (Guru Jambheshwar University of Science and Technology, India)

## Abstract
Online recruitment facilitates the automatic hiring process for recruiters and provides convenience to job seekers via online job platforms. Parallelly, it has given rise to the malicious use of such platforms by fraudsters who post fake jobs to steal money and personal information from innocent job seekers. Detecting fake jobs manually is difficult because they are meticulously crafted to mimic legitimate ones. Previously, various machine learning approaches employed Bag-of-Words (BoW) and Term Frequency-Inverse Document Frequency (TF-IDF) feature extraction methods. However, these methods are non-contextual and show skewness in results due to imbalances in data distribution. 

This paper presents **Fraud-BERT**, a transformer-based contextual framework leveraging Bidirectional Encoder Representations from Transformers (BERT) via a transfer learning approach. It is evaluated on a highly imbalanced fake job dataset, the Employment Scam Aegean Dataset (EMSCAD), available on Kaggle. The superiority of the proposed method is demonstrated through a comparative analysis with conventional methods. The results conclude that the proposed method is more robust in tackling imbalanced data, significantly outperforming existing state-of-the-art studies with an F1-score of 0.93 and 99% accuracy.

---

## 1. Introduction
Online recruitment is the process of hiring employees through internet-based platforms like Naukri.com and LinkedIn. It is popular among HR practitioners for its cost-effectiveness and automation of employment procedures (interviews, screening, communication). For job seekers, it offers the convenience of searching and applying for jobs matching their profiles. However, this has established a new medium for internet fraud: **Online Recruitment Fraud (ORF)**. Fraudsters skillfully craft fake job advertisements to lure innocent seekers with lucrative financial offers and flexible hours, tricking them into revealing private information (contact addresses, bank accounts, social security numbers). Fraudsters can then sell this data to third parties or extort money.

The COVID-19 pandemic left many unemployed, and as the economy reopened, young adults flocked to job platforms. Fraudsters exploited this vulnerability. Recently, they have also used SMS and WhatsApp to promise lucrative jobs. A May 2023 report noted that 56% of young job seekers (aged 20-29) in a specific country were impacted by job scams. ORF is a cyber-crime that adversely impacts social well-being and can harm the reputation of legitimate organizations, leading to smaller applicant pools.

**Challenges in Text Classification for Fake Jobs:**
Distinguishing genuine from fake job adverts is challenging even for human professionals because fraudsters intentionally craft them to imitate legitimate information, often including missing information and exaggerations (e.g., high salary, low education requirements). 
*   **Traditional ML limitations:** Previous techniques used BoW and TF-IDF. These rely on one-hot representation, creating high-dimensional, computationally expensive vectors. They are context-free and cannot preserve word order.
*   **Deep Learning limitations:** Models like RNN and GRU combined with Word2Vec use low-dimensional dense vectors but only represent static context. Furthermore, DL models require massive data and struggle with data imbalance, showing bias toward the majority class and yielding low F1 and recall scores.
*   **Resampling limitations:** Techniques like SMOTE and ADASYN have been used to balance datasets but failed to achieve optimal results.

**The Proposed Solution:**
To address these limitations, the authors propose **Fraud-BERT**, leveraging the dynamic context and pragmatics of language via the Transformer architecture. BERT (a Large Language Model) uses a WordPiece tokenizer (sub-word tokenization) to capture domain nuances and employs a "self-attention" mechanism to establish textual relationships and understand dynamic context. It handles structured and unstructured text and resolves data imbalance without resampling. 

**Contributions:**
1. Proposed a novel transformer-based BERT framework, fine-tuned on a highly imbalanced fake job dataset.
2. Conducted a comparative analysis proving its superiority over conventional ML and DL models.
3. Mitigated the data imbalance issue without extra pre-processing/resampling steps.
4. Achieved significant improvements over State-of-the-Art (SOTA) studies on the chosen dataset.

---

## 2. Related Works
The authors review past literature on fake job detection, highlighting the evolution from rule-based and traditional ML methods to more advanced techniques.

*   **Vidros et al. (2017):** Published the EMSCAD dataset (17,880 ads: 17,014 legitimate, 866 fraudulent). Used BoW and ML models (LR, RF, DT, NB). Highlighted that fake jobs have missing info and sketchy text.
*   **Mahbub & Pardede (2018):** Used manually designed contextual features with ML algorithms. JRip performed best (96.19% accuracy).
*   **Alghamdi & Alharby (2019):** Used SVM for feature selection and an ensemble Random Forest, achieving 97.41% accuracy.
*   **Lal et al. (2019):** Developed an ensemble of J48, LR, and RF using TF-IDF, achieving 95.4% accuracy.
*   **Dutta & Bandyopadhyay (2020):** Converted text to encoding categories; RF classifier achieved 98.27% accuracy.
*   **Nasser & Alzaanin (2020):** Used TF-IDF with NB, DT, SVM, RF, and KNN.
*   **Shibly et al. (2021):** Used Azure ML studio; two-class boosted decision trees achieved 93.8% accuracy but low recall (0.73).
*   **Anita et al. (2021):** Compared ML and Bi-LSTM; Bi-LSTM was superior but still had low recall.
*   **Chiraratanasopha & Chay-Intr (2022):** Used rule-based features (exaggeration, credibility). SVM achieved 97.64% accuracy, but rule-based methods are time-consuming and require domain experts.
*   **Amaar et al. (2022):** Used ADASYN resampling with TF-IDF. Extra Tree Classifier (ETC) got 99.9% accuracy, but evaluating on a *resampled test set* is a major flaw as it doesn't reflect real-world performance.
*   **Naudé et al. (2023):** Categorized identity theft and multi-level marketing scams. Gradient Boosting with empirical rule-sets and BoW performed best.
*   **Afzal et al. (2024):** Used TF-IDF, Chi2, PCA for feature selection, and SMOTE. ETC achieved 98.4% accuracy but had low recall and AUC.

### [Detailed Explanation of Table 1: Summary of Existing Studies]
*Table 1 comprehensively maps the literature. It lists the Reference, Year, Models used, Methods (BoW, TF-IDF, Rule-based, Word2Vec), Highest Performing Model Results, Merits, and Demerits. It visually demonstrates that older studies relied on simple ML (low computational cost but prone to overfitting or low recall on imbalanced data), while newer studies attempted resampling (SMOTE/ADASYN) or rule-based features (high performance but time-consuming and requiring human expertise). The table conclusively shows that prior to this paper, no study successfully achieved high recall and F1-scores on the original imbalanced dataset without relying on flawed resampling evaluations or exhaustive manual feature engineering.*

---

## 3. Materials and Methods

### 3.1 Dataset Description
The study uses the **EMSCAD (fake job) dataset** from Kaggle. It contains 17,880 job ads and is highly imbalanced: 17,014 legitimate jobs (class 0) and only 866 fake jobs (class 1). The target variable is `fraudulent` (binary: 0 or 1).

### [Detailed Explanation of Figure 1: Imbalanced Distribution of Dataset]
*Figure 1 is a bar chart or pie chart visually representing the severe class imbalance in the EMSCAD dataset. It starkly contrasts the massive blue bar/section representing the 17,014 legitimate job postings against the tiny red bar/section representing the 866 fraudulent job postings. This visual emphasizes why traditional accuracy metrics are misleading and why the dataset poses a significant challenge for standard machine learning algorithms, which tend to become biased toward the majority class.*

#### 3.1.1 Data Pre-processing
The authors analyzed the 18 attributes. Binary variables like `telecommuting`, `has_company_logo`, and `has_questions` showed minimal correlation with the `fraudulent` target and were dropped. `job_id` and `salary_range` were also dropped as irrelevant for text classification. The remaining 12 independent attributes were concatenated into a single text column. Noisy data (null values, special characters, numbers, stop words, punctuations) was removed to create a cleaned dataset.

### [Detailed Explanation of Table 2: Dataset Description]
*Table 2 lists the 18 original attributes of the EMSCAD dataset: `job_id`, `title`, `location`, `salary_range`, `department`, `company_profile`, `description`, `requirements`, `benefits`, `telecommuting`, `has_company_logo`, `has_questions`, `employment_type`, `required_experience`, `required_education`, `industry`, `function`, and `fraudulent` (the target variable).*

### [Detailed Explanation of Table 3: Pre-processed Dataset (Sample)]
*Table 3 displays a snapshot of the cleaned data after pre-processing. It shows two columns: `Fraudulent` (all showing '0' in the sample, meaning legitimate) and `Text` (which contains the concatenated, cleaned string of the job title, description, requirements, etc., e.g., "account executive washington dc dc washington..."). This proves that the structured metadata was successfully merged into a single unstructured text format suitable for NLP transformer models.*

### 3.2 Pre-trained Language Model
A pre-trained language model learns complex representations in a pre-training phase using massive unsupervised data, and then adapts to a downstream task in a fine-tuning phase. 
The objective is to calculate the joint probability of a sentence $s = (s_1, s_2, ..., s_n)$:
**Equation 1:** $P(s) = \prod_{k=1}^{N} P(s_k | s_{<k})$
The conditional probability is evaluated via a neural network using autoregressive forward factorization:
**Equation 2:** $\max_{\theta} \log p_{\theta}(s) = \sum_{k=1}^{N} \log p_{\theta}(s_k | s_{<k}) = \sum_{k=1}^{K} \frac{\exp(h_{\theta}(s_{1:k-1})^T e(s_k))}{\sum_{s'} \exp(h_{\theta}(s_{1:k-1})^T e(s'))}$
Unlike static embeddings (GloVe, Word2Vec), transformers use multi-headed self-attention. BERT is pre-trained on English Wikipedia and BooksCorpus. It processes text bidirectionally. The study uses BERT with **Masked Language Modeling (MLM)**, which masks 15% of tokens and predicts them:
**Equation 3:** $\max \log P(S_{masked} | S_{non-masked}) \approx \sum_{k=1}^{N} m_k \log \frac{\exp(H(S_{non-masked})_k^T e(s_k))}{\sum_{s'} \exp(H(S_{non-masked})_k^T e(s'))}$
*(Where $m_k = 1$ indicates a masked token, and $H$ is the hidden vector calculated by the transformer).*

### 3.3 Transfer Learning
Transfer learning transfers knowledge from a source task to a target task. BERT is pre-trained on MLM (source), and its weights are modified for fake job classification (target). This eliminates the need to build an NLP model from scratch.

### [Detailed Explanation of Figure 2: Transfer Learning Setup]
*Figure 2 is a flowchart illustrating the transfer learning paradigm. On the left side, it shows the "Source Task" (Masked Language Modeling) feeding into a massive corpus of text. This leads to the "Pre-training" phase, resulting in the "Pre-trained Language Model (BERT)" in the center. On the right side, an arrow points from the pre-trained BERT to the "Fine-tuning" phase, which utilizes the specific "Target Task" dataset (the fake job dataset). Finally, it outputs the fine-tuned model ready for classification. This visually explains how general language understanding is adapted to a specific fraud detection domain.*

### 3.4 The Proposed Model Architecture
The authors adapt `BERT-base` (110M parameters). The input text is processed by the **WordPiece tokenizer** (vocabulary size 30k), which splits rare words into sub-words prefixed with `##`. This reduces out-of-vocabulary (OOV) errors.
Special tokens are added:
*   `[CLS]`: Added at the beginning; its final embedding represents the summary of the whole sentence for classification.
*   `[SEP]`: Separates sentences or marks the end.
*   `[PAD]`: Pads shorter sentences to a maximum length of 512 tokens. An attention mask differentiates `[PAD]` from real tokens.

Tokens are converted to IDs and passed through the input embedding layer, which sums **Token Embeddings**, **Segmentation Embeddings** (sentence A vs B), and **Positional Embeddings** (learned from absolute ordinal position, unlike the original transformer's trigonometric functions).
These pass through multiple Transformer layers using multi-headed self-attention. The final layer outputs a 768-dimensional vector. The `[CLS]` token's vector is passed to a linear layer with a sigmoid activation function to predict the binary label (0 or 1).

### [Detailed Explanation of Figure 3: Proposed Model Architecture]
*Figure 3 provides a granular, bottom-up architectural diagram of the Fraud-BERT model. At the very bottom, the raw input text is shown. Moving up, it passes through the "WordPiece Tokenizer" where words are split into sub-words (e.g., "##ing"). Then, special tokens `[CLS]`, `[SEP]`, and `[PAD]` are injected. Next is the "Embedding Lookup Table" converting tokens to IDs. The "Input Embedding Layer" is shown combining Token, Segment, and Position embeddings. The core of the diagram shows the stack of "Transformer Encoder Layers" utilizing "Multi-Head Self-Attention" and "Feed Forward Networks". At the very top, the output vector for the `[CLS]` token is extracted and fed into a "Linear + Sigmoid" classifier to output the final probability of the job being fraudulent.*

### [Detailed Explanation of Figure 4: The Proposed Methodology]
*Figure 4 is a high-level workflow diagram of the entire research pipeline. It starts with "Exploratory Data Analysis" and "Data Pre-processing" (cleaning, concatenating). Then, it branches into loading the "Pre-trained model (bert-base-uncased)" and "Pre-process training and testing data" (Tokenization, adding special tokens). These prepared datasets flow into the "Model Training" phase (Fine-tuning). Finally, the trained model enters the "Model Evaluation" phase, where metrics like Accuracy, F1, and AUC are calculated. This serves as a roadmap for the experimental design.*

---

## 4. Experiment
Experiments were run in Google Colab using Python and a single A100 GPU. The dataset was split 80:20 for training and testing.

### 4.1 Baseline Models
Baseline models include LR, SVM, NB, RF (using Scikit-learn and TF-IDF), and Bi-LSTM (using Keras/Tensorflow). 
*   **Bi-LSTM Setup:** Embedding layer (vec_size 300), two Bi-LSTM layers (60 units each), two dropout layers (rate 0.2), one dense layer. Optimizer: Adam, Loss: Binary Cross-entropy. Trained for 2 epochs, batch size 128.

### [Detailed Explanation of Figure 5a: Bi-LSTM Model Summary]
*Figure 5a displays the Keras model summary table for the Bi-LSTM baseline. It lists the layers sequentially: an `Embedding` layer outputting 300 dimensions, followed by two `Bidirectional` (LSTM) layers with 60 units each, interspersed with `Dropout` layers (0.2 rate to prevent overfitting), and finally a `Dense` layer with 1 unit and a sigmoid activation for binary classification. It also lists the total parameters and trainable parameters, highlighting the data-hungry nature of this DL architecture compared to BERT.*

### 4.2 Proposed Model
Implemented using the `ktrain` library and `bert-base-uncased` from Hugging Face. Maximum sequence length (`maxlen`) was set to 510. Trained for 2 epochs with a learning rate of 1e-5. Fine-tuning took only 20 minutes.

### [Detailed Explanation of Figure 5b: BERT Model Summary]
*Figure 5b shows the Keras/Transformer model summary for the Fraud-BERT architecture. It illustrates the `Transformer` layer (BERT base) taking input IDs, attention masks, and token type IDs. It shows the massive number of parameters inherited from the pre-trained BERT model (over 109 million parameters). At the top, it shows the custom classification head added for this specific task, demonstrating how the pre-trained weights are preserved and only slightly adjusted during the 20-minute fine-tuning process.*

### [Detailed Explanation of Table 4: Hyper-parameter Values]
*Table 4 explicitly lists the configuration used for fine-tuning Fraud-BERT: Learning rate = 1e-5, Maxlen (Maximum sequence length) = 510, Batch size = 6, Epochs = 2. The small batch size and low learning rate are standard best practices for fine-tuning large transformer models to prevent catastrophic forgetting of pre-trained weights.*

### 4.3 Model Evaluation Metrics
Because the dataset is imbalanced, Accuracy alone is insufficient. The study uses Macro-averaged Precision (P), Recall (R), F1-score, Accuracy, and Area Under the ROC Curve (AUC).

---

## 5. Result and Discussions

### 5.1 Performance Evaluation of Proposed Model Against Baseline Models
Fraud-BERT achieved the highest Recall (0.92) and F1-score (0.93), proving it is least affected by data imbalance. It also scored 0.94 Precision, 0.99 Accuracy, and 0.99 AUC. SVM was second best (F1: 0.89) but took over an hour to train. Bi-LSTM had good accuracy but low recall/AUC, proving DL models struggle with imbalance without massive data. Fraud-BERT trained in just 20 minutes.

### [Detailed Explanation of Table 5: Comparison of Proposed Model with Baseline Models]
*Table 5 presents a quantitative matrix comparing all models. 
*   **Proposed Model:** P=0.94, R=0.92, F1=0.93, Acc=0.99, AUC=0.99.
*   **Bi-LSTM:** P=0.91, R=0.86, F1=0.89, Acc=0.98, AUC=0.88.
*   **SVM:** P=0.98, R=0.84, F1=0.89, Acc=0.98, AUC=0.98.
*   **NB:** P=0.48, R=0.50, F1=0.49, Acc=0.95, AUC=0.85 (Performed terribly due to imbalance).
*   **LR:** P=0.98, R=0.70, F1=0.78, Acc=0.97, AUC=0.98.
*   **RF:** P=0.99, R=0.82, F1=0.88, Acc=0.98, AUC=0.98.
The bolded values in the original table highlight the Proposed Model's absolute superiority across all metrics, particularly in Recall and F1, which are critical for imbalanced fraud detection.*

### [Detailed Explanation of Figure 6: Performance Comparison]
*Figure 6 is a grouped bar chart visually comparing the baseline models and the proposed Fraud-BERT across the five metrics (Precision, Recall, F1, Accuracy, AUC). The bars for Fraud-BERT are consistently the tallest, visually emphasizing the gap between its near-perfect scores (0.92 to 0.99) and the baseline models, particularly highlighting how much higher its Recall and F1 scores are compared to models like Naive Bayes and Logistic Regression.*

### [Detailed Explanation of Figure 7a: Confusion Matrix]
*Figure 7a displays the Confusion Matrix for the Fraud-BERT model on the test set. It is a 2x2 grid. The top-left cell (True Negatives) shows a massive number of correctly identified legitimate jobs. The bottom-right cell (True Positives) shows a very high number of correctly identified fake jobs. The top-right (False Positives) and bottom-left (False Negatives) cells contain very low numbers. This visually proves the model's high recall and precision, meaning it rarely misses a fake job (low false negatives) and rarely flags a real job as fake (low false positives).*

### [Detailed Explanation of Figure 7b: ROC Curve]
*Figure 7b plots the Receiver Operating Characteristic (ROC) Curve for Fraud-BERT. The X-axis is the False Positive Rate, and the Y-axis is the True Positive Rate. The curve bows sharply toward the top-left corner, hugging the Y-axis. The Area Under the Curve (AUC) is explicitly labeled as 0.99. This indicates that the model has an exceptional ability to distinguish between the two classes at all classification thresholds, performing almost perfectly.*

### 5.2 Comparison with SOTA Studies
The authors compare Fraud-BERT against previous studies on the same dataset. Previous studies either used balanced subsets (invalid for real-world application), relied on time-consuming rule-based features, or evaluated on resampled test sets (flawed). Fraud-BERT advances SOTA results on the *original imbalanced dataset* without any resampling.

### [Detailed Explanation of Table 6: Comparison with State-of-the-Art Studies]
*Table 6 maps the proposed model against historical SOTA benchmarks on the EMSCAD dataset.
*   [3] Vidros 2017 (RF): F1=0.912, Acc=91.22%
*   [4] Mahbub 2018 (JRip): Acc=96.19%
*   [9] Shibly 2021 (Decision Forest): F1=0.73
*   [10] Anita 2021 (Bi-LSTM): F1=0.85
*   [11] Chiraratanasopha 2022 (SVM): F1=0.99 (but used manual rule-based features)
*   [12] Amaar 2022 (ETC): F1=0.99, Acc=99.9% (but flawed due to resampled test set evaluation)
*   [14] Afzal 2024 (ETC): F1=0.91, Acc=98.4%
*   **Ours 2024 (Fraud-BERT): P=0.94, R=0.92, F1=0.93, Acc=99%, AUC=0.99.**
The table conclusively proves that Fraud-BERT achieves top-tier accuracy and F1 scores on the raw, imbalanced data without the methodological flaws or manual feature engineering of prior SOTA models.*

---

## 6. Integration Challenges and Strategies
BERT is a massive model with millions of parameters, leading to high memory/computational requirements, making deployment on mobile or low-latency edge devices difficult. Other challenges include inference latency, lack of interpretability, and the need for powerful GPUs/TPUs.
**Mitigation Strategies:**
*   **Model Compression & Efficient Fine-tuning:** Using techniques like quantization or LoRA.
*   **Domain-specific adaptation:** Using lighter variants.
*   **Scalable Cloud Services:** Leveraging Google Colab, Azure, or AWS.
*   **Compatibility:** Using stable libraries like Hugging Face Transformers and strict version control to prevent API incompatibilities during production upgrades.

---

## 7. Limitations and Potential Risks
1.  **Computational Overhead:** The self-attention mechanism operates quadratically with sequence length, making inference slow for long texts.
2.  **Possible Failure Points:** BERT has a strict 512-token limit. Truncating longer job descriptions may cause a loss of critical contextual information, leading to inaccurate predictions.
3.  **Trade-offs:** Using `BERT-large` might yield better accuracy but is computationally prohibitive for startups or real-time applications.
4.  **Ethical Implications:** BERT inherits biases from its pre-training corpus (Wikipedia/Books), which could lead to unfair predictions regarding sensitive attributes (gender, race, socioeconomic status).
5.  **Data Privacy:** Fine-tuning on sensitive user data raises security concerns. Techniques like federated learning or differential privacy could be used, though they may reduce accuracy.
6.  **Scalability:** While BERT scales well for large datasets, it requires expensive cloud infrastructure. Distributed training or knowledge distillation is necessary for massive enterprise deployments.

---

## 8. Conclusion and Future Scope
Online recruitment fraud is a severe cyber-crime causing financial and privacy losses. Traditional ML methods (BoW, TF-IDF) fail to understand textual context, allowing fraudsters to mimic legitimate posts successfully. This paper presented **Fraud-BERT**, a transformer-based contextual framework using transfer learning. Because BERT requires only a small amount of data to fine-tune, it is highly robust against data imbalance. The model achieved an F1-score of 0.93 and 99% accuracy, outperforming all baseline and SOTA models.

**Future Scope:**
The authors plan to explore lighter and more advanced transformer variants to address computational and sequence-length limitations:
*   **DistilBERT:** Retains 97% of BERT's capabilities but is 60% faster and smaller.
*   **XLNet:** Based on Transformer-XL, capable of handling long dependencies (bypassing the 512-token limit).
*   **DeBERTa:** Features a disentangled attention mechanism and enhanced mask decoder.
*   **IoT Integration:** Combining AI with Internet-of-Things (IoT) to capture real-time behavioral, geolocation, and device usage patterns for proactive, continuous fraud prevention and candidate verification.

---

## Back Matter & Declarations
*   **Author Contributions:** Khushboo Taneja conceptualized the study, performed experiments, and wrote the manuscript. Saroj Ratnoo and Jyoti Vashishtha supervised and reviewed.
*   **Funding:** Not applicable.
*   **Data Availability:** Publicly available on Kaggle (Real or Fake Job Posting Prediction).
*   **Code Availability:** Publicly available on GitHub (GJU-CSE/Online-Recruitment-Fraud-Detection).
*   **Declarations:** Informed consent, competing interests, and human/animal research declarations are all marked as "Not applicable."
*   **License:** Open Access under Creative Commons Attribution-NonCommercial-NoDerivatives 4.0 International License.
*   **Publisher's Note:** Springer Nature remains neutral regarding jurisdictional claims. Standard Terms and Conditions apply regarding the non-commercial sharing and academic use of the journal content.