import React from 'react'
import * as styles from './hero.module.css'
import { Link } from 'gatsby'

const Hero = () => (
  <div className={styles.hero}>
    <div className="container">
      <h1 className={styles.heroTitle}>Disney API</h1>
      <h2>The REST and GraphQL API based on Disney characters</h2>
    </div>
    <div className={styles.alert}>
      <p>
        Important: The <i>/characters</i> endpoint will be deprecated on
        2023-04-30. Please use <i>/character</i> instead.
      </p>
      <p>
        Checkout the <Link to="/docs">documentation</Link> to learn how to use
        it.
      </p>
    </div>
  </div>
)

export default Hero
