import React from 'react'
import * as styles from './footer.module.css'

export default class Footer extends React.Component {
  constructor(props) {
    super(props)
    this.state = { isServerUp: true }
  }

  getServerStatus() {
    const upDownUrl = `https://updown.io/api/checks?api-key=ro-6ZC3Xjeu1TbqzoMJuBGk`
    fetch(upDownUrl)
      .then((response) => response.json())
      .then((data) => {
        this.setState({ isServerUp: !data[0].down })
      })
      .catch((error) => {
        console.log(`Server status: ${error}`)
      })
  }

  componentDidMount() {
    this.getServerStatus()
  }

  render() {
    return (
      <footer className={styles.footer}>
        <div>
          <a
            className={[
              styles.footerServerStatus,
              this.state.isServerUp
                ? styles.footerServerStatusGreen
                : styles.footerServerStatusRed
            ].join(' ')}
            href="https://status.disneyapi.dev/"
          >
            Server Status
          </a>
        </div>
        <div className={styles.footerAuthor}>
          Made with ❤ by{' '}
          <a href="https://github.com/ManuCastrillonM">a Disney Fan</a> and{' '}
          <a href="https://github.com/ManuCastrillonM/disney-api#contributors-">
            contributors
          </a>{' '}
          - 2023
        </div>
        <div>
          Disney and Disney characters are trademarks of Walt Disney Company
        </div>
      </footer>
    )
  }
}
