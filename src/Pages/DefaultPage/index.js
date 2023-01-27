import Nav from 'Components/Nav'
import React from 'react'
import styles from './defaultPage.module.scss'

export default function DefaultPage({ children }) {

  return (
    <section className={styles.mainContainer}>
      <div className={styles.contentContainer}>
        <Nav />
        {children}
      </div>
    </section>
  )
}
