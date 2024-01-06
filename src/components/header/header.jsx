import { Link } from 'gatsby'
import React from 'react'
import * as styles from './header.module.css'

const Header = () => (
  <header className={styles.header}>
    <ul className={styles.headerList}>
      <li className={styles.headerItem}>
        <Link className={styles.headerLink} to="/">
          Home
        </Link>
      </li>
      <li className={styles.headerItem}>
        <Link className={styles.headerLink} to="/about">
          About
        </Link>
      </li>
      <li className={styles.headerItem}>
        <Link className={styles.headerLink} to="/docs">
          Docs
        </Link>
      </li>
      <li className={styles.headerItem}>
        <Link
          className={styles.headerLink + ' ' + styles.headerButton}
          to="/support-us"
        >
          Support Us
        </Link>
      </li>
    </ul>
  </header>
)

export default Header
