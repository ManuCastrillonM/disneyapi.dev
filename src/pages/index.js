import React from 'react'

import Layout from '../components/layout'
import SEO from '../components/seo'
import Hero from '../components/hero'
import Demo from '../components/demo'

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <Hero />
    <Demo />
  </Layout>
)

export default IndexPage
