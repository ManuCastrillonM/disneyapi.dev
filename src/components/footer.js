import React from 'react'
import styles from './footer.module.css'

export default class Footer extends React.Component {
  constructor(props) {
    super(props)
    this.state = { serverStatus: '' }
  }

  getServerStatus() {
    const upDownUrl = `https://updown.io/api/checks?api-key=${process.env.GATSBY_UPDOWN_READ_ONLY_API_KEY}`
    fetch(upDownUrl)
      .then((response) => response.json())
      .then((data) => {
        this.setState({ serverStatus: data[0].last_status })
      })
      .catch((error) => {
        console.log(`Server status: ${error}`)
        this.setState({ serverStatus: '' })
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
              this.state.serverStatus < 201
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
          - 2021
        </div>
        <div>
          Disney and Disney characters are trademarks of Walt Disney Company
        </div>
      </footer>
    )
  }
}
