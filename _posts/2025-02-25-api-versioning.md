---
layout: post
title: "API Versioning"
date: 2025-02-25
author: "Tim Maguire"
categories: blog
---


As a product manager for SaaS applications, making platform updates is relatively straightforward. Features can be rolled out gradually using feature flags to ensure proper adoption and quality, and aspects like migration and versioning typically aren't required. While SaaS documentation needs updating, it's not as critical as updating developer documentation for API changes. In this article, I'll provide a framework for versioning an API and sharing experiences of what has and hasn't worked for me.


## Defining a Versioning Strategy


The first step is establishing a versioning strategy as a policy for all APIs in your organization. There are two perspectives on API versioning: internal (how your API developers think about different versions) and external (how third-party developers interact with your API versions).


A widely adopted approach—and my preferred one—is Semantic Versioning (SemVer) in the `MAJOR.MINOR.PATCH` format. The version number updates based on the type of API change:

- MAJOR - for a breaking change
- MINOR - for new additive features
- PATCH - for small bug fixes

Breaking changes are updates that will cause existing applications to stop working. These include removing endpoints, changing data types, or modifying request/response formats or required fields. Any such change requires incrementing the `MAJOR` version.


For changes to data types or formats, it's often better to create a new endpoint with updated parameters rather than modify existing ones. This preserves existing functionality and lets developers upgrade on their schedule. When taking this approach, mark old endpoints as `deprecated` in your OpenAPI definition, including clear guidance on using the new endpoint. This approach works well with developer expectations too—since many developers associate `MAJOR` version changes with new functionality, using `MINOR` version updates for these changes makes more sense.


When sharing API versions with consumers—your third-party developers—you need a reliable way for them to code against the correct version. Here are several approaches, each with distinct advantages and drawbacks.


### URI Versioning


This is the most straightforward approach and my preferred method. When coupled with SemVer strategy, only the `MAJOR` version of the API appears in the URL. Consumers use the latest version within their specified MAJOR version of the API.


`https://api.example.com/v1`


`https://api.example.com/v2`


This works well because new features and bug fixes can be added to `v1` of the API without requiring any changes on the consumer's end—they continue using the same API endpoint as before.


However, troubleshooting can be challenging when bugs or unexpected changes are introduced in `MINOR` or `PATCH` updates. The consumer's application might break without them realizing the API has been updated. To mitigate this, it's best practice to include the full `MAJOR.MINOR.PATCH` version in the API response header for every call.


### Header-Based Versioning


There are two types of header-based versioning: custom request header and content negotiation versioning. In this approach, API consumers include versioning information in HTTP headers to specify which API version they want to use. This keeps URLs cleaner and moves versioning metadata to the header—aligning with RESTful principles. However, both methods can add complexity to implementation, caching, and discoverability. It's crucial to provide clear documentation so API consumers understand how to call specific versions.


Custom request header versioning uses a dedicated header like `Accept-Version` or `X-API-Version` in each API call. The main advantage of this approach is transparency—consumers know exactly which API version they're calling, making troubleshooting simpler.


Content negotiation versioning uses the standard `Accept` header in the format `application/vnd.example.api.v1+json`. While this offers more flexibility, it requires a more complex implementation on both the provider and consumer side.


### Query Parameter Versioning


Query parameter versioning specifies the API version through a query parameter, like `/api/resource?version=1` or `/api/resource?v=1.2.3`. This approach is straightforward and makes troubleshooting easier, as developers can quickly test different versions by changing the parameter value.


However, this method can be prone to errors when developers fail to update their query parameters or attempt to access undocumented API versions.


This versioning strategy works best for internal APIs where developers understand the patterns and need to call specific versions based on their requirements, without caching concerns. It's generally not recommended for public-facing, production APIs.


### Pros and Cons of Versioning Approaches


| Versioning Approach            | Pros                                                                | Cons                                                             |
| ------------------------------ | ------------------------------------------------------------------- | ---------------------------------------------------------------- |
| **URI Versioning**             | - Simple and intuitive for consumers                                | - Troubleshooting can be challenging with MINOR/PATCH updates    |
|                                | - Allows consumers to use the latest features without changing URLs | - Requires full version in response header for clarity           |
| **Header-Based Versioning**    | - Keeps URLs clean and aligns with RESTful principles               | - Adds complexity to implementation and caching                  |
|                                | - Transparency in version usage                                     | - Requires clear documentation for consumers                     |
| **Query Parameter Versioning** | - Easy to test different versions by changing parameter values      | - Prone to errors if parameters are not updated                  |
|                                | - Simplifies troubleshooting                                        | - Not recommended for public-facing APIs due to potential misuse |


What versioning strategies do you use? Are there any approaches you'd recommend avoiding? I'd love to hear about your experiences.

<iframe src="https://docs.google.com/forms/d/e/1FAIpQLSfakLlpQThG4yJlSgCtj-a3ysCYHTrT3NvJhYTW_wqtFixZLQ/viewform?embedded=true" width="740" height="1232" frameborder="0" marginheight="0" marginwidth="0">Loading…</iframe>