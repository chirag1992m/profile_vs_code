---
slug: 'cs-trends-h1-2024'
title: 'CS Trends 2024'
subtitle: 'From the lens of scientific publications'
category: 'CS Yearly Trends'
date: '2024-07-07'
cover_image: '/blog_images/cs-trends-h1-2024/cover_image.png'
cover_image_prompt: 'Cited from https://www.informationisbeautifulawards.com/showcase/2333-map-of-computer-science'
---

# Introduction

As we move into the second half of 2024, it's fascinating to explore the current trends and future directions of the technology industry, particularly in computer science. This ever-evolving field draws from diverse disciplines such as physics, mathematics, and statistics, encompassing both theoretical and applied branches. From the tiniest transistors in computer chips to the vast high-bandwidth fiber networks that power our information age, the scope of computer science is incredibly vast.

A special shoutout to [Dominic Walliman](https://www.informationisbeautifulawards.com/showcase/2333-map-of-computer-science) for his inspiring cover image that beautifully maps out the numerous possibilities within computer science.

In this article, I'll delve into recent scientific publications to uncover what's currently hot in the field. While we might have some ideas about the prevailing trends, it's insightful to reflect on the perspectives emerging from the research community. This analysis marks the beginning of what I hope will be an annual deep dive into the evolving trends in computer science.

# Exploration on Scientific Publications

Scientific papers are published across various venues, including conferences, workshops, journals, university repositories, and pre-print servers. Accessing these papers can sometimes be challenging due to the dispersed nature of these publication sites and access restrictions. While some argue that any information on the internet is fair game, I prefer to use freely accessible resources to avoid potential legal pitfalls.

For this analysis, I will utilize data from [arXiv.org](https://arxiv.org/), a pre-print server widely used by computer science researchers. ArXiv allows researchers to share their work before it undergoes formal peer review, offering a rich source of the latest scientific information. Additionally, arXiv has made the metadata of its [publications available](https://info.arxiv.org/help/api/index.html) on [Kaggle.com](https://www.kaggle.com/datasets/Cornell-University/arxiv), a platform for data science competitions. This dataset provides a comprehensive view of research papers, making it easier to analyze the vast array of publications in computer science.

To help you explore the arXiv research paper metadata, I’ve created a starter notebook available on my [GitHub repository](https://github.com/chirag1992m/arxiv-data-exploration/tree/main/trend_exploration). The dataset contains over 2.5 million published papers across a [wide variety of fields](https://arxiv.org/category_taxonomy). It includes detailed information such as author names, paper titles, fields and sub-fields, abstracts, version histories, and last updated dates.

By examining the number of papers published over the past few years, we can observe some interesting trends. Btw, you can play around with these interactive [plotly](https://plotly.com/) graphs:

```plotly
/blog_images/cs-trends-h1-2024/research_per_year.json
```

For instance, there was a significant spike in publications around 2015. Although there was a slight dip afterward, the number of papers has steadily increased, indicating continuous progress in many scientific fields.

Furthermore, a paper can belong to multiple fields, such as a machine learning paper that fits both computer science and mathematics. Considering the possibility of "double counting," we can analyze the number of papers in each category individually. To account for the double counting of papers belonging to more than one category, we can also look at the co-occurrence matrix between fields.

```plotly
/blog_images/cs-trends-h1-2024/stacked_category_research_per_year.json
```

```plotly
/blog_images/cs-trends-h1-2024/category_co_occurence.json
```

These visualizations help us understand the areas experiencing the most growth and the interdisciplinary nature of modern research, with computer science playing a pivotal role. Here are some key observations:

1. The number of research papers has been growing, especially in the category of Computer Science. Since 2022, papers in Computer Science have surpassed Physics in generating published research.
2. Computer Science and Mathematics have the most common papers, with Physics and Mathematics being the second most common pairing.
3. Computer Science impacts many other fields, with numerous papers published in conjunction with other disciplines.
4. Mathematics and Computer Science have the most common research papers, followed by Mathematics and Physics.

## Computer Science

To delve deeper into Computer Science, we can filter the papers by their sub-fields. The following visualization shows the percentage of research papers in each sub-field over time:

```plotly
/blog_images/cs-trends-h1-2024/stacked_cs_research_per_year.json
```

```plotly
/blog_images/cs-trends-h1-2024/cs_categories_per_year_line.json
```

In recent years, four main categories have shown significant growth, completely overshadowing other areas:

-   Machine Learning
-   Computer Vision and Pattern Recognition
-   Computation and Language
-   Artificial Intelligence

We are witnessing a renaissance in **Artificial Intelligence**, primarily driven by advancements in **Machine Learning**, particularly _deep learning_. Although these categories are distinct, they share the common goal of instilling human-like _intelligence_ in machines. The volume of research being conducted and published in these areas is substantial, reflecting the rapid progress and widespread interest in these technologies.

To illustrate the current trends, a word cloud generated from the abstracts of papers in these fields highlights some of the hottest topics of interest. Interestingly, the phrase "experimental results" appears frequently, indicating a strong emphasis on empirical research over theoretical work. This aligns with the sentiment that, despite its successes, deep learning remains somewhat mysterious and not fully understood by even the experts.

![image](/blog_images/cs-trends-h1-2024/wordcloud.png)

# Closing thoughts

The exploration of recent trends in computer science research reveals a dynamic and rapidly evolving field. The increasing number of publications, particularly in areas like Machine Learning, Artificial Intelligence, Computer Vision, and Computation and Language, underscores the significant advancements and growing interest in these domains. It is clear that we are in the midst of a renaissance in Artificial Intelligence, fueled by Machine Learning breakthroughs. The substantial volume of research being published in these areas points to a future where intelligent systems become increasingly integrated into various aspects of technology and our daily lives.

We'll dig-deep into some of the most-common words highlighted by the wordcloud in the next post. This annual deep dive into the evolving trends in computer science sets the stage for future analyses. By continuing to monitor these developments, we can gain valuable insights into the direction of technological progress and its potential impact on society.

Thank you for joining me on this exploration. I look forward to sharing more findings in the coming years as we witness and the exciting advancements in computer science.
