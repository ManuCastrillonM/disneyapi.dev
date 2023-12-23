import React, { useEffect, useState, useRef } from 'react'
import * as styles from './apiDemo.module.css'
import { StaticImage } from 'gatsby-plugin-image'

export default function Demo() {
  const characterUrl = 'https://api.disneyapi.dev/character'
  const [queryResult, setQueryResult] = useState('')
  const [isAlertEnabled, setIsAlertEnabled] = useState(false)
  const [alertMessage, setAlertMessage] = useState('')
  const inputRef = useRef(null)

  useEffect(() => {
    queryData(characterUrl)
  }, [])

  async function queryData(url) {
    try {
      const response = await fetch(url)
      const parsedResponse = await response.json()
      const stringData = JSON.stringify(parsedResponse.data, undefined, 2)
      setQueryResult(stringData)
    } catch (error) {
      setQueryResult(`Error retrieving data from ${url}`)
    }
  }

  async function copyQueryUrl() {
    const url = inputRef.current.value

    try {
      await navigator.clipboard.writeText(url)
      setAlertMessage('URL copied to clipboard!')
    } catch (err) {
      setAlertMessage('Failed to copy: ', err)
    }

    setIsAlertEnabled(true)

    setTimeout(() => {
      setIsAlertEnabled(false)
    }, 3000)
  }

  function getQueryData(e) {
    if (!e || e.keyCode === 13 || e.target.id === 'sendButton') {
      const url = inputRef.current.value
      queryData(url)
    }
  }

  return (
    <section>
      <div className={`container ` + styles.demoContainer}>
        <div className={styles.demoContent}>
          <div className={styles.demoHeader}>
            <span className={styles.demoHeaderRed}></span>
            <span className={styles.demoHeaderYellow}></span>
            <span className={styles.demoHeaderGreen}></span>
            <div className={styles.demoHeaderTitle}>Try me!</div>
          </div>
          <div className={styles.demoBody}>
            <div className={styles.demoRequest}>
              <input
                className={styles.demoInput}
                type="text"
                placeholder={characterUrl}
                aria-label="type the api url here to try it"
                ref={inputRef}
                onKeyUp={getQueryData}
                defaultValue={characterUrl}
              />
              <button onClick={copyQueryUrl} className={styles.demoCopy}>
                <StaticImage
                  src="../../images/copy-paste-icon.svg"
                  alt="copy url button"
                />
                <div
                  className={`${styles.demoCopyAlert} ${
                    isAlertEnabled ? styles.demoCopyAlertActive : ''
                  }`}
                >
                  {alertMessage}
                </div>
              </button>
              <button
                className={styles.demoButton}
                onClick={getQueryData}
                id="sendButton"
              >
                send
              </button>
            </div>
            <div className={styles.demoResult}>
              <pre>{queryResult}</pre>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
