import React from 'react'
import Layout from '../components/layout'
import Seo from '../components/seo'
import * as styles from './markdownTemplate.module.css'
import { MDXProvider } from '@mdx-js/react'

const Template = ({ children, pageContext }) => {
  return (
    <Layout>
      <Seo title={pageContext.frontmatter.title} />
      <div className={styles.templateContainer}>
        <h1 className={styles.templateTitle}>
          {pageContext.frontmatter.title}
        </h1>
        <div className={styles.templateContent}>
          <MDXProvider>{children}</MDXProvider>
        </div>
      </div>
    </Layout>
  )
}

export default Template
