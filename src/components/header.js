import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"

import styles from "./header.module.css"

const Header = ({ siteTitle }) => (
  <header className={styles.header}>
    <ul className={styles.headerList}>
      <li className={styles.headerItem}>
        <Link to="/">{siteTitle}</Link>
      </li>
      <li className={styles.headerItem}>
        <Link to="/about">About</Link>
      </li>
      <li className={styles.headerItem}>
        <Link to="/docs">Docs</Link>
      </li>
    </ul>
  </header>
)

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
