import React from 'react'
import styles from './hero.module.css'

const Hero = () => (
  <div className={styles.hero}>
    <div className="container">
      <h1 className={styles.heroTitle}>Disney API</h1>
      <h2>The REST and GraphQL API based on Disney characters</h2>
    </div>
  </div>
)

export default Hero
