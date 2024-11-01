---
layout: post
title:  "Building a Governance Framework"
date: 2024-11-01
author: Tim Maguire 
---

In a previous [post](/2024/09/10/api-product-manager-onboarding-guide.html), I outlined a high-level plan for onboarding as a new API Product Manager responsible for an organization’s API governance.  We focused on meeting different stakeholders and gathering the information needed from each team.  As you have begun compiling that data, we’ll make it actionable in this post.  

This post provides an example of an API governance framework and demonstrates how it can be applied to an organization.  Keep in mind that a governance framework is a living set of guidelines and standards that evolve as an organization grows and moves along the [API Platform Maturity Model](/2024/01/25/platform-engineering-maturity-model.html). A start-up will have very different requirements from an established enterprise organization in a highly regulated industry such as financial services.  Evaluate your organization against the API Platform Maturity Model and determine which components best fit your organization.

The high-level steps for building an API Governance Framework include:

1. Defining the Objectives and Goals
2. Engaging stakeholders
3. Forming a Cross-Functional API Governance Team
4. Auditing and Mapping the Existing API Landscape
5. Defining and Documenting Governance Policies


## Defining the Objectives and Goals

When implementing an API governance framework, it is crucial to set clear, measurable goals that align with customers’ needs as well as overall business and technology goals. For example, a goal could be to reduce API implementation lead time by 20% over the next quarter. This specific metric will serve as a focal point for all stakeholders, increasing accountability and driving progress.


#### Developer Experience



* **Objective:** Streamline the development process, reduce friction, and provide clear guidelines for API design, testing, and deployment.
* **Goal:** Reduce API implementation lead time by 20% in 3 months.


#### API Consumers



* **Objective:** Ensure consistent, reliable, and secure APIs for both internal and external consumers.
* **Goal:** Enhance API usability and security to improve consumer satisfaction and trust measured by quarterly surveys.


#### Feedback Loops



* **Objective:** Establish channels for API developers and consumers to provide feedback on the framework and suggest improvements.
* **Goal:** Implement a feedback mechanism that captures and addresses 80% of user suggestions within the quarter.


#### Documentation & Support



* **Objective:** Provide comprehensive support for developers to understand and quickly implement the framework within their existing workflow.
* **Goal:** Achieve a 90% satisfaction rate in developer support services by the end of the quarter.

Draft the objectives and goals into an API Governance Mission Statement.  The mission statement should be unique to your organization and contain clear targets specific to the current situation.  It might be a roadmap for moving along the API Platform Maturity Model or your organization might have a mature API program and there are regulatory requirements you must meet.  For instance, the organization might be in a regulated industry such as finance or healthcare and therefore must meet specific regulatory requirements such as HIPAA, FHIR, or GDPR.  Other organizations may have had a security incident and want to put tighter controls around their security and risk management.  The framework could focus more on internal factors such as accountability and transparency by establishing clear ownership and visibility into an organization’s APIs.  Use it as the north star when implementing the framework.  


## Engaging stakeholders

I won’t get into too much detail here, as I’ve outlined how to engage stakeholders in a [previous post](/2024/09/10/api-product-manager-onboarding-guide.html).  However, as you start to think about the framework, socialize your mission statement draft as you meet with stakeholders.  Getting their feedback, ideas, and buy-in early will be critical to the success of the program.  Ensure to use efficient communication channels to streamline engagement in a transparent manner, not all meetings need to be face-to-face.  I have found that setting up a public Slack channel, open meetings, and a wiki page is a good starting point for transparency.  Publish the mission statement, important updates, milestones and meeting recordings to the wiki page.  Then, provide updates to the larger organization through all-hands meetings.


## Forming a Governance Team

I generally advise against creating ad hoc committees, as they might lead to groupthink or are not a top priority for the team members, however, as you meet with stakeholders, identify enthusiastic partners who will become net promoters of the governance program.  They will be vital in winning over the rest of the organization when rolling out the framework.  I have found that when implementing any sort of change, one third of organization members are usually on board and one third are detractors of the change.  We want to focus on converting the undecided third to the promoter side.  The team should have a representative from each department and each team member should have a specific role and responsibility.  If someone raises objections, listen to them and show empathy, work their feedback into the goals and mission statement.  When I was part of an API governance program, it was some of the most rewarding work I did at the company.  I was also able to meet and learn from team members with whom I don’t necessarily cross paths 


## Documenting Existing APIs

I touched on this briefly in a [previous post](/2024/09/10/api-product-manager-onboarding-guide.html), however as you start to catalog existing APIs quickly review each one for patterns and potential compliance issues. This is not necessarily the time to resolve issues; instead, simply note potential issues such as API versioning, naming conventions, and other elements that may need addressing.  Some of these issues may not be immediately fixable.  This audit provides a foundation as you begin defining governance policies.  In large organizations where APIs grow organically, it’s likely that there will be inconsistencies from API to API.  Rather than judge or question implementation, acknowledge that the team building the API had the best intentions and made the best decision possible with the data they had at the time.  Start to document these issues and as you work with the governance team, you will standardize these APIs.


## Defining and Documenting API Governance Policies

Based on stakeholder input and the findings from the API cataloging, start to define a set of policies and standards that will form the foundation of the governance framework.  Some of these may be driven from outside factors such as compliance and regulatory requirements, while others will be driven from internal best practices.  Similar to how an organization has branding guidelines, think of the API as an extension of your organization’s digital brand.  You want a consistent developer experience for all consumers of your APIs and the framework is where you’ll document it.  

With the team, identify three pressing issues that can be immediately fixed, document them, and work with the API development teams to put these on their backlogs.  Defining overly rigid policies and standards can stifle innovation and flexibility.  In other words, avoid creating policies for issues that do not exist.  Starting with some foundational, non-intrusive policies will help establish a strong baseline of API quality and consistency without causing disruptions or breaking changes.  Here are some examples where you could start:



* **API Documentation Completeness and Accuracy**: Ensure that every REST API is fully documented with an OpenAPI definition.  Include descriptions, examples, error codes, limits and query parameters.  This will immediately reduce support requests and promote better adoption of the APIs.
* **Use Consistent Status Codes and Error Handling**: This gets back to my API branding note, having each endpoint return consistent status codes and error messages will provide developers with a predictable implementation.
* **Require Consistent Authentication and Authorization, such as OAuth 2.0**: Not only does this improve API security, but makes it easier for developers to understand access requirements leading to a better overall developer experience.

Each of these policies can be easily instrumented using tooling such as Spectral and built into a developer’s workflow.  After a while, these policies will become second nature to all API developers within the organization.

I will dig into more specifics and provide examples of governance policies in a future post.  I love to talk about this so let me know what some of your expeeriences have been when implementing a governance framework.
