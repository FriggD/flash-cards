import React from 'react'

import styles from './StartStudyingWidget.module.css'

export default function StartStudyingWidget() {
  return (
    <div className={styles.container}>
        <div className={styles.text}>
            <h1>Let's start studying!</h1>
            <p>reviewing your flash-cards!</p>
        </div>
        <div className={styles.button}>
            <button>Start Studying</button>
        </div>
    </div>
  )
}
