# IndoNLU: Benchmark and Resources for Evaluating Indonesian Natural Language Understanding

**Authors:** Bryan Wilie, Karissa Vincentio, Genta Indra Winata, Samuel Cahyawijaya, Xiaohong Li, Zhi Yuan Lim, Sidik Soleman, Rahmad Mahendra, Pascale Fung, Syafri Bahar, Ayu Purwarianti  
**Affiliations:** Institut Teknologi Bandung, Universitas Multimedia Nusantara, The Hong Kong University of Science and Technology, Gojek, Prosa.ai, Universitas Indonesia.

## Abstract
Although Indonesian is known to be the fourth most frequently used language over the internet, the research progress on this language in natural language processing (NLP) is slow-moving due to a lack of available resources. In response, we introduce the first-ever vast resource for training, evaluation, and benchmarking on Indonesian natural language understanding (IndoNLU) tasks. IndoNLU includes twelve tasks, ranging from single sentence classification to pair-sentences sequence labeling with different levels of complexity. The datasets for the tasks lie in different domains and styles to ensure task diversity. We also provide a set of Indonesian pre-trained models (IndoBERT) trained from a large and clean Indonesian dataset (Indo4B) collected from publicly available sources such as social media texts, blogs, news, and websites. We release baseline models for all twelve tasks, as well as the framework for benchmark evaluation, thus enabling everyone to benchmark their system performances.

## 1. Introduction
Following the notable success of contextual pre-trained language methods (Peters et al., 2018; Devlin et al., 2019), several benchmarks to gauge the progress of general-purpose NLP research, such as GLUE (Wang et al., 2018), SuperGLUE (Wang et al., 2019), and CLUE (Xu et al., 2020), have been proposed. These benchmarks cover a large range of tasks to measure how well pre-trained models achieve compared to humans. However, these metrics are limited to high-resource languages, such as English and Chinese, that already have existing datasets available and are accessible to the research community. Most languages, by contrast, suffer from limited data collection and low awareness of published data for research. One of the languages which suffer from this resource scarcity problem is Indonesian.

Indonesian is the fourth largest language used over the internet, with around 171 million users across the globe. Despite a large amount of Indonesian data available over the internet, the advancement of NLP research in Indonesian is slow-moving. This problem occurs because available datasets are scattered, with a lack of documentation and minimal community engagement. Moreover, many existing studies in Indonesian NLP do not provide codes and test splits, making it impossible to reproduce results.

To address the data scarcity problem, we propose the first-ever Indonesian natural language understanding benchmark, IndoNLU, a collection of twelve diverse tasks. The tasks are mainly categorized based on the input, such as single-sentences and sentence-pairs, and objectives, such as sentence classification tasks and sequence labeling tasks. The benchmark is designed to cater to a range of styles in both formal and colloquial Indonesian, which are highly diverse. We collect a range of datasets from existing works: an emotion classification dataset, QA factoid dataset, sentiment analysis dataset, aspect-based sentiment analysis dataset, part-of-speech (POS) tag dataset, named entity recognition (NER) dataset, span extraction dataset, and textual entailment dataset. It is difficult to compare model performance since there is no official split of information for existing datasets. Therefore, we standardize the benchmark by resplitting the datasets on each task for reproducibility purposes. 

To expedite the modeling and evaluation processes for this benchmark, we present samples of the model pre-training code and a framework to evaluate models in all downstream tasks. We will publish the score of our benchmark on a publicly accessible leaderboard to provide better community engagement and benchmark transparency.

To further advance Indonesian NLP research, we collect around four billion words from Indonesian preprocessed text data (≈ 23 GB), as a new standard dataset, called Indo4B, for self-supervised learning. The dataset comes from sources like online news, social media, Wikipedia, online articles, subtitles from video recordings, and parallel datasets. We then introduce an Indonesian BERT-based model, IndoBERT, which is trained on our Indo4B dataset. We also introduce another IndoBERT variant based on the ALBERT model, called IndoBERT-lite. The two variants of IndoBERT are used as baseline models in the IndoNLU benchmark. In this work, we also extensively compare our IndoBERT models to different pre-trained word embeddings and existing multilingual pre-trained models, such as Multilingual BERT and XLM-R, to measure their effectiveness. Results show that our pre-trained models outperform most of the existing pre-trained models.

## 2. Related Work
**Benchmarks:** GLUE is a multi-task benchmark for natural language understanding (NLU) in the English language. It consists of nine tasks: single-sentence input, semantic similarity detection, and natural language inference (NLI) tasks. GLUE’s harder counterpart SuperGLUE covers question answering, NLI, co-reference resolution, and word sense disambiguation tasks. CLUE is a Chinese NLU benchmark that includes a test set designed to probe a unique and specific linguistic phenomenon in the Chinese language. It consists of eight diverse tasks, including single-sentence, sentence-pair, and machine reading comprehension tasks. FLUE is an evaluation NLP benchmark for the French language which is divided into six different task categories: text classification, paraphrasing, NLI, parsing, POS tagging, and word sense disambiguation.

**Contextual Language Models:** In recent years, contextual pre-trained language models have shown a major breakthrough in NLP, starting from ELMo. With the emergence of the transformer model, Devlin et al. (2019) proposed BERT, a faster architecture to train a language model that eliminates recurrences by applying a multi-head attention layer. Liu et al. (2019) later proposed RoBERTa, which improves the performance of BERT by applying dynamic masking, increasing the batch size, and removing the next-sentence prediction. Lan et al. (2020) proposed ALBERT, which extends the BERT model by applying factorization and weight sharing to reduce the number of parameters and time.

Many research studies have introduced contextual pre-trained language models on languages other than English. Cui et al. (2019) introduced the Chinese BERT and RoBERTa models, while Martin et al. (2019) and Le et al. (2019) introduced CamemBERT and FLAUBert respectively, which are BERT-based models for the French language. Devlin et al. (2019) introduced the Multilingual BERT model, a BERT model trained on monolingual Wikipedia data in many languages. Meanwhile, Lample and Conneau (2019) introduced XLM, a cross-lingual pre-trained language model that uses parallel data as a new translation masked loss to improve the cross-linguality. Finally, Conneau et al. (2019) introduced XLM-R, a RoBERTa-based XLM model.

## 3. IndoNLU Benchmark
In this section, we describe our benchmark as four components. Firstly, we introduce the 12 tasks in IndoNLU for Indonesian natural language understanding. Secondly, we introduce a large-scale Indonesian dataset for self-supervised pre-training models. Thirdly, we explain the various kinds of baseline models used in our IndoNLU benchmark. Lastly, we describe the evaluation metric used to standardize the scoring over different models in our IndoNLU benchmark.

### 3.1 Downstream Tasks
The IndoNLU downstream tasks cover 12 tasks divided into four categories: (a) single-sentence classification, (b) single-sentence sequence-tagging, (c) sentence-pair classification, and (d) sentence-pair sequence labeling.

**Table 1 Description:** Task statistics and descriptions. It lists the Train, Valid, and Test sizes, Task Description, Number of Labels, Number of Classes, Domain, and Style for each dataset. Datasets marked with † indicate that new splits were created for the benchmark.
- **Single-Sentence Classification Tasks:** EmoT (emotion classification, tweets, colloquial), SmSA (sentiment analysis, general, colloquial), CASA (aspect-based sentiment analysis, automobile, colloquial), HoASA (aspect-based sentiment analysis, hotel, colloquial).
- **Sentence-Pair Classification Tasks:** WReTE (textual entailment, wiki, formal).
- **Single-Sentence Sequence Labeling Tasks:** POSP (part-of-speech tagging, news, formal), BaPOS (part-of-speech tagging, news, formal), TermA (span extraction, hotel, colloquial), KEPS (span extraction, banking, colloquial), NERGrit (named entity recognition, wiki, formal), NERP (named entity recognition, news, formal).
- **Sentence-Pair Sequence Labeling Tasks:** FacQA (span extraction, news, formal).

#### 3.1.1 Single-Sentence Classification Tasks
- **EmoT:** An emotion classification dataset collected from Twitter. It consists of around 4000 Indonesian colloquial language tweets, covering five different emotion labels: anger, fear, happiness, love, and sadness.
- **SmSA:** This sentence-level sentiment analysis dataset is a collection of comments and reviews in Indonesian obtained from multiple online platforms. The text was crawled and annotated by several Indonesian linguists. There are three possible sentiments: positive, negative, and neutral.
- **CASA:** An aspect-based sentiment analysis dataset consisting of around a thousand car reviews collected from multiple Indonesian online automobile platforms. The dataset covers six aspects of car quality. It is defined as a multi-label classification task, where each label represents a sentiment for a single aspect with three possible values: positive, negative, and neutral.
- **HoASA:** An aspect-based sentiment analysis dataset consisting of hotel reviews collected from AiryRooms. The dataset covers ten different aspects of hotel quality. Each review is labeled with a single sentiment label for each aspect. There are four possible sentiment classes: positive, negative, neutral, and positive-negative (given to a review that contains multiple sentiments of the same aspect but for different objects).

#### 3.1.2 Sentence-Pair Classification Task
- **WReTE:** The Wiki Revision Edits Textual Entailment dataset consists of 450 sentence pairs constructed from Wikipedia revision history. It contains pairs of sentences and binary semantic relations. The data are labeled as entailed when the meaning of the second sentence can be derived from the first one, and not entailed otherwise.

#### 3.1.3 Single-Sentence Sequence Labeling Tasks
- **POSP:** This Indonesian part-of-speech tagging (POS) dataset is collected from Indonesian news websites. It consists of around 8000 sentences with 26 POS tags, following the Indonesian Association of Computational Linguistics (INACL) POS Tagging Convention.
- **BaPOS:** This POS tagging dataset contains about 1000 sentences, collected from the PAN Localization Project. Each word is tagged by one of 23 POS tag classes.
- **TermA:** This span-extraction dataset is collected from hotel reviews on AiryRooms. Each contains a span label for aspect and sentiment words representing the reviewer's opinion. The labels use Inside-Outside-Beginning (IOB) tagging representation with two kinds of tags: aspect and sentiment.
- **KEPS:** This keyphrase extraction dataset consists of text from Twitter discussing banking products and services in Indonesian. Important phrases are considered keyphrases. It follows the IOB chunking format.
- **NERGrit:** This NER dataset is taken from the Grit-ID repository, with labels in IOB chunking representation. It consists of three named entity tags: PERSON, PLACE, and ORGANIZATION.
- **NERP:** This NER dataset contains texts collected from several Indonesian news websites. There are five labels: PER (person), LOC (location), IND (product or brand), EVT (event), and FNB (food and beverage). It uses the IOB chunking format.

#### 3.1.4 Sentence-Pair Sequence Labeling Task
- **FacQA:** The goal is to find the answer to a question from a provided short passage from a news article. Each row consists of a question, a short passage, and a label phrase found inside the passage. There are six categories of questions: date, location, name, organization, person, and quantitative.

### 3.2 Indo4B Dataset
Indonesian NLP development has struggled with data availability. To cope with this, we provide a large-scale dataset called Indo4B for building a self-supervised pre-trained model. It consists of around 4B words, with around 250M sentences, covering both formal and colloquial Indonesian compiled from 12 datasets.

**Table 3 Description:** Indo4B dataset statistics. It lists the Dataset name, Number of Words, Number of Sentences, Size, Style, and Source. Sources include OSCAR, CoNLLu Common Crawl, OpenSubtitles, Twitter Crawl, Wikipedia Dump, Wikipedia CoNLLu, Twitter UI, OPUS JW300, Tempo, Kompas, TED, BPPT, Parallel Corpus, TALPCo, and Frog Storytelling. Total size is 23.43 GB. The authors note that Twitter data will not be shared publicly due to Twitter Developer Policy restrictions.

### 3.3 Baselines
#### 3.3.1 Models
We provide a diverse set of baseline models:
- **Scratch:** A non-pre-trained model.
- **fastText:** Word-embedding-based models. We use an existing fastText model trained on the Indonesian Common Crawl (CC-ID) dataset, and we also build a fastText model trained on our Indo4B dataset. Both use a transformer architecture (with 2, 4, and 6 layers experimented).
- **Contextualized Language Models:** We build Indonesian BERT and ALBERT models, named IndoBERT and IndoBERT-lite, in both base and large sizes. We also provide multilingual model baselines: Multilingual BERT (mBERT), XLM, and XLM-R.

**Table 2 Description:** Details of baseline models used in the IndoNLU benchmark. It lists Model name, Number of Parameters, Number of Layers, Number of Heads, Embedding Size, Hidden Size, FFN Size, Language Type (Mono/Multi), Pre-train type, and Embedding Type. Models range from Scratch (15.1M params) to XLM-MLM LARGE (573.2M params).

#### 3.3.2 Fine-tuning Settings
We fine-tune a pre-trained model for each task with initial learning rates in the range [1e-5, 4e-5]. We apply a decay rate of [0.8, 0.9] for every epoch, and sample each batch with a size of 16 for all datasets except FacQA and POSP, for which we use a batch size of 8. We use an early stop on the validation score to choose the best model.

### 3.4 Evaluation Metrics
We use the F1 score to measure the evaluation performance of all tasks. For binary and multi-label classification tasks, we measure the macro-averaged F1 score by taking the top-1 prediction. For sequence labeling tasks, we calculate word-level sequence labeling macro-averaged F1-score following the CoNLL evaluation script. We calculate two mean F1-scores separately for classification and sequence labeling tasks.

## 4. IndoBERT
In this section, we describe the details of our Indonesian contextualized models, IndoBERT and IndoBERT-lite, trained using the Indo4B dataset.

### 4.1 Preprocessing
- **Dataset Preparation:** To get the most beneficial next sentence prediction task training, we do paragraph separation or line separation if we notice document separator absence. This is crucial for the BERT architecture to extract long contiguous sequences. We specify duplication factors differently due to various dataset formats. We keep the original form of a word to hold its contextual information since Indonesian words are built with rich morphological operations. For Twitter data, private information (usernames, hashtags, emails, URLs) is masked into generic tokens (e.g., `<username>`, `<hashtag>`) or discarded in the larger Twitter Crawl dataset.
- **Vocabulary:** For both models, we utilize SentencePiece with a byte pair encoding (BPE) tokenizer. We use a vocab size of 30,522 for IndoBERT and 30,000 for IndoBERT-lite.

### 4.2 Pre-training Setup
All IndoBERT models are trained on TPUv3-8 in two phases. 
- **Phase 1:** Maximum sequence length of 128. 
- **Phase 2:** Maximum sequence length of 512. 

**Table 4 Description:** Hyperparameters and training duration for IndoBERT model pre-training. It details the Batch Size, Learning Rate, Steps, and Duration (in hours) for both Maximum Sequence Length = 128 and 512 for IndoBERT-lite BASE, IndoBERT BASE, IndoBERT-lite LARGE, and IndoBERT LARGE. For example, IndoBERT BASE phase 1 takes 35 hours, and phase 2 takes 9 hours.

- **IndoBERT:** We use a batch size of 256 and a learning rate of 2e-5 in both phases for IndoBERT BASE, adjusting to 1e-4 for IndoBERT LARGE. Due to memory limitations, we scale down the batch size to 128 and learning rate to 8e-5 in the second phase for the large model. Models are trained using masked language modeling loss, limiting maximum prediction per sequence to 20 tokens.
- **IndoBERT-lite:** We follow the ALBERT pre-training hyperparameters setup, pre-training with whole word masked loss. We train the base model with a batch size of 4096 in the first phase and 1024 in the second. For the large model, we use a smaller batch size of 1024 in the first phase and 256 in the second due to computation power limitations.

## 5. Results and Analysis
### 5.1 Benchmark Results
**Overall Performance:** We fine-tune all baseline models and evaluate performance grouped into classification and sequence labeling. 
**Table 5 Description:** Results of baseline models with the best performing configuration on the IndoNLU benchmark. Bold numbers indicate the best results. It shows F1 scores for Classification tasks (EmoT, SmSA, CASA, HoASA, WReTE, AVG) and Sequence Labeling tasks (POSP, BaPOS, TermA, KEPS, NERGrit, NERP, FacQA, AVG). 
Key findings: IndoBERT LARGE, XLM-R LARGE, and IndoBERT BASE achieve the top-3 best performance on classification tasks. XLM-R LARGE, IndoBERT LARGE, and XLM-R BASE achieve the top-3 on sequence labeling tasks. Larger models have a performance advantage. All pre-trained models outperform the scratch model, and contextualized pre-trained models outperform word embeddings-based models by significant margins.

### 5.2 Performance-Space Trade-off
**Figure 1 Description:** The paper describes Figure 1 as showing the model performance with respect to the number of parameters. There are two large clusters. On the bottom left, the scratch and fastText models appear, having the lowest F1 scores and the least floating-point operations (FLOPs) in inference time. On the top right, pre-trained models achieve decent performance but incur a high computation cost. Interestingly, in the top-left region, the IndoBERT-lite models achieve similar performance to the IndoBERT models but with many fewer parameters and a slightly lower computation cost. The size of the dots represents the number of FLOPs.

### 5.3 Multilingual vs. Monolingual Models
Contextualized monolingual models outperform contextualized multilingual models on classification tasks by a large margin. However, on sequence labeling tasks, multilingual models tend to perform better, especially on the NERGrit and FacQA tasks. Both NERGrit and FacQA contain many entity names that come from other languages, especially English. This suggests monolingual models capture the semantic meaning of a word better, but multilingual models identify foreign terms better.

### 5.4 Effectiveness of Indo4B Dataset
**Table 6 Description:** Experiment results on fastText embeddings on IndoNLU tasks with a different number of transformer layers (2, 4, 6). It compares `fastText-cc-id` and `fastText-indo4b`. 
The fastText models trained on the Indo4B dataset consistently outperform those trained on the CC-ID dataset in both classification and sequence labeling tasks across all model settings. This suggests that even though the Indo4B dataset is smaller (≈ 23 GB) compared to the estimated CC-ID dataset (≈ 180 GB), it covers more variety of the Indonesian language and has better text quality.

### 5.5 Effectiveness of IndoBERT and IndoBERT-lite
IndoBERT models outperform multilingual models on 8 out of 12 tasks, achieving the highest average score on classification tasks. Monolingual models learn sentiment-level semantics better on both colloquial and formal styles, even though they are 40%–60% smaller. On sequence labeling, IndoBERT models cannot perform as well as XLM-R on POSP, NERGrit, and FacQA, likely because these datasets have many borrowed English words, giving multilingual models a transfer learning advantage.

Meanwhile, IndoBERT-lite models achieve decent performance with the advantage of compact size. The IndoBERT-lite LARGE model performance is on par with XLM-R BASE while having 16x fewer parameters. Increasing the maximum sequence length to 512 in phase two improves performance on sequence labeling tasks, enabling the model to learn temporal information.

## 6. Conclusion
We introduce the first Indonesian benchmark for natural language understanding, IndoNLU, consisting of 12 tasks with different levels of difficulty, domains, and styles. We collect large clean Indonesian datasets into Indo4B, used for training monolingual contextual pre-trained language models, IndoBERT and IndoBERT-lite. We demonstrate their effectiveness in capturing sentence-level semantics. To help with reproducibility, we release the pre-trained models, collected data, and code. We have set up a leaderboard website for the NLP community at https://indobenchmark.com/.

---

## Appendices (Summarized Structure from PDF)
*Note: The PDF contains extensive appendices with raw data samples and hyperparameter tables. Below is the complete structural description of these appendices as they appear in the document.*

- **Appendix A: Data Samples.** Shows examples for all 12 downstream tasks in the IndoNLU benchmark. Includes Tables 7 through 18, detailing sample sentences, words, entities, tags, aspects, and sentiments for tasks like SmSA, EmoT, KEPS, HoASA, CASA, WReTE, NERGrit, NERP, BaPOS, POSP, FacQA, and TermA.
- **Appendix B: Indo4B Data Sources.** **Table 19** lists the Corpus Name, Source, and Public URL for all datasets used to build Indo4B (e.g., OSCAR, CoNLLu Common Crawl, OpenSubtitles, Wikipedia Dump, Twitter Crawl, Tempo, Kompas, TED, BPPT, TALPCo, Frog Storytelling).
- **Appendix C: Pre-Training Hyperparameters.** **Table 20** shows the exact hyperparameter configurations for IndoBERT BASE, LARGE, and IndoBERT-lite BASE, LARGE (including attention probs dropout, hidden act, embedding size, hidden size, initializer range, intermediate size, max position embeddings, num attention heads, num hidden layers, vocab size, etc.).
- **Appendix D: Fine-Tuning Hyperparameters.** **Table 21** shows the hyperparameter configuration used in the fine-tuning process of each baseline model (batch size, number of layers, epochs, learning rate, early stop, gamma, max norm, seed).
- **Appendix E: Extensive Experiment Results.** **Table 22** shows the full results of all experiments conducted in the IndoNLU benchmark, detailing the Learning Rate (LR), Number of Layers, Parameters, and F1 scores for every single model variation across all 12 tasks (Classification and Sequence Labeling averages included).
