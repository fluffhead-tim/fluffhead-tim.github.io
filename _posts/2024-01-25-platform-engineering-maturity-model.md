---
layout: post
title:  "API Futures | Platform Engineering Maturity Model"
date: 2024-01-25
author: Tim Maguire
---

This is the second post in my Platform Engineering Paves the Path for API Management and Governance series.  In the [first post](/2024/01/09/api-futures-platform-engineering.html), I provided a high-level overview of Platform Engineering and how it can help API governance.  In this post, we’ll dive into a Platform Engineering Maturity Model.

Organizations use a maturity model framework to assess and measure the capabilities of a process or program to gauge where they are today and plot a course or roadmap of where they want to go by identifying specific areas in which to invest.  A traditional maturity model consists of four phases: Initial, Managed, Defined, and Optimizing.  


<table>
  <tr>
   <th>Phase
   </th>
   <th>Description
   </th>
  </tr>
  <tr>
   <td>0 - Initial
   </td>
   <td>Ad hoc, unpredictable
   </td>
  </tr>
  <tr>
   <td>1 - Managed
   </td>
   <td>Defined process in some areas
   </td>
  </tr>
  <tr>
   <td>2 - Defined
   </td>
   <td>Defined process for organization, proactive
   </td>
  </tr>
  <tr>
   <td>3 - Optimizing
   </td>
   <td>Processes are measured, controlled, and focus on improvement
   </td>
  </tr>
</table>


Let’s look at these phases within the context of a platform engineering team.


### Phase 0 - Initial or Pure Chaos.

Developers might be productive in pockets, but it’s inconsistent and unpredictable.  Individual teams within the organization may have different processes and rigor regarding software development and delivery.

Teams don’t have great insights into how the overall system performs; triaging and resolving system outages is more reactionary.  After an incident, the team documents the root cause. However, they tend to put the solution on an ambiguous backlog with no apparent owner rather than fixing it immediately before they move to the next problem.   

Because there is no process, API designs – if there are any – become inconsistent from API to API and team to team.  Developers implement interfaces differently from team to team and even from API to API within the same team.  When designing an API, a team might spend excessive effort components that could be reusable, such as pagination.  Teams might reimplement an existing API slightly differently because there is a lack of API documentation and discovery.

Here are some critical steps an organization can take to move up to the Developing phase:

* Identify a Platform Team – ideally, this should be a team of developers focused solely on the platform and improving the development experience.
* Work with Stakeholders to identify priorities and concerns – the platform team should interview nearly every developer and product development leader to understand the key things keeping them up at night.  
* Prioritize and Build a Thinnest Viable Product (TVP) – based on the feedback, identify the critical problems to solve and map them to outcomes.  This includes defining success criteria in the form of metrics.
* Socialize outcomes – it’s crucial to celebrate wins and share the TVP and success outcomes with the rest of the organization.  This will build credibility within the organization, which is needed for later phases.

Example:  Developers start grumbling about their tooling or a process within the organization.  A platform team member interviews developers to understand their pain points, how many developers this impacts, and the pain frequency.  With this quantifiable data, the platform team can work on solving these pain points as the first iteration of the TVP, paving their path to the next phase - Managed.


### Phase 1 - Managed or Controlled Chaos

The TVP is in place, and a platform team exists.  The TVP might vary from a simple wiki with some process documentation to a list of identified services and their documentation.  The platform team owns the ambiguous backlog from phase 0. However, there isn’t a clear roadmap or plan to execute on the roadmap.  It can be best described as a list of divergent technical debt issues to solve.

A delicate balance must be struck here as the adoption of the TVP is limited to a small segment of teams or use cases.  Some teams might view this as a success, while others that don’t yet leverage the benefits might see the platform team as overhead until their use cases are covered.  The platform team will start introducing more tooling to the TVP (at this point, we can retire the term) to cover these additional use cases, bringing more teams on board the platform.

In terms of an API program, organizations at this phase will become more formalized in their API design and development processes.  The platform team introduces internal or third-party tooling to the ecosystem to support API use cases.  The platform provides OpenAPI templates, scaffolding, and documented standards to jump-start API design, development, and testing.

Moving from this phase to the Defined phase requires a push-to-pull paradigm shift within an organization, meaning developers will start looking to the platform team to solve many of their problems.  Key steps to move to the next phase include:

* Build out the Platform Team – consider adding product managers, solution architects, and evangelists.
* Use case expansion – identify bottlenecks that can be automated, such as CI/CD.
* Systematic feedback – regular surveys and conversations rolled into the roadmap.
* Transparent roadmap – the platform product manager must share feedback and the roadmap with the rest of the development team and key stakeholders.
* Software delivery metrics – define, measure, and report on software delivery performance using DORA metrics.

Example:  The platform team wants to capture more data automatically, for instance, lead time, so they instrument the build process.  They document and provide scripts for all the development teams to start collecting this data.  Two issues arise: 1) differences in builds from team to team prevent the scripts from being fully adopted, and 2) there are critical steps in the lead time process – PR reviews – that are not being fully calculated in this metric.  As the platform team looks to address these issues, they will start the journey to the next phase – Defined.  


### Phase 2 – Defined or Scaling Beyond the Chaos

There is no more chaos at this phase, and the platform begins to scale across the organization.  The organization manages the platform like its external-facing products – staffed with an entire product team, published roadmap, and KPIs regularly reported to the organization along with standard financial metrics.  

Development teams choose to use the platform's capabilities because of its value and less because of organizational mandates.  Developers quickly spin up preconfigured environments and infrastructure based on their needs, knowing these common toolsets are uniform across the organization.  Updates made to test environments by the platform team are pulled into the new environments.

For APIs, governance and standards are in place for common naming conventions, interfaces, and patterns.  Guardrails are automated and built into a developer workflow.  Developers only need to think about the capabilities of their APIs rather than the overall design, as much of the boilerplate definition is already there.

Steps to the final phase, Optimizing:

* Platform adoption – internal and external teams besides engineering begin to leverage the platform.
* Organizational buy-in – DORA metrics become the organization's everyday language and are referenced just as financial metrics.
* Decentralized platform ownership – the platform team still exists; however, additional capabilities are built and contributed back to the platform for organizational-wide adoption.

Example: Even with OpenAPI templates, developer teams need help to design APIs as much of their cognitive load is spent learning the intricacies of OpenAPI and ensuring their API designs meet the organizational standards.  The platform team builds tooling that reduces the designer’s exposure to OpenAPI and automates the design to adhere to the organization’s API standards.  Now, API designers only need to think about the use cases of the API and not additional tooling such as linters.  As more and more API designers use this tooling across the organization, the path is paved to move to Phase 3 - Optimizing.


### Phase 3 - Optimizing or “The Holy Grail”

In the most mature phase, Optimizing, the platform becomes part of the larger development ecosystem and is a crucial differentiator for the organization.  Note the “-ing” at this phase; organizations never really leave this phase as they continue to evolve and iterate on their platform as new products and technical capabilities are introduced.  

Organizations in this phase provide self-service capabilities for developers. This gives the development team the autonomy to make decisions while providing the required organizational guardrails – security, compliance, costs, and standards.  This combination enables developers to focus on delivering innovation and business value as quickly as possible.

The platform is instrumented for constant feedback and monitoring – the platform team understand the usage patterns and can quickly identify points of friction.  It’s these friction points that continue to evolve and make the platform more robust for the development teams.  This efficiency is realized in delightful experiences beyond ones just built for developers.  For instance, onboarding new users, customers, or partners – tasks that once took heroics and weeks or months of time – are now be automated with a push of a button.

___


My next post will focus on getting executive buy-in for a Platform Engineering effort.  This is the most critical piece in this series, as tech is always the easy part, but getting buy-in and funding are the biggest challenges.

Thank you for reading this far. I would love to hear from you about your experiences and where you think your organization sits on the maturity model. I would also like to discuss how you can move your organization forward.  What are some platform success stories? Failures?  My contact information is in the footer.

___


> _This post is part of [APIFutures](https://matthewreinbold.github.io/APIFutures/index.html), a community-led, collaborative effort to identify the top challenges and opportunities facing the API economy in 2024. For other perspectives, read the articles by different authors listed [here](https://matthewreinbold.github.io/APIFutures/index.html)._


[Home](/)