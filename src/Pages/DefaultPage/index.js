import Nav from 'Components/Nav'
import React from 'react'
import { Outlet } from 'react-router-dom'
import styles from './defaultPage.module.scss'

export default function DefaultPage() {

  return (
    <section className={styles.mainContainer}>
      <div className={styles.contentContainer}>
        <Nav />
        <Outlet />
      </div>
    </section>
  )
}
