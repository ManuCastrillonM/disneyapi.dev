import React from 'react'

import Layout from '../../components/layout'
import Seo from '../../components/seo'
import * as styles from './404.module.css'

export default function NotFoundPage() {
  return (
    <Layout>
      <Seo title="404: Not found" />
      <div className={`container ` + styles.notFound}>
        <h1 className={styles.notFoundTitle}>404</h1>
        <p>You just hit a route that doesn&#39;t exist... the sadness.</p>
      </div>
    </Layout>
  )
}
