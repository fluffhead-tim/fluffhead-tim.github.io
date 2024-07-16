---
layout: post
title:  "API Futures | Building the Platform Engineering MVP"
date: 2024-07-16
author: Tim Maguire
---

This is the thrid post in my Platform Engineering Paves the Path for API Management and Governance series.  In the [first post](/2024/01/09/api-futures-platform-engineering.html), I provided a high-level overview of Platform Engineering and how it can help API governance.  In my [second post](/2024/01/25/platform-engineering-maturity-model.html), I shared a Platform Engineering Maturity Model.  This post focuses on how a Platform Product Manager can get started building a Platform within an organization.


## Just Build an MVP

Many articles I have read that make the case for Platform Engineering always contain a “Build an MVP” or TVP - “Thinnest Viable Platform” step.  While well-intentioned, I’ve always struggled with exactly what should go into that MVP.  Do you start by building CI/CD pipelines? Layering in monitoring and observability functionality? Are there security issues such as access control to address?  Any of these capabilities and countless others would make for a viable prototype of your platform.  There are so many options and paths to go down, just picking one could be the hardest step.  Additionally, suppose the Platform Product Manager polled each developer or executive on what functionality they’d want to see in a Platform. There’d be just as many opinions on what to include and we’d be stuck in an analysis paralysis loop.  We need to find the one capability that will move the needle for the larger organization as a whole and aligns with the needs of both development and executive teams.


### Align with Development Teams

As a product leader, it’s our responsibility to work with developers to understand their key pain points and the things holding them back.  Many times, these aren’t “blockers” meaning they don’t have a workaround, but really “anchors.”  Developers can still get their job done, however the anchor is adding friction and holding them back.  

In order to gather qualitative data from the teams, the platform product manager not only needs to be embedded within the platform development team but the rest development teams across the organization.  Attend their sprint demos to get an understanding of what they are working on, their accomplishments, and things that may be holding them back.  Review their retrospectives, keying in on themes for improvements.  Additionally, build up personal connections with other developers and developer team leaders.  These relationships will help uncover some of their biggest pain points without the political sugarcoating.

Quantitative data comes from reviewing bug reports, monthly or quarterly say/do metrics, and for more mature organizations, DORA metrics.


### Developing Executive Allies

Product and Engineering leaders must recognize executives’ broad focus and competing priorities. A typical mistake product leaders make is focusing too much on their own needs, thinking, “If I’m successful, my executive team will be successful.”  This is better framed as “What are the executive’s goals, and how can I best support them?”

Executives' context switches throughout the day, and one of the first mistakes you can make is assuming that your ask is their most pressing need.  Execs have sales, product, HR, fundraising, and finances on their mind every day, so there’s not enough room to consider the nuances of a platform engineering team and how it’ll help the overall API program.

With that in mind, it’s best to understand what’s most important to the executive team.  Are they concerned about software quality?  Time to market?  Developer productivity?  Reducing costs?  Take the time to understand what keeps the executives up at night regarding software delivery.


### Building the MVP

Once we have feedback and data from developers and executives, we are ready to build the first iteration of our platform.  I like to gather feedback on stickies and group them by category, looking for clusters of pain points and address these first.  Below are some common groupings that a platform engineering team will need to address along with common solutions and outcomes for each category.  This framework will help build your platform story and set the team's purpose and charter toward the platform MVP.

Now it’s time to build software, build a platform proof of concept over a couple sprints to show progress honing in on your key metrics and how they align to the organization’s needs.  Gather the internal feedback and continue to iterate.  This POC will prove your platform story and that the platform engineering team will lift the capabilities of the entire development team.


<table>
  <tr>
   <th>Type
   </th>
   <th>Executive Concern
   </th>
   <th>Development Team Concern
   </th>
   <th>Solution
   </th>
   <th>Outcomes
   </th>
  </tr>
  <tr>
   <td>Security and Compliance
   </td>
   <td>Data security, regulatory compliance
   </td>
   <td>Security vulnerabilities, compliance
   </td>
   <td>Adding automated tooling for vulnerability scanning, better access controls, and automated compliance checks
   </td>
   <td>Protects sensitive data, ensures regulatory compliance, and enhances your security posture
   </td>
  </tr>
  <tr>
   <td>Customer Satisfaction
   </td>
   <td>User experience, customer feedback
   </td>
   <td>Bug tracking & resolution, rapid feedback loops
   </td>
   <td>Add monitoring and logging systems to track performance, errors, and user behavior.  Integrate feedback tools
   </td>
   <td>Transparency into system health, allows for quick issue identification and resolution, and gathers insights into improvement
   </td>
  </tr>
  <tr>
   <td>Time to Market
   </td>
   <td>Speed of delivery, release frequency
   </td>
   <td>Release management and deployment automation.
   </td>
   <td>Implement CI/CD pipelines, automated testing, and deployment tools
   </td>
   <td>Speeds the release cycle, reduces manual errors, and ensures consistent deployment practices
   </td>
  </tr>
  <tr>
   <td>Quality and Reliability
   </td>
   <td>Defect rates, system uptime and availability
   </td>
   <td>Code quality, testing and QA coverage
   </td>
   <td>Provide tools for automated testing, static code analysis, and continuous monitoring
   </td>
   <td>Improves code quality, reducing defect rate, catches bugs early, and ensures adherence to coding standards
   </td>
  </tr>
  <tr>
   <td>Scalability and Flexibility
   </td>
   <td>Scalability, flexibility
   </td>
   <td>Performance, optimization, scalability
   </td>
   <td>Provide infrastructure that can scale automatically based on demand and tools to monitor application performance
   </td>
   <td>Ensures the application can handle increasing loads and maintains optimal performance
   </td>
  </tr>
  <tr>
   <td>Innovation and Competitive Edge
   </td>
   <td>Innovation rate, market position
   </td>
   <td>Rapid feedback loop, bug tracking
   </td>
   <td>Provide feature flagging tools, A/B testing, and quick rollback mechanisms to enable controlled rollouts and experimentation
   </td>
   <td>Allows for safe deployment of new features, rapid iteration based on user feedback, and data-driven decision-making
   </td>
  </tr>
  <tr>
   <td>Team productivity and morale
   </td>
   <td>Developer productivity, employee satisfaction
   </td>
   <td>Collaboration and communication, knowledge sharing
   </td>
   <td>Integration and collaboration platforms and maintain centralized documentation
   </td>
   <td>Facilitates better communication, knowledge sharing, and alignment among team members.
   </td>
  </tr>
</table>