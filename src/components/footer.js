import React from 'react'
import styles from './footer.module.css'

const Footer = () => (
  <footer className={styles.footer}>
    <div>
      <a href="https://status.disneyapi.dev/">Server Status</a>
    </div>
    <div className={styles.footerAuthor}>
      Made with ❤ by{' '}
      <a href="https://github.com/ManuCastrillonM">a Disney Fan</a> and{' '}
      <a href="https://github.com/ManuCastrillonM/disney-api#contributors-">
        contributors
      </a>{' '}
      - 2021
    </div>
    <div>
      Disney and Disney characters are trademarks of Walt Disney Company
    </div>
  </footer>
)

export default Footer
