import React from 'react'

import DocsNav from '../components/docsNav/docsNav'
import Docs from '../components/docs/docs'
import Layout from '../components/layout'
import Seo from '../components/seo'

// import docs markdown component

import * as styles from './docs.module.css'

const DocsPage = () => (
  <Layout>
    <Seo title="Docs" />
    <div className={styles.docs}>
      <div className={styles.docsNav}>
        <DocsNav />
      </div>
      <div className={styles.docsContent}>
        <Docs />
      </div>
    </div>
  </Layout>
)

export default DocsPage
