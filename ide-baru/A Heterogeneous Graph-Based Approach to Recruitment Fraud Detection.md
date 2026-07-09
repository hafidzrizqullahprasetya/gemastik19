Here is the comprehensively rewritten version of the journal article in English, maintaining the exact structure, data, formulas, and technical meaning of the original document, formatted in Markdown.

***

# GAR-HGNN: A Heterogeneous Graph-Based Approach to Recruitment Fraud Detection
**Author:** Bin Shi  
**Affiliation:** School of Computer and Information Science, Chongqing Normal University, Chongqing, China  
**Publication:** ACAIB 2025, June 06–08, 2025, Nanjing, China

## Abstract
This study introduces GAR-HGNN (*Gated Attention and Dual Feature Enhancement*), a heterogeneous graph-based methodology designed to overcome the challenges of low recall and F1-scores in recruitment fraud detection. The model dynamically modulates the fusion weights of textual and attribute features utilizing a gated attention mechanism. Integrating principles from labor economics and criminology, we formulate an industry-salary anomaly index (serving as a node attribute) and a geography-industry risk density (acting as an edge weight) to enrich the risk representation within the graph structure. Furthermore, the training process for highly imbalanced datasets is optimized via an anomaly-index-based weighted loss function. Experimental evaluations on the EMSCD dataset demonstrate that the proposed approach attains an accuracy of 0.9896, a precision of 0.9626, a recall of 0.9962, and an F1-score of 0.9791.

**Keywords:** Recruitment fraud detection, heterogeneous graph neural network, gated attention mechanism, class imbalance, deep learning, anomaly index, risk density.

---

## 1. Introduction
In the modern digital landscape, online recruitment platforms serve as the primary bridge connecting job seekers with employers. According to a CNNIC report, the scale of online recruitment users in China reached 455 million by June 2023, comprising 43.5% of the total internet population. Conversely, a 2022 Check Point report highlighted a 37% year-over-year surge in global recruitment fraud, resulting in average losses exceeding $5,000 USD. Malicious activities, such as the posting of fictitious positions, frequently lead to the leakage of personal data and severe reputational damage for legitimate companies.

Information related to recruitment fraud is inherently heterogeneous, characterized by abnormal high-frequency keywords, unstructured text, and diverse metadata. Grounded in information asymmetry theory, fraudsters exploit anomalous conditions to lure candidates. Traditional rule-based systems struggle to adapt to dynamic fraud patterns and suffer from high miss rates. Meanwhile, conventional machine learning models are prone to overfitting, exhibit weak performance on minority classes, and fail to fully leverage graph structural information in high-dimensional, sparse, and severely imbalanced scenarios (where the ratio of real to fake jobs is approximately 20:1). 

While Graph Neural Networks (GNNs) excel at modeling complex relational data, standard GNNs struggle to integrate heterogeneous information. Heterogeneous Graph Neural Networks (HGNNs) offer a promising alternative; however, existing HGNN frameworks rely on fixed-weight fusion strategies. They cannot dynamically adjust the interaction intensity between text and attributes, which is crucial for identifying patterns like "high-paying decoys" or "high-risk areas"—concepts aligning with signaling theory and the "risky environment hypothesis" in crime hotspot theory.

To address these gaps, this paper proposes the **GAR-HGNN** framework, which translates labor market and criminological theories into computable graph features. The primary contributions are as follows:
1.  **Risk-Oriented Heterogeneous Graph:** We integrate an anomaly index and risk density to construct a graph that enhances the identification of typical fraud patterns.
2.  **Gated Attention Mechanism:** We introduce a dynamic gating mechanism to adjust the fusion weights of text and attribute features in real-time, resolving the context-insensitivity of static fusion.
3.  **Anomaly-Sensitive Weighted Loss:** We design a specialized loss function that amplifies the weight of high-risk minority samples, significantly improving the model's learning capability on severely imbalanced data.

---

## 2. Related Work
The evolution of recruitment fraud (RF) detection can be categorized into three distinct generations:

*   **Early Machine Learning:** Initial approaches utilized traditional algorithms (e.g., Logistic Regression, Random Forest) paired with shallow feature extraction like TF-IDF or Bag-of-Words (BoW). Vidros et al. (2017) achieved 91% accuracy on the EMSCAD dataset using manual rules and BoW, but struggled with complex semantics. Later, Amaar et al. (2022) applied ADASYN oversampling to improve minority sample recognition, though it remained heavily reliant on shallow features.
*   **Deep Learning Era:** The advent of Transformer-based pre-trained models revolutionized the field. Taneja et al. (2024) introduced Fraud-BERT, capturing textual context with an F1-score of 0.93 and 99% accuracy, albeit with high computational costs. Akram et al. combined BERT with SMOBD SMOTE, achieving a 90% recall. Vu et al. (2025) proposed NLP2FJD, fusing text and metadata via CNNs, though it ignored underlying graph structures.
*   **Graph Neural Networks (GNNs):** GNNs explicitly model semantics and relationships. For instance, TextGCN achieved 93.7% accuracy on the 20NG dataset. To handle heterogeneous relationships, HGNNs were developed to aggregate neighborhood features via random walks. However, baseline HGNNs still suffer from fixed fusion weights and fail to adequately learn from minority classes in highly imbalanced (20:1) scenarios, leading to poor detection of "high-paying bait" patterns.

---

## 3. Methodology: GAR-HGNN
The proposed framework consists of four interconnected modules: data preprocessing, homogeneous subgraph construction, feature fusion via heterogeneous graph construction, and model training/prediction.

### 3.1 Data Preprocessing and Feature Extraction
**Anomaly Index & Risk Density:**
Based on attribute correlation analysis, low-correlation features (e.g., 'telecommuting', 'job_id') are discarded. We construct the **Industry-Salary Anomaly Index** to quantify the risk of salary-qualification mismatch by standardizing salary deviations:
$$ \text{Anomaly Score}_i = \frac{\text{salary}_i - \mu_{\text{industry}}}{\sigma_{\text{industry}}} $$
where $\mu$ and $\sigma$ represent the industry's mean and standard deviation, respectively. 

Additionally, we define the **Geography-Industry Risk Density** to reflect regional and sectoral fraud concentration:
$$ \text{Risk Density}(r, i) = \frac{\text{Fraud Count}(r, i)}{\text{Total Job Count}(r, i)} $$

**Feature Extraction:**
*   **Text Nodes:** Semantic features are extracted using a pre-trained BERT model and concatenated with lexical annotations (part-of-speech) generated by spaCy:
    $$ x_{i}^{\text{text\_final}} = [x_{i}^{\text{text}} ; x_{i}^{\text{pos}}] $$
*   **Attribute Nodes:** Numerical attributes are standardized, categorical attributes are one-hot encoded, and the anomaly index is embedded as an supplementary feature:
    $$ x_{i}^{\text{attr\_final}} = [x_{i}^{\text{num}} ; x_{i}^{\text{cat}} ; \text{Anomaly Score}_i] $$
    Samples with high anomaly indices are flagged as high-risk and assigned greater weights during training.

### 3.2 Homogeneous Relationship Subgraph Construction
The data is modeled as a graph $G=(V, E)$ containing text nodes ($V_{\text{text}}$) and attribute nodes ($V_{\text{attr}}$).
*   **Text-to-Text Edges:** Connected if the cosine similarity exceeds a threshold $T_1$:
    $$ e_{ij}^{\text{text-text}} = \begin{cases} 1, & \text{if } \text{similarity}(v_i^{\text{text}}, v_j^{\text{text}}) > T_1 \\ 0, & \text{otherwise} \end{cases} $$
*   **Attribute-to-Attribute Edges:** Connected if the Pearson correlation exceeds $T_2$. The geographic-industry risk density is introduced as a weight correction factor to amplify edges in high-risk regions:
    $$ e_{ij}^{\text{attr-attr}} = \begin{cases} 1 + W \cdot \text{RiskDensity}(r, i), & \text{if } \text{correlation}(v_i^{\text{attr}}, v_j^{\text{attr}}) > T_2 \\ \text{threshold}, & \text{otherwise} \end{cases} $$

### 3.3 Feature Fusion and Heterogeneous Graph Construction
Text and attribute features are projected into a unified dimensional space:
$$ H_{\text{text}} = W_{\text{text}}X_{\text{text}} + b_{\text{text}}, \quad H_{\text{attr}} = W_{\text{attr}}X_{\text{attr}} + b_{\text{attr}} $$
Attention weights are dynamically assigned via dot-product score normalization:
$$ U_{\text{text}} = \frac{\exp(B_{\text{text}})}{\exp(B_{\text{text}}) + \exp(B_{\text{attr}})}, \quad U_{\text{attr}} = \frac{\exp(B_{\text{attr}})}{\exp(B_{\text{text}}) + \exp(B_{\text{attr}})} $$
where $B_{\text{text}} = H_{\text{text}}^T H_{\text{attr}}$ and $B_{\text{attr}} = H_{\text{attr}}^T H_{\text{text}}$.

A gating mechanism utilizing the sigmoid function dynamically adjusts the fusion weights:
$$ G_{\text{gate}} = \sigma(W_{\text{gate}}[x_{\text{text}} ; x_{\text{attr}}] + b_{\text{gate}}) $$
The final fused representation is computed as:
$$ h_{\text{fused}} = G_{\text{gate}} \cdot U_{\text{text}} x_{\text{text}} + (1 - G_{\text{gate}}) \cdot U_{\text{attr}} x_{\text{attr}} $$

### 3.4 Model Training and Prediction
Node representations are updated via graph convolution to aggregate neighborhood features:
$$ h_i^{\text{text}} = f\left(\sum_{j \in N_{\text{text}}(i)} W_{\text{text-text}}h_j^{\text{text}} + W_{\text{text-attr}}h_j^{\text{attr}} + b_{\text{text}}\right) $$
$$ h_i^{\text{attr}} = f\left(\sum_{j \in N_{\text{attr}}(i)} W_{\text{attr-attr}}h_j^{\text{attr}} + W_{\text{attr-text}}h_j^{\text{text}} + b_{\text{attr}}\right) $$
The fused nodes are passed through a fully connected layer, and classifications are output via Softmax: $\hat{y} = \text{Softmax}(W_{\text{out}} h_{\text{fused}} + b_{\text{out}})$.

To address data imbalance, we design an **Anomaly Index-Based Weighted Loss Function**:
$$ L = \sum_{i} w_i \cdot \left(1 + \alpha \cdot f(\text{Anomaly Score}_i \cdot \beta)\right) $$
This formulation boosts the loss weight for high-risk samples, forcing the model to prioritize learning from fraudulent minority instances.

---

## 4. Experiments and Analysis

### 4.1 Dataset
The study utilizes the **Employment Scam Aegean (ESA)** dataset, curated by the University of the Aegean. It comprises 18,746 job postings from 2012 to 2014. The dataset exhibits severe class imbalance, containing 17,880 legitimate postings and only 866 fraudulent ones.

### 4.2 Experimental Setup
*   **Environment:** Ubuntu 22.04, NVIDIA RTX 4090 GPU (24GB VRAM), 10vCPU, 60GB RAM.
*   **Frameworks:** PyTorch 2.2.0, utilizing `imbalanced-learn` and `scikit-learn`.
*   **Parameters:** Thresholds were optimized via grid search and 5-fold cross-validation to maximize the F1-score, yielding $T_1 = 0.8$ (text similarity) and $T_2 = 0.7$ (attribute correlation).
*   **Data Split:** 70% training, 20% validation, and 10% testing.

### 4.3 Evaluation Metrics
The model is evaluated using six standard metrics:
1.  **Accuracy:** Overall correctness of predictions.
2.  **Precision:** Reliability of positive (fraud) predictions.
3.  **Recall (Sensitivity):** Ability to capture actual fraud cases (crucial for avoiding under-detection).
4.  **F1-Score:** Harmonic mean of precision and recall.
5.  **G-mean:** Geometric mean of recall and specificity, ideal for imbalanced datasets.
6.  **Specificity:** Accuracy in correctly identifying normal (non-fraud) samples.

### 4.4 Comparative Analysis
GAR-HGNN is benchmarked against several state-of-the-art models:
*   **Logistic Regression (LR) [10]:** Traditional baseline by Vidros et al.
*   **Fraud-BERT [12]:** Transformer-based context-aware model by Taneja et al.
*   **BERT+SMOBD SMOTE [14]:** BERT combined with density-based oversampling by Akram et al.
*   **NLP2FJD [15]:** CNN-based NLP model fusing text and metadata by Vu et al.

**Table 1: Comparative Experimental Results**

| Methodology | Accuracy | Precision | Recall | F1-Score | G-mean | Specificity |
| :--- | :---: | :---: | :---: | :---: | :---: | :---: |
| LR [10] | 0.8950 | 0.7510 | 0.2820 | 0.4060 | 0.5274 | 0.9860 |
| Fraud-BERT [12] | 0.9817 | 0.8896 | 0.8382 | 0.8630 | 0.9134 | 0.9947 |
| BERT+SMOTE [14] | 0.9703 | 0.9733 | 0.8984 | 0.8247 | 0.8953 | 0.8235 |
| NLP2FJD [15] | 0.9600 | 0.9600 | 0.9300 | 0.9400 | 0.9400 | 0.9600 |
| **GAR-HGNN (Ours)** | **0.9896** | **0.9626** | **0.9962** | **0.9791** | **0.9919** | **0.9875** |

The results indicate that GAR-HGNN significantly outperforms existing models, particularly in Recall and F1-score. This superiority stems from the HGNN's ability to model complex heterogeneous relationships and the attention mechanism's capacity to effectively fuse textual and attribute features, enabling highly accurate capture of fraudulent job characteristics.

---

## 5. Conclusions and Future Work
To overcome the limitations of traditional methods in processing heterogeneous data, this paper proposed the GAR-HGNN framework. By leveraging a heterogeneous graph neural network, a gated attention mechanism, and dual feature enhancement, the model achieves high-precision recruitment fraud detection on the EMSCD dataset, offering robust support for platform risk control and social credit systems.

**Future Research Directions:**
1.  **Model Optimization:** Enhance graph convolution operations, explore more efficient GNN architectures and gating mechanisms, and reduce computational overhead for large-scale data processing.
2.  **Data Utilization:** Integrate multi-source data (e.g., social network profiles, enterprise reputation metrics) to uncover latent relational links and enrich feature representations.
3.  **Interpretability:** Develop advanced visualization tools, such as heatmaps and node importance ranking, to illustrate the model's attention levels. This will enhance user trust and help safeguard the security of the recruitment market.