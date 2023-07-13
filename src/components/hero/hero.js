import React from 'react'
import * as styles from './hero.module.css'
import { Link } from 'gatsby'

const Hero = () => (
  <div className={styles.hero}>
    <div className="container">
      <h1 className={styles.heroTitle}>Disney API</h1>
      <h2>The REST and GraphQL API based on Disney characters</h2>
    </div>
  </div>
)

export default Hero
