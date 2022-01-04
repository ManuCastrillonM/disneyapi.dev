import React from 'react'

import Layout from '../components/layout'
import SEO from '../components/seo'
import Hero from '../components/hero'
import ApiDemo from '../components/apiDemo'

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <Hero />
    <ApiDemo />
  </Layout>
)

export default IndexPage
