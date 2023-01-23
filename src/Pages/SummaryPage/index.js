import DefaultPage from 'Pages/DefaultPage';
import React from 'react'
import styles from './summaryPage.module.scss'

export default function SummaryPage() {


    return (
        <DefaultPage
            title='Finishing up'
            paragraph='Double-check everything look OK before confirming'>
            <div className={styles.summaryPage}>
                <div className={styles.containerItens}>
                    <div className={styles.contentSidebar}>
                        <p className={styles.sidebarTitle}>Advanced(Montly)</p>
                        <p className={styles.sidebarValue}>$9/mo</p>
                        <a>Change</a>
                    </div>
                    <div className={styles.contentSidebar}>
                        <p>Online service</p>
                        <p>$1/mo</p>
                    </div>
                    <div className={styles.contentSidebar}>
                        <p>Larger storage</p>
                        <p>+$2/mo</p>
                    </div>
                    <div className={styles.contentSidebar}>
                        <p>Customizable profile</p>
                        <p>+$2/mo</p>
                    </div>
                </div>
                <div className={styles.containerResult}>
                    <p>Total(per year)</p>
                    <p>$120/yr</p>
                </div>
                <div className={styles.twoButtons}>
                    <button type='button'>Go back</button>
                    <button type='submit'>Confirm</button>
                </div>
            </div>
        </DefaultPage>
    )
}
