---
layout: post
title: "Leveraging AI to quickly prototype APIs"
date: 2025-04-14
author: "Tim Maguire"
categories: blog
---

I use AI tools daily for everything from web searches to finding recipes to prototyping APIs. While powerful, these tools often require repeating the same context multiple times for similar tasks. This is where Custom GPTs in ChatGPT excel. These specialized AI assistants are trained on custom instructions and knowledge for specific tasks. Their purpose is to create focused, task-specific versions of ChatGPT that include:

- Custom instructions and knowledge that define the GPT's expertise and behavior
- Specific conversation starters to guide users toward intended use cases
- Pre-defined constraints and guidelines that ensure consistent outputs

This allows organizations and individuals to create AI assistants optimized for specific workflows, rather than relying on the general-purpose ChatGPT model. These specialized assistants deliver more accurate, relevant, and consistent responses for their intended use cases.

Below is a framework for creating your own Custom GPT that follows Product Management best practices, think of it as writing a PRD for your Custom GPT. I'll then demonstrate how I used this framework to build my own OpenAPI Generator.

## Framework

There are five attributes that go into customizing a GPT:

**Persona:** This is who you want the custom GPT to behave as, similar to a persona in Product Management. The persona depends on your target users and the GPT's purpose. For example, a GPT with an API architect persona will provide different output than one designed for sharing recipes and cooking tips.

**Context:** This is the "why." The context provides the critical foundation for the Custom GPT by outlining the problem being solved and providing necessary background information.

**Task:** The task describes what the Custom GPT will actually do. Will it perform calculations? Create recipes? Generate API descriptions? These are the functional requirements that define what the GPT must do to address user needs.

An additional element of the task portion is "Chain of Thought Reasoning." This breaks down the task into digestible step-by-step operations. For example: Step 1: introduce yourself, Step 2: request task details from the user, Step 3: ask clarifying questions, Step 4: summarize the main points, Step 5: generate clear practical action items.

**Output:** This section defines the Custom GPT's output format and style. Should it be a file, image, PDF, or code? It also determines the tone the GPT should use when answering questions.

**Constraint:** Think of constraints as there requirements of a PRD. For a Custom GPT, these are the limitations or boundaries of the response.  For example, topics or subjects to avoid, such as technical jargon or political topics or specific guidelines to follow.

## Implementation

Now that we have our framework, let's build a Custom GPT. In this example, we'll create an OpenAPI generator that takes in the business rules and use cases for an API and outputs an OpenAPI API description.

**Persona** - The OpenAPI generator assumes the persona of an API Architect. Adding specific details enhances the use case.  For example, an API Architect at an Enterprise FinTech company responsible for API design and execution across the organization. For this demonstration, we'll keep it generic.

**Context** - Our goal is to design an API description file using the OpenAPI 3.1 specification, following provided business rules and use cases.

**Tasks** - Here's our step-by-step task list. We'll make these steps clear and engaging to create a more personable GPT:

Step 1: Begin with a self-introduction

Step 2: Rather than immediately creating the API description, first ask clarifying questions about the business use cases

Step 3: Based on initial feedback, determine whether additional clarification is needed

Step 4: Inquire about API functionality—whether it's read-only or supports CRUD operations—and explore security requirements

Step 5: Once requirements are clear, generate the API description in OpenAPI 3.1.0

**Constraints** - This section outlines the governance rules and API style guide. It specifies which OpenAPI attributes to use or avoid. While these constraints remain generic for this example, they incorporate standard API design best practices. This is where you would add your organization's specific style guide and API standards.

Here is a partial list:

- All requests and responses must use JSON.
- Use UUIDs throughout for all resource identifiers.

Naming Conventions:

- Use clear, descriptive names and follow conventions from schema repositories like [schema.org](http://schema.org)
- Adhere to industry standards from RFCs, IANA, and JSON Schema for naming and definitions

Security:

- Implement authentication for all endpoints. When the authentication method isn't specified, ask users to choose from OpenAPI-supported schemes (such as API Key or OAuth 2.0)
- Follow OWASP API Top-10 security best practices
- Include 401 (Unauthorized) responses for all authenticated endpoints

Schemas:

- Define reusable schemas in the components/schemas section and reference them throughout
- Provide examples for all schemas, including component schemas
- Include clear descriptions for schemas and their properties

Parameters:

- Implement pagination for all collection endpoints
- Provide examples for all parameters, including those in components

Status Codes:

- Use appropriate success codes: 200, 201, 202, and 204
- Include 404 status codes for missing resources
- Add 401 status codes for authentication failures
- Use 500 codes for server errors
- Implement 429 codes for rate-limiting scenarios

Errors:

- Document all possible error scenarios
- Format error responses using Problem Details as specified in [RFC 9457](https://www.rfc-editor.org/rfc/rfc9457.html)

Rate Limiting:

- Add standard rate-limiting headers (X-RateLimit-Limit, X-RateLimit-Remaining, Retry-After) for successful responses (200, 201, 202, 204)
- Include rate-limiting headers for all 4XX responses (400, 401, 403, 404)

**Output:** 

The output will be a valid API description following the OpenAPI 3.1 specification. Here are the specific formatting requirements:

- Include detailed descriptions for all components, including endpoints, operations, responses, parameters, schemas, and any nested elements within components.
- Each header must include either a content or schema definition.
- Categorize API endpoints using both global and operation-specific tags.
- Include a populated "tags" array in the OpenAPI object.
- Provide a detailed, non-empty description field for each operation.
- Eliminate duplicate keys in the JSON output—avoid using the same keyword (like "type") multiple times within a single property definition.
- For nullable properties, express them as "type": ["string", "null"] rather than using the nullable keyword. This ensures proper type definition without duplicate declarations.
- The Info object must include:
    - A complete "contact" object with "name," "url," and "email" fields
    - A "license" object with a "url" field
    - A "servers" object with a non-empty array
- Write a clear, descriptive summary for each operation
- Assign a unique operationId to each operation

## Knowledge

In the Knowledge section of the GPT, upload the complete OpenAPI 3.1.0 and JSON Schema specifications. I downloaded the specifications as PDFs from [OpenAPI](https://spec.openapis.org/oas/v3.1.0.html) and the [JSON Schema](https://json-schema.org/draft/2020-12/json-schema-core) websites. This ensures the GPT can access the full specifications and generate API descriptions that comply with them. Remember to update the knowledge base whenever these specifications change.  If your company has documented style validation rules, provide those here as well.

## Conversation Starters

While conversation starters are optional, they help users quickly learn how to use the GPT effectively. Include both simple prompts to test the clarifying questions feature and more detailed examples. Here are mine:

- Build a pet store API
- Build a Dad Joke API
- Design a simple blog management API with small schemas. Include GET, POST, PUT, and DELETE methods only. Secure the API with an API Key.
- Design a Task Management To-Do list API, each task will have an assignee and due date. The assignee will close each task upon completion.

## Next Steps

After setting this up, start testing by creating OpenAPI description documents. You can either build your own GPT or [use mine](https://chatgpt.com/g/g-67f43c5208fc8191b6461ac83f1d9365-tim-s-openapi-generator). Validate the API description docs to verify they're valid JSON and comply with the OpenAPI 3.1 specification. If you encounter specific issues with the APIs, return to the GPT instructions and refine the task or constraints to address them. Don't expect perfection on the first try—it usually takes some iteration.

With your OpenAPI description in hand, numerous possibilities open up: validating, mocking, testing, building, and deploying your API. In future posts, I'll explore these aspects and how to automate them using this Custom GPT.