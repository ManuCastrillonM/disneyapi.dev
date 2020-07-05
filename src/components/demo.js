import React from 'react'
import axios from 'axios'

import styles from './demo.module.css'

export default class Demo extends React.Component {
  constructor(props) {
    super(props)
    this.state = { queryResult: '' }
  }

  componentDidMount() {
    this.getQueryData()
  }

  getQueryData = (e) => {
    const input = document.getElementById('endpointInput')
    const sendButton = document.getElementById('sendButton')

    if (!e || e.keyCode === 13 || e.target === sendButton) {
      axios
        .get(`https://api.disneyapi.dev/${input.value}`)
        .then((response) => {
          this.setState({ queryResult: JSON.stringify(response.data, undefined, 2) })
        })
        .catch((e) => {
          this.setState({ queryResult: e.toString() })
        })
    }
  }

  render() {
    return (
      <div className={styles.demo}>
        <div className="container">
          <h3 className={styles.demoTitle}>Try it</h3>
          <div className={styles.demoRequest}>
            <span className={styles.demoUrl}>https://api.disneyapi.dev/</span>
            <input
              className={styles.demoInput}
              type="text"
              placeholder="characters"
              aria-label="api endpoint"
              id="endpointInput"
              onKeyUp={this.getQueryData}
              defaultValue="characters"
            />
            <button
              className={styles.demoButton}
              onClick={this.getQueryData}
              id="sendButton"
            >
              send
            </button>
          </div>
          <div className={styles.demoResult}>
            <pre>{this.state.queryResult}</pre>
          </div>
        </div>
      </div>
    )
  }
}
