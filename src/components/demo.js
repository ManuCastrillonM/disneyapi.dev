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
        .get(input.value)
        .then((response) => {
          this.setState({
            queryResult: JSON.stringify(response.data, undefined, 2)
          })
        })
        .catch((e) => {
          this.setState({ queryResult: e.toString() })
        })
    }
  }

  render() {
    return (
      <section className={styles.demo}>
        <div className="container">
          <div className={styles.demoContent}>
            <div className={styles.demoHeader}>
              <span className={styles.demoHeaderRed}></span>
              <span className={styles.demoHeaderYellow}></span>
              <span className={styles.demoHeaderGreen}></span>
              <div className={styles.demoHeaderTitle}>Try it!</div>
            </div>

            <div className={styles.demoBody}>
              <div className={styles.demoRequest}>
                <input
                  className={styles.demoInput}
                  type="text"
                  placeholder="https://api.disneyapi.dev/characters"
                  aria-label="api endpoint"
                  id="endpointInput"
                  onKeyUp={this.getQueryData}
                  defaultValue="https://api.disneyapi.dev/characters"
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
        </div>
      </section>
    )
  }
}
