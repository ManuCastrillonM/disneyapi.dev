import React from 'react'

import Layout from '../components/layout'
import SEO from '../components/seo'
import styles from './index.module.css'

import Demo from '../components/demo'

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <Hero />
    <Demo />
  </Layout>
)

const Hero = () => (
  <div className={styles.hero}>
    <div className="container">
      <h1 className={styles.heroTitle}>Disney API</h1>
      <h2>The REST API based on Disney characters</h2>
    </div>
  </div>
)

// function getData() {
//   const input = document.getElementById('endpointInput')
//   axios.get(`http://api.disneyapi.dev/${input.value}`).then((response) => {
//     queryResult = JSON.stringify(response)
//     console.log('query result: ', queryResult)
//   })

//   console.log('hello world')
// }

export default IndexPage
