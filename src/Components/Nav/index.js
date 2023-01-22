import React from 'react'
import Steps from './Steps';
import styles from './nav.module.scss';
import icons from './icons.json';


export default function Nav() {

  return (
    <nav className={styles.sideBar}>
      <div className={styles.container}>
        {icons.map(icon => (<Steps key={icon.id} icon={icon} styles={styles} />))}
      </div>
    </nav>
  )

}