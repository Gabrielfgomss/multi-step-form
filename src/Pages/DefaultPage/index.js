import Nav from 'Components/Nav'
import React from 'react'

import styles from './defaultPage.module.scss'

export default function DefaultPage({ title, paragraph, children }) {

  return (
      <section className={styles.mainContainer}>
        <div className={styles.contentContainer}>
          <Nav></Nav>
          <div className={styles.contentForm}>
            <div className={styles.mainContent}>
              <h1>{title}</h1>
              <p className={styles.subTitle}>{paragraph}</p>
              {children}
            </div>
          </div>
        </div>
      </section>
    
  )
}
