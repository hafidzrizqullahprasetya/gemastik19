Here is the comprehensively rewritten version of the journal article in English, maintaining the exact structure, data, formulas, and technical meaning of the original document, formatted in Markdown.

***

# Explainable AI-Based Smart Job Scam Detection System Using Hybrid NLP & Behavioural Features
**Authors:** Senthuriya C., Sindhuja S., N. Kanagadurga  
**Affiliation:** Department of Computer Science and Engineering, E.G.S. Pillay Engineering College, Nagapattinam, India  
**Journal:** International Journal of Creative and Open Research in Engineering and Management (IJCOPE), Volume 02, Issue 05, May 2026  

## Abstract
The rapid expansion of online recruitment platforms has led to a corresponding surge in fraudulent job postings, exposing job seekers to severe financial, identity, and psychological risks. Traditional detection mechanisms, which predominantly rely on heuristic keyword matching and rule-based filtering, suffer from significant limitations in adaptability, scalability, and explainability. This paper introduces an Explainable Artificial Intelligence (XAI)-powered Smart Job Scam Detection System that merges Hybrid Natural Language Processing (NLP) techniques with behavioural feature engineering to accurately classify job postings as genuine or fraudulent.

The proposed architecture utilizes Term Frequency–Inverse Document Frequency (TF-IDF) vectorization, suspicious keyword identification, recruiter email domain verification, company profile consistency analysis, and an ensemble machine learning classifier combining XGBoost and Logistic Regression. The Explainability module leverages SHapley Additive exPlanations (SHAP) to deliver transparent, human-interpretable reasoning for every prediction. 

Additional system capabilities include Optical Character Recognition (OCR)-based screenshot analysis, batch CSV prediction, scam probability scoring, risk level categorization, and an interactive visualization dashboard. Experimental evaluation on the Kaggle Fake Job Postings dataset yields an overall accuracy of 97.4%, a Precision of 96.8%, a Recall of 95.9%, and an F1-Score of 96.3%, significantly outperforming baseline methods. The system provides a robust, transparent, and scalable solution to combat online recruitment fraud.

**Keywords:** Explainable AI, Fake Job Detection, NLP, TF-IDF, XGBoost, SHAP, OCR, Behavioural Feature Engineering, Fraud Detection, Cybersecurity.

---

## I. Introduction
The rapid digitalization of the global employment ecosystem has fundamentally transformed how individuals pursue career opportunities. Online job portals such as LinkedIn, Indeed, Glassdoor, and Naukri have democratized access to employment, enabling millions of job seekers and recruiters to connect instantaneously across geographical boundaries. According to the International Labour Organization (ILO), approximately 3.3 billion people constitute the global workforce, with a growing proportion relying on digital platforms for job searches. However, this shift has created fertile ground for malicious actors exploiting job seekers through fraudulent postings.

Online recruitment fraud manifests in various forms, including fake advertisements soliciting upfront fees, phishing campaigns harvesting personal data, impersonation of legitimate organizations, and advance-fee scams. The Federal Trade Commission (FTC) reported that employment scam losses in the United States exceeded USD 68 million in 2021, a 53% year-over-year increase. In developing economies, the impact is disproportionately severe, leading to financial loss, psychological trauma, and identity theft.

Fraudulent postings are characterized by inflated salary promises, vague descriptions, non-corporate email domains, and linguistic patterns typical of machine-generated text. Despite these signals, manual identification is impractical at scale. Traditional automated approaches rely on brittle rule-based systems that fail to generalize to new scam variants. While machine learning models have improved detection, many function as black boxes, lacking interpretable justifications—a critical flaw for consumer-facing applications where user trust is paramount.

The emergence of Explainable AI (XAI) addresses this opacity by elucidating complex model decisions. Methods like SHAP and LIME enable users to understand which features drive a prediction. Integrating explainability enhances user trust and facilitates model improvement by exposing biases.

This paper proposes a comprehensive XAI-based Smart Job Scam Detection System. It combines Hybrid NLP (tokenization, TF-IDF, suspicious keyword analysis) with behavioural feature engineering (email domains, company consistency, salary plausibility). The classification engine employs an XGBoost and Logistic Regression ensemble, while the explainability layer integrates SHAP visualizations. An OCR module extends applicability to social media and messaging platform scams via screenshot analysis.

**Primary Objectives:**
1. Develop a highly accurate (>97%) and generalizable ML model for fake job detection.
2. Integrate robust NLP and behavioural feature engineering into a unified hybrid feature space.
3. Incorporate SHAP-based explainability for transparent prediction rationale.
4. Build a user-accessible platform supporting text entry, screenshot uploads, and CSV batch files.
5. Demonstrate effectiveness through comprehensive experimental evaluation.

---

## II. Literature Review
The detection of fraudulent online content intersects NLP, machine learning, and cybersecurity. A review of extant literature reveals multiple methodological threads:

*   **Amaar et al. (2020)** utilized Logistic Regression, Decision Trees, and Random Forests on TF-IDF features from the EMSCAD dataset, achieving ~97% accuracy. However, it lacked explainability and multi-modal input support.
*   **Vidros et al. (2015)** introduced the EMSCAD benchmark, identifying distinguishing characteristics of fraudulent listings (e.g., missing logos, suspicious emails). Their classifier was relatively simple and did not computationally integrate behavioural features.
*   **Qazi et al. (2021)** compared Naive Bayes, SVM, and XGBoost on the Kaggle dataset, finding XGBoost yielded the highest F1-score. They applied SMOTE for class imbalance but omitted explainability and OCR.
*   **Priya et al. (2022)** employed a BiLSTM architecture with GloVe and FastText embeddings, achieving a 95.2% F1-score. Deep learning models, however, are computationally intensive and lack interpretability.
*   **Mahbub et al. (2023)** combined BERT embeddings with an SVM classifier, achieving state-of-the-art metrics. The computational cost of BERT renders it impractical for real-time, resource-constrained deployment.
*   **Zhang and Zhao (2021)** highlighted company-level behavioural indicators (verified profiles, corporate emails) as strong predictors of legitimacy, substantiating the inclusion of behavioural features.
*   **Shalini and Babu (2022)** applied graph-based anomaly detection, which requires extensive relational data, limiting applicability to isolated postings.
*   **Kaur et al. (2021)** reviewed XAI in cybersecurity, concluding that SHAP provides more reliable feature attributions than LIME due to its game-theoretic foundation.
*   **Chen and Guestrin (2016)** introduced XGBoost, whose efficiency and regularization make it ideal for tabular classification.
*   **Lundberg and Lee (2017)** introduced SHAP, providing a theoretically principled approach to local feature attribution based on Shapley values.
*   **Sahu et al. (2022)** applied OCR to social media fraud detection, achieving 89.3% accuracy, demonstrating the viability of screenshot analysis.
*   **Alotaibi and Roussinov (2021)** investigated linguistic style markers, revealing significant differences in syntactic complexity and urgency cues between genuine and fraudulent postings.

**Research Gaps:** Existing systems predominantly treat detection as a purely textual problem, neglecting behavioural signals. Explainability is rarely addressed, and no published system integrates OCR, batch CSV processing, and an interactive dashboard into a unified platform.

**Table I: Literature Review Comparison**

| Author | Year | Method | Dataset | Accuracy | Limitations |
| :--- | :--- | :--- | :--- | :--- | :--- |
| Amaar et al. | 2020 | LR, DT, RF with TF-IDF | EMSCAD | ~97% | Textual only; no explainability; no OCR/batch |
| Vidros et al. | 2015 | Statistical Analysis & Basic ML | EMSCAD | N/A | Behavioural features not integrated; simple classifier |
| Qazi et al. | 2021 | NB, SVM, XGBoost | Kaggle Fake Job | Highest F1 (XGB) | No explainability; no OCR |
| Priya et al. | 2022 | BiLSTM with GloVe/FastText | Kaggle Fake Job | F1: 95.2% | Computationally expensive; difficult interpretability |
| Mahbub et al. | 2023 | BERT Embeddings + SVM | Benchmark Fake Job | SOTA | High cost; unsuitable for real-time; no explainability |
| Zhang & Zhao | 2021 | Behavioural Feature Analysis | Company Behaviour | N/A | Static system; no interactive deployment |
| Shalini & Babu | 2022 | Graph-based Anomaly Detection | Recruiter-Job Graph | N/A | Requires extensive recruiter network data |
| Kaur et al. | 2021 | SHAP & LIME Review | Cybersecurity | Comparative | Review only; no deployment model |
| Chen & Guestrin| 2016 | XGBoost Framework | General ML | High efficiency | Did not specifically target fake jobs |
| Lundberg & Lee| 2017 | SHAP Framework | Model-Agnostic | Highly interpretable| Explainability only; not a standalone detector |
| Sahu et al. | 2022 | OCR-based Fraud Detection | Screenshot Scam | 89.3% | Limited feature engineering; no explainability |
| Alotaibi & Roussinov| 2021| Linguistic Style Analysis | Employment Fraud | N/A | Focused only on linguistic markers |

---

## III. Problem Statement
The proliferation of online employment platforms has created an ecosystem where fraudulent postings proliferate with minimal accountability. Scammers continuously adapt tactics to evade automated filters. 

*   **Financial Impact:** Victims incur direct losses through fabricated application fees and equipment deposits. The FTC reported median individual losses of USD 1,500 per incident in 2022, with some exceeding USD 10,000.
*   **Identity Theft:** Fraudulent recruiters request sensitive personal information (IDs, bank details) under the guise of background checks, weaponizing it for further financial crimes.
*   **Psychological Dimension:** Job seekers invest substantial emotional energy; discovering a scam induces shame and hopelessness, eroding trust in digital platforms.
*   **Technical Complexity:** Modern scams employ professional formatting and AI-generated coherent descriptions, easily circumventing fixed keyword blacklists.
*   **Lack of Explainability:** Existing tools function as invisible backend filters. A system providing transparent, human-readable explanations empowers users to develop intuition about fraudulent signals, enhancing self-protection.

---

## IV. Objectives
The proposed system aims to achieve the following:
1.  **High-Accuracy Classification:** Develop a robust automated system targeting >97% accuracy, emphasizing the minimization of false negatives.
2.  **Explainable AI Integration:** Incorporate SHAP value analysis to ensure every decision is accompanied by a clear, human-readable explanation, aligning with GDPR and the EU AI Act.
3.  **Multi-Modal Input Support:** Enable direct text entry, OCR-based screenshot extraction, and CSV batch analysis to extend utility to social media and platform operators.
4.  **Comprehensive Risk Assessment:** Provide a continuous scam probability score and categorical risk levels (Low, Medium, High, Critical) with <2 seconds response latency.
5.  **Interactive Dashboard:** Visualize scam probability distributions, feature importance, and SHAP plots for both individual prediction explanation and aggregate trend monitoring.

---

## V. Requirements Analysis

### A. Functional Requirements
*   Accept text input and return binary classification, probability score (0-1), risk level, and SHAP explanations within 2 seconds.
*   OCR module must extract text from PNG/JPEG images with a character error rate <5%.
*   Batch module must process up to 10,000 CSV records asynchronously with progress reporting.
*   Email domain verification must query WHOIS/registry APIs to classify domains as corporate, free-tier, or suspicious.

### B. Non-Functional Requirements
*   Achieve >95% accuracy on the Kaggle test partition.
*   Support 100 concurrent users with <20% performance degradation.
*   Maintain 99.5% availability during business hours.
*   Encrypt data in transit (TLS 1.3) and at rest (AES-256).
*   Conform to WCAG 2.1 Level AA accessibility standards.

### C. Hardware and Software Requirements
*   **Hardware:** Intel Core i7 / AMD Ryzen 7 (8+ cores), 16GB RAM (32GB recommended), 50GB SSD. Optional NVIDIA GPU.
*   **Software:** Ubuntu 20.04 / Windows 10 / macOS 12+. Python 3.9+, Scikit-learn 1.2+, XGBoost 1.7+, SHAP 0.42+, NLTK 3.8+, spaCy 3.5+, Tesseract 5.0+, FastAPI 0.95+, React 18+, PostgreSQL 15+, Docker 24+.

---

## VI. Feasibility Study
*   **Technical:** Relies on mature open-source technologies (Python, Tesseract, XGBoost, React). Cloud deployment via containerized microservices is well-established.
*   **Economic:** Zero licensing costs. Cloud infrastructure costs range from USD 50–200/month for moderate traffic. One-time training cost is approximately USD 1–5.
*   **Operational:** Web-based interface requires no client installation. SHAP outputs are templated into natural language for non-technical users.
*   **Schedule:** 12-week timeline (Data: 2 weeks, Model: 4 weeks, Implementation: 4 weeks, Testing: 2 weeks).
*   **Legal:** Processes only public data. Complies with GDPR by retaining no PII beyond the session. All libraries use permissive licenses (Apache 2.0, MIT).

---

## VII. System Analysis and Design

### A. Existing System Analysis
Current approaches include platform-level rule-based filters (easily circumvented), browser extensions (lack ML/NLP), and academic prototypes (lack production-quality explainability and multi-modal input).

### B. Proposed System
A unified, multi-modal platform integrating hybrid NLP, behavioural engineering, ensemble ML, and SHAP explainability via a web interface, providing feature-attributed justifications for predictions.

### C. System Workflow
1.  **Input:** User submits text, screenshot, or CSV.
2.  **Processing:** OCR extracts text (if screenshot). NLP pipeline performs tokenization, stemming, and TF-IDF. Behavioural module extracts metadata features.
3.  **Classification:** Features are concatenated and passed to the ensemble classifier.
4.  **Explanation:** SHAP computes feature attributions, formatted into natural language.
5.  **Output:** Dashboard displays label, probability, risk level, and SHAP explanation.

### D. Database Design
PostgreSQL is used for persistent storage. Key tables include:
*   `job_postings`: Raw text, extracted features, metadata.
*   `prediction_results`: Labels, probabilities, risk levels, SHAP JSONs.
*   `users`: Session identifiers and interaction histories.
*   `batch_jobs`: Status and results of asynchronous CSV processing.

---

## VIII. Methodology

### A. Dataset
The study utilizes the **Kaggle Fake Job Postings dataset** (originally EMSCAD), containing 17,880 records: 17,014 (95.16%) genuine and 866 (4.84%) fraudulent. Features include job title, company profile, salary, description, and binary labels.

### B. Data Preprocessing
1.  **Imputation:** Nulls replaced with empty strings (text) or median (numerical).
2.  **Concatenation:** Text fields merged with sentinel tokens.
3.  **Normalization:** Unicode normalization, HTML/URL stripping, lowercase conversion.
4.  **Tokenization:** NLTK `word_tokenize` with Punkt sentence boundary detection.
5.  **Stop Words:** NLTK English corpus + domain-specific recruitment terms.
6.  **Stemming:** Porter stemming to reduce vocabulary dimensionality.

### C. TF-IDF Vectorization
Transforms tokens into numerical vectors:
$$ \text{tfidf}(t, d, D) = \text{tf}(t, d) \times \text{idf}(t, D) $$
where $\text{tf}(t, d) = f_{t,d} / \sum_{t' \in d} f_{t',d}$ and $\text{idf}(t, D) = \log(\|D\| / \|\{d \in D: t \in d\}\| + 1)$. 
Configured with max 10,000 features, min document frequency 3, max 0.85, and character n-gram range (1, 2).

### D. Behavioural Feature Extraction
15 behavioural features are extracted:
1.  **Email Domain Score:** Free-tier (1), Corporate (0), Unverified (0.5).
2.  **Salary Plausibility Index:** Compared against BLS ranges. >3 SD above mean = 0 (implausible); missing = 0.5.
3.  **Suspicious Keyword Count:** 120 keywords (e.g., "urgent hiring", "no experience") normalized by total token count.
4.  **Company Profile Completeness:** Ratio of non-null metadata fields.
5.  **Others:** Company logo (binary), screening questions (binary), telecommuting (binary), description/requirements length ratio, VADER sentiment polarity, LanguageTool grammar errors, URLs/phone numbers presence, employment type, and education level.

### E. OCR Processing
Tesseract 5.0 with LSTM engine. Images undergo grayscale conversion, Otsu's adaptive thresholding, Gaussian blur denoising, and contrast normalization. Page segmentation mode (PSM) 6 is used for uniform text blocks.

### F. Class Imbalance Handling
**SMOTE** (Synthetic Minority Over-sampling Technique) is applied to generate synthetic minority samples, balancing the training dataset to a 1:1 ratio.

### G. Model Training and Evaluation
Ensemble of **XGBoost** (lr=0.05, depth=6, 300 estimators) and **Logistic Regression** (L2, C=0.1, 1000 iterations). Combined via soft voting. Evaluated using stratified 5-fold cross-validation. Metrics: Accuracy, Precision, Recall, F1-Score, ROC-AUC.

### H. SHAP Explainability Integration
SHAP values computed via TreeExplainer (XGBoost) and LinearExplainer (LR). Top-5 contributing features are mapped to natural language templates (e.g., "This posting contains an unusually high concentration of phrases...").

---

## IX. System Architecture
A three-tier microservices architecture:

### A. Frontend Architecture
React 18 SPA with Chart.js 4. Material Design 3 with traffic-light risk semantics (Green=Low, Amber=Medium, Red=High, Dark Red=Critical). Responsive via CSS Grid/Flexbox.

### B. Backend Architecture
FastAPI providing automatic OpenAPI specs, async handling, and Pydantic validation. Endpoints: `/predict`, `/predict-ocr`, `/batch-predict`, `/prediction/{id}`, `/dashboard/stats`.

### C. Machine Learning Pipeline
Scikit-learn Pipeline chaining preprocessing, TF-IDF, behavioural transformation, and classifier. Serialized via `joblib`.

### D. OCR Module Architecture
Independent microservice accepting image bytes, applying preprocessing, and invoking Tesseract via `pytesseract`. Isolated for independent scaling.

### E. Dashboard Architecture
Aggregates data from PostgreSQL. WebSocket maintains live prediction feeds. SHAP visualizations rendered client-side via Chart.js.

---

## X. Implementation

### A. Frontend Development
React 18 with Context API and `useReducer`. Views: Home, Prediction Input, Results Dashboard, Batch Analysis.

### B. Backend API Development
FastAPI with Pydantic validation, `slowapi` rate limiting, and JWT authentication. Async logging via SQLAlchemy. Celery + Redis handles asynchronous batch processing.

### C. NLP Engine Implementation
Python module exposing `process()`. Caches fitted TF-IDF vectorizer. Suspicious keywords stored as compiled regex. Throughput: ~5,000 postings/second.

### D. Behavioural Analysis Engine
Extractor classes implementing `extract(record)`. `EmailDomainExtractor` queries local DB with WHOIS fallback (500ms timeout). `SalaryPlausibilityExtractor` uses BLS JSON with fuzzy SOC code matching.

### E. Explainability Engine Implementation
SHAP library computes Shapley values for top 10 features. Mapped to natural language via parameterized template dictionary.

### F. Batch CSV Analysis
Pandas parses CSVs. Fuzzy column matching maps schemas. `multiprocessing.Pool` processes records in parallel. Results aggregated into downloadable summary CSV.

---

## XI. Results and Discussion

### A. Model Performance
Evaluated on 3,576 held-out test records.

**Table II: Model Performance Comparison**

| Model | Accuracy (%) | Precision (%) | Recall (%) | F1-Score (%) | ROC-AUC |
| :--- | :---: | :---: | :---: | :---: | :---: |
| Logistic Regression (Baseline) | 93.2 | 89.4 | 88.1 | 88.7 | 0.961 |
| Naive Bayes | 91.5 | 86.7 | 84.2 | 85.4 | 0.944 |
| Random Forest | 95.8 | 93.1 | 91.7 | 92.4 | 0.978 |
| XGBoost (Standalone) | 96.7 | 95.3 | 94.1 | 94.7 | 0.985 |
| BiLSTM (Deep Learning) | 95.2 | 93.8 | 92.4 | 93.1 | 0.981 |
| **Proposed Hybrid Ensemble** | **97.4** | **96.8** | **95.9** | **96.3** | **0.989** |

### B. Feature Importance Analysis
SHAP analysis revealed top contributors:
1.  Suspicious keyword density (mean |SHAP| = 0.312)
2.  Email domain score (mean |SHAP| = 0.287)
3.  Company profile completeness (mean |SHAP| = 0.241)
4.  Company logo presence (mean |SHAP| = 0.198)
5.  Specific TF-IDF terms ('urgent', 'guaranteed', etc.) (cumulative mean |SHAP| = 0.176)

### C. Error Analysis
94 misclassified records:
*   **False Negatives:** Sophisticated scams with corporate-appearing domains, well-structured descriptions, and realistic salaries.
*   **False Positives:** Startups lacking digital profiles, positions with unusual compensation, or legitimate casual language.

### D. Explainability Evaluation
User study (30 participants, 10 outputs). 
*   Mean comprehensibility: 4.2/5 (SD=0.7)
*   Mean perceived usefulness: 4.4/5 (SD=0.6)
*   87% of participants found explanations actionable for decision-making.

---

## XII. Testing

### A. Testing Strategy
Multi-level approach: unit, integration, system, functional, UI, and security testing. Executed via `pytest` (backend) and `Jest` (frontend).

### B. Unit Testing
*   NLP functions tested against curated fixtures.
*   `EmailDomainExtractor` tested on 50 emails (100% accuracy).
*   `SuspiciousKeywordExtractor` validated on 30 text samples.

### C. Integration Testing
*   NLP-to-feature concatenation verified (10,015 dimensions).
*   API-to-ML pipeline tested on 100 postings (97% accuracy).

### D. Test Cases

**Table III: System Test Cases**

| TC ID | Test Description | Input | Expected Output | Status |
| :--- | :--- | :--- | :--- | :--- |
| TC-001 | Real Job Detection | Valid corporate text | REAL, Risk: Low | PASS |
| TC-002 | Fake Job Detection | Suspicious keywords | FAKE, Risk: High | PASS |
| TC-003 | OCR Screenshot | PNG/JPEG image | Extracted text + prediction | PASS |
| TC-004 | Empty Input | Empty string | Validation error | PASS |
| TC-005 | Batch CSV | CSV with 100 records | 100 predictions | PASS |
| TC-006 | SHAP Explanation | Any valid posting | Top-5 feature explanation | PASS |
| TC-007 | Email Domain | gmail.com recruiter | Flagged as suspicious | PASS |
| TC-008 | Company Profile | Missing description | Completeness = 0 | PASS |
| TC-009 | Rate Limiting | 101 requests/min | HTTP 429 | PASS |
| TC-010 | SQL Injection | Malicious SQL query | Input sanitized | PASS |

### E. Security Testing
*   **SQL Injection:** 50 payloads tested; all properly parameterized.
*   **XSS:** User content HTML-escaped.
*   **Auth Bypass:** Blocked by JWT middleware.
*   **Fuzzing:** `Atheris` library confirmed graceful handling of boundary conditions.

---

## XIII. Advantages of the Proposed System
1.  **Hybrid Feature Engineering:** Behavioural features contribute ~40% of discriminative power, detecting sophisticated scams evading text-only classifiers.
2.  **SHAP Transparency:** Transforms black-box predictions into transparent, feature-attributed rationales, enhancing trust and regulatory compliance.
3.  **Multi-Modal Input:** Supports text, OCR screenshots, and batch CSVs, broadening applicability to social media and bulk auditing.
4.  **Real-Time & Batch Processing:** Sub-2-second latency for individual predictions; async architecture for high-throughput batch analysis.
5.  **Interactive Dashboard:** Provides aggregate analytics and exportable visualizations for trend monitoring and compliance reporting.

---

## XIV. Limitations
1.  **Geographic/Linguistic Bias:** Trained predominantly on English/Western data. Performance degrades on non-Latin scripts.
2.  **OCR Limitations:** Degrades on low-resolution, stylized, or complex layout screenshots. Requires advanced models like LayoutLM.
3.  **Static Keyword Lexicon:** Requires manual curation to adapt to evolving scam tactics.
4.  **Startup False Positives:** Legitimate startups lacking digital profiles may trigger alerts. Requires contextual calibration.
5.  **No Longitudinal Profiling:** Lacks graph-based recruiter reputation tracking over time.

---

## XV. Future Enhancements
1.  **Transformer Integration:** Fine-tune BERT, RoBERTa, or DistilBERT for nuanced context detection.
2.  **Multi-Language Support:** Implement XLM-RoBERTa and language-specific lexicons for global markets.
3.  **Browser Extension:** Manifest V3 extension injecting real-time SHAP tooltips into job portals.
4.  **Mobile Application:** iOS/Android app leveraging device-local OCR for physical flyers and WhatsApp forwards.
5.  **Blockchain Verification:** Decentralized, tamper-proof company legitimacy validation.
6.  **Cloud-Native AutoML:** Kubernetes orchestration for elastic scaling and automated model retraining.

---

## XVI. Conclusion
This paper presented the design, implementation, and evaluation of an Explainable AI-based Smart Job Scam Detection System. By integrating TF-IDF vectorization with 15 behavioural features and an XGBoost-Logistic Regression ensemble, the system achieved 97.4% accuracy and a 96.3% F1-score on the Kaggle benchmark. The incorporation of SHAP transforms the system into a transparent decision support tool, providing natural language justifications for every prediction. The multi-modal architecture (text, OCR, CSV) and interactive dashboard significantly broaden its utility for both individual job seekers and platform operators. Ultimately, the system empowers users with an accessible, transparent, and effective tool to mitigate the financial and psychological harms of online recruitment fraud.

---

## References
1. A. Amaar, W. Aljedaani, F. Rustam, E. Rupapara, and S. Lee, "Detection of Fake Job Postings by Utilizing Machine Learning and Natural Language Processing Approaches," *Neural Processing Letters*, vol. 54, no. 3, pp. 2219–2247, Jun. 2022.
2. S. Vidros, C. Kolias, G. Kambourakis, and L. Akoglu, "Automatic Detection of Online Recruitment Frauds: Characteristics, Methods, and a Public Dataset," *Future Internet*, vol. 9, no. 1, p. 6, Mar. 2017.
3. Z. Qazi, I. A. Qazi, K. Khushi, and S. Y. Irfan, "Fraud Job Posting Detection Using Machine Learning," in *Proc. 6th Int. Conf. Future Networks & Distributed Systems (ICFNDS)*, New York, NY, USA, 2022, pp. 1–8.
4. S. Priya, P. Divyashree, R. Harini, and S. Subhashini, "Fake Job Posting Detection Using Deep Learning," *Int. J. Adv. Res. Comput. Sci.*, vol. 13, no. 3, pp. 45–52, May 2022.
5. S. Mahbub, M. E. Pardede, A. A. Chowdhury, and R. Talevski, "Controlling Fake Job Advertisements on the Internet using BERT," in *Proc. IEEE Int. Conf. e-Business Eng. (ICEBE)*, Shanghai, China, 2020, pp. 14–21.
6. Y. Zhang and L. Zhao, "Behavioural Indicators of Fraudulent Recruitment: An Empirical Study," *Int. J. Inf. Manag.*, vol. 58, p. 102278, Oct. 2021.
7. R. Shalini and T. R. Babu, "Graph-Based Anomaly Detection for Fraudulent Job Postings," *Comput. Sci. Eng. Int. J. (CSEIJ)*, vol. 12, no. 2, pp. 1–14, Apr. 2022.
8. P. Kaur, M. Sharma, and M. Mittal, "Big Data and Machine Learning Based Secure Healthcare Framework," *Procedia Comput. Sci.*, vol. 132, pp. 1049–1059, 2018.
9. T. Chen and C. Guestrin, "XGBoost: A Scalable Tree Boosting System," in *Proc. 22nd ACM SIGKDD Int. Conf. Knowledge Discovery and Data Mining*, San Francisco, CA, USA, 2016, pp. 785–794.
10. S. M. Lundberg and S. Lee, "A Unified Approach to Interpreting Model Predictions," in *Advances in Neural Information Processing Systems*, vol. 30, 2017, pp. 4765–4774.
11. S. K. Sahu, A. Upadhyay, and S. Biswas, "Social Media Fraud Detection using OCR and NLP Techniques," in *Proc. Int. Conf. Artificial Intelligence and Smart Systems (ICAIS)*, Coimbatore, India, 2021, pp. 874–881.
12. M. Alotaibi and D. Roussinov, "Linguistic Style Markers in Online Employment Fraud Detection," *Inf. Process. Manage.*, vol. 58, no. 4, p. 102573, Jul. 2021.
13. F. Pedregosa et al., "Scikit-learn: Machine Learning in Python," *J. Mach. Learn. Res.*, vol. 12, pp. 2825–2830, 2011.
14. N. V. Chawla, K. W. Bowyer, L. O. Hall, and W. P. Kegelmeyer, "SMOTE: Synthetic Minority Over-Sampling Technique," *J. Artif. Intell. Res.*, vol. 16, pp. 321–357, Jun. 2002.
15. R. Smith, "An Overview of the Tesseract OCR Engine," in *Proc. 9th Int. Conf. Document Analysis and Recognition (ICDAR)*, Curitiba, Brazil, 2007, pp. 629–633.
16. J. Devlin, M. W. Chang, K. Lee, and K. Toutanova, "BERT: Pre-training of Deep Bidirectional Transformers for Language Understanding," in *Proc. NAACL-HLT*, Minneapolis, MN, USA, 2019, pp. 4171–4186.
17. M. Hasan, M. Rundensteiner, and E. Agu, "AUTOMATIC EMOTION DETECTION IN TEXT STREAMS BY ANALYZING TWITTER DATA," in *Proc. IEEE Int. Conf. on Big Data and Smart Computing (BigComp)*, Shanghai, China, 2014.
18. Federal Trade Commission, "Consumer Sentinel Network Data Book 2022," Federal Trade Commission, Washington, DC, USA, Tech. Rep., Feb. 2023.
19. Kaggle, "Fake Job Postings Dataset," Kaggle Platform, 2020.
20. M. Ribeiro, S. Singh, and C. Guestrin, "'Why Should I Trust You?': Explaining the Predictions of Any Classifier," in *Proc. 22nd ACM SIGKDD Int. Conf. Knowledge Discovery and Data Mining*, San Francisco, CA, USA, 2016, pp. 1135–1144.
21. D. Gunning and D. Aha, "DARPA's Explainable Artificial Intelligence (XAI) Program," *AI Magazine*, vol. 40, no. 2, pp. 44–58, 2019.
22. A. Vaswani et al., "Attention Is All You Need," in *Advances in Neural Information Processing Systems*, vol. 30, 2017, pp. 5998–6008.
23. S. Bird, E. Klein, and E. Loper, *Natural Language Processing with Python: Analyzing Text with the Natural Language Toolkit*. O'Reilly Media, 2009.
24. A. Géron, *Hands-On Machine Learning with Scikit-Learn, Keras, and TensorFlow*, 3rd ed. O'Reilly Media, 2022.
25. International Labour Organization, "World Employment and Social Outlook: Trends 2023," ILO, Geneva, Switzerland, 2023.
26. P. Liu et al., "RoBERTa: A Robustly Optimized BERT Pretraining Approach," *arXiv preprint arXiv:1907.11692*, Jul. 2019.
27. Z. Yang et al., "XLNet: Generalized Autoregressive Pretraining for Language Understanding," in *Advances in Neural Information Processing Systems*, vol. 32, 2019.
28. C. C. Aggarwal and C. X. Zhai, "A Survey of Text Classification Algorithms," in *Mining Text Data*, C. C. Aggarwal and C. X. Zhai, Eds. Springer, 2012, pp. 163–222.
29. European Commission, "Proposal for a Regulation of the Parliament and of the Council Laying Down Harmonised Rules on Artificial Intelligence (Artificial Intelligence Act)," COM(2021) 206 final, Apr. 2021.
30. R. Kohavi, "A Study of Cross-Validation and Bootstrap for Accuracy Estimation and Model Selection," in *Proc. 14th Int. Joint Conf. on Artificial Intelligence (IJCAI)*, Montreal, Canada, 1995, pp. 1137–1143.