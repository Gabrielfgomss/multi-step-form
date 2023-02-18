import React from 'react'
import styles from './confirmatePage.module.scss'

export default function ConfimationPage() {
  return (
    <div className={styles.containerPage}>
        <img src='/assets/images/icon-thank-you.svg' alt='Thank you icon'/>
        <h1>Thank you!</h1>
        <p>Thanks for confirming your subscription! We hope you have fun using our platform. If you ever need suport, please feel free to email us at support@loremgaming.com.</p>
    </div>
  )
}
