import React from "react"
import styles from "./footer.module.css"

const Footer = () => (
  <footer className={styles.footer}>
    <div className={styles.footerSocial}>
      Source code available on <a href="https://github.com/ManuCastrillonM/disney-api">GitHub</a>
    </div>
    <div className={styles.footerAuthor}>
      Made with ❤ by <a href="https://github.com/ManuCastrillonM">@manucastrillonm</a>
      , <a href="https://github.com/martineliasq">@martineliasq</a> and <a href="/">contributors</a> - 2020
    </div>
  </footer>
)

export default Footer