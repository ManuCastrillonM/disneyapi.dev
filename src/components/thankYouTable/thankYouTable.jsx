import React from 'react'
import * as styles from './thankYouTable.module.css'

export default function ThankYouTable() {
  const list = [
    {
      name: 'You?',
      url: 'www.github.com',
      img: 'https://placehold.co/100x100'
    }
  ]

  return (
    <table>
      <tbody>
        <tr>
          {list.map((element) => {
            return (
              <td className={styles.tableElement}>
                <img src={element.img} width="100px" alt="test" />
                <b>{element.name}</b>
              </td>
            )
          })}
        </tr>
      </tbody>
    </table>
  )
}
