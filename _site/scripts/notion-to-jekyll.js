const { Client } = require("@notionhq/client");
const { NotionToMarkdown } = require("notion-to-md");
const fs = require("fs");
const path = require("path");

// Initialize Notion client
const notion = new Client({ auth: process.env.NOTION_TOKEN });
const n2m = new NotionToMarkdown({ notionClient: notion });

async function getPageTitle(pageId) {
  const response = await notion.pages.retrieve({ page_id: pageId });
  return response.properties.title.title[0].plain_text;
}

async function convertPageToMarkdown(pageId) {
  // Get the page title
  const title = await getPageTitle(pageId);
  
  // Convert the page content to markdown
  const mdBlocks = await n2m.pageToMarkdown(pageId);
  const mdString = n2m.toMarkdownString(mdBlocks);
  
  // Create Jekyll frontmatter
  const today = new Date();
  const dateStr = today.toISOString().split('T')[0];
  const frontmatter = `---
layout: post
title: "${title}"
date: ${dateStr}
author: "Tim Maguire"
categories: blog
---\n\n`;

  // Combine frontmatter and content
  const fullPost = frontmatter + mdString.parent;
  
  // Create filename for Jekyll post
  const filename = `${dateStr}-${title.toLowerCase().replace(/\s+/g, '-').replace(/[^\w-]+/g, '')}.md`;
  const outputPath = path.join('_posts', filename);
  
  // Write to file
  await fs.promises.writeFile(outputPath, fullPost);
  console.log(`Created post: ${outputPath}`);
  
  return { title, filename };
}

// Main function
async function main() {
  try {
    const pageId = process.argv[2]; // Get page ID from command line argument
    if (!pageId) {
      console.error("Please provide a Notion page ID");
      process.exit(1);
    }
    
    await convertPageToMarkdown(pageId);
  } catch (error) {
    console.error("Error:", error);
  }
}

main();
