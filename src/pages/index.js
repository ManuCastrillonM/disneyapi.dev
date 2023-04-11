import React from 'react'

import Layout from '../components/layout'
import Seo from '../components/seo'
import Hero from '../components/hero/hero'
import ApiDemo from '../components/apiDemo/apiDemo'

const IndexPage = () => (
  <Layout>
    <Seo title="Home" />
    <Hero />
    <ApiDemo />
  </Layout>
)

export default IndexPage
