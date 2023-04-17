import React from 'react'
import { MDXRenderer } from 'gatsby-plugin-mdx'
// import docsContent from './docs.mdx'
// import { MDXRenderer } from "gatsby-plugin-mdx"
// create a markdown component with the documentation content
const markdownContent = `# Hello World\n\nThis is some **Markdown** content.`

const Docs = () => (
  <div>
    <MDXRenderer>{markdownContent}</MDXRenderer>
  </div>
)

export default Docs
