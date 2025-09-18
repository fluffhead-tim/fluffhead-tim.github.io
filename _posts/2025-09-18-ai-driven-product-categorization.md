---
layout: post
title: "AI Driven Product Categorization"
date: 2025-09-18
author: "Tim Maguire"
categories: blog
---

I was working with a client who had  35,000+ individual SKUs in their inventory catalog, and they wanted to automate publishing these products to about 8-10 different online marketplaces. Today it's a laborious manual process involving spreadsheets and lots of copying and pasting of the same fields over and over. 

The sticking point was product categorization. For discoverability and compliance, each marketplace required products to be mapped to its own unique taxonomy. These taxonomies weren't stored in the client's main system, so we couldn't just push them automatically. That kept a human-in-the-loop, slowing everything down and potentially causing errors. 

I couldn't set up a rule-based or template-driven approach to solve this because each marketplace is unique by serving by serving different verticals, from hardware stores to outdoor apparel.  There are also thousands of categories for each marketplace and the category could differ even for the same product from marketplace to marketplace.  A rule-based approach just wouldn't scale to this level and would drift over time.

To solve for this, I started small by running experiments in ChatGPT to see if an LLM could accurately assign categories using only product metadata. Once I saw promising results, I refined the prompt for an automated approach.

Thankfully, each marketplace offers robust APIs to expose their category taxonomies. By feeding that taxonomy hierarchy into the LLM prompt, I was able to traverse each taxonomy tree and find the best fit category for each product. 

Once I was confident with the results, I built a Flask API (with some help from Vibe Coding tools) that could be dropped into the client's existing automation workflow. 

After implementing the API, we eliminated the manual category selection process where staff had to choose from individual drop-downs. This also resolved inconsistencies that occurred when different people categorized similar items differently. With thousands of categories across each marketplace, it's virtually impossible for any individual to memorize them all. The result: streamlined product onboarding, significantly reduced manual effort, and an accelerated process for listing products across multiple marketplaces. This saved the 3-person team over 60 hours per week in manual categorization work, approximately 50% of their total time.

For product managers looking to implement AI in their workflow, I suggest you look for friction, -where are some places where you still need a human-in-the-loop, and ask whether AI or an LLM could take over. Start small, run some experiments in ChatGPT, Gemini, or Claude, then practice your prompt engineering, maybe even using a [framework](/blog/2025/04/14/leveraging-ai-to-prototype-apis.html).

As you build this out, experiment with different models and make trade-offs. Do you want accuracy, speed, or cost efficiency? Usually you can only optimize for two of those. For example, do you want this real-time or could it run as a batch process? How precise do you want the product categorization?  Are you concerned about your cost overruns?  If you're concerned about your cost overruns, I suggest putting strict caps on my monthly usage while experimenting to stay in control. 

If you're interested in learning more about this, either how I built it or how it can solve your product categorization problem, feel free to schedule time with me on [https://calendly.com/tim-tmaguire/30min](https://calendly.com/tim-tmaguire/30min).