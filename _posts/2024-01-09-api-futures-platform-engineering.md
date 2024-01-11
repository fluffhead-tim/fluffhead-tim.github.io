---
layout: post
title:  "API Futures | Platform Engineering Paves the Path for API Management and Governance"
date: 2024-01-09 
---

>_When brainstorming topics for the [API Futures](https://matthewreinbold.github.io/APIFutures/index.html) initiative, one theme that stood out was Platform Engineering and its benefits to an organization.  I kept reading and listening to podcasts on how Platform Engineering and DORA metrics streamline software development and delivery.  As I took notes and learned more about this topic, I decided to roll this into the API Futures project and start a series on how Platform Engineering streamlines API management and governance.  This first post introduces the problems a Platform Engineering team can solve and provides a sneak peek of the series.  Hope you enjoy this post and return for the rest of the series. I look forward to feedback to keep the discussion going._

APIs are the building blocks of software.  They facilitate communication and data exchange between various software applications and services and are critical to any organization. However, as organizations create more APIs to meet their business needs, their API ecosystems become complex and challenging to manage. This leads to inconsistent APIs, slower and more complex API development processes, and increases the risk of security flaws in your APIs.  Organizations need a consistent API design and development process to combat this.  It’s vital to reign in this API sprawl, where APIs grow organically with different implementations. This is where a Platform Engineering program can help drive governance and oversight in the API development process.  

Building a Platform Engineering program requires strategic practices and patterns to streamline enterprise software delivery.  These initiatives originated at companies like Google and Netflix, blessed with enormous developer teams.  There, the Platform Engineering (PE) team would provide tools, workflows, and best practices to internal developers.  This enabled developers to focus on building applications and APIs that deliver direct business value without worrying about managing infrastructure, Kubernetes (K8s) configurations, or knowing which cloud to deploy to.

Developers like solving hard problems. However, routine tasks such as finding documentation and knowing if that documentation is up to date or figuring out the proper configuration of a K8s cluster should not be complex problems. When these tasks become difficult, developer fatigue and burnout lead to lower-quality APIs, inefficient processes, employee churn, and security exposure. We aim to improve the developer experience by providing the tools developers need to reduce this friction and the additional cognitive load on the developer.

This practice is sometimes called a Paved Path, meaning the platform engineering team provides a paved path for developers to deliver business value quickly.  [Gartner](https://www.gartner.com/en/articles/what-is-platform-engineering) forecasts that 80% of software organizations will have a platform team by 2026. According to [Puppet](https://www.puppet.com/resources/state-of-platform-engineering), organizations that have already instituted a platform have seen an increase of 68% in software delivery.  I like envisioning software releases as boring non-events; they just happen, and no one is paged; a platform team can help achieve this. 

A well-designed platform focuses on four fundamental principles:



* Self-Service Empowerment
* Developer Experience (DX)
* Product Mindset
* Constant monitoring and feedback

However, setting up an API platform comes with its challenges. we must:



* Balance openness and security to ensure security standards are met with minimal friction
* Ensure scalability to accommodate increasing API usage while versioning APIs and backward compatibility
* Leverage API governance and documentation to maintain consistency across APIs 

This series aims to provide a detailed exploration of API Platform Engineering. Along the way, we’ll:



* Build an API Platform Maturity Model, which can be used to benchmark your organization
* Getting started on the platform engineering journey, starting with building the business
* Review team topologies
* Develop and prioritize a roadmap for implementation,
* Finish with monitoring and gathering feedback for future iterations.
* Review case studies of successful and unsuccessful implementations

By the end of this series, my goal is that you understand what goes into building a thriving platform team, providing valuable insights into its components, best practices, and the path to successful implementation, paving the way for a best-in-class API program.

Thanks for reading.  I would love to hear from you if you have any feedback.

> _This post is part of [API Futures](https://matthewreinbold.github.io/APIFutures/index.html), a community-led, collaborative effort to identify the top challenges and opportunities facing the API economy in 2024. For other perspectives, read the articles by different authors listed [here](https://matthewreinbold.github.io/APIFutures/index.html)._


[Home](/)
