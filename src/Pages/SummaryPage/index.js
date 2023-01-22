import DefaultPage from 'Pages/DefaultPage';
import React from 'react'
import styles from './summaryPage.module.scss'

export default function SummaryPage() {


    return (
        <DefaultPage
            title='Finishing up'
            paragraph='Double-check everything look OK before confirming'>
            <div className={styles.summaryPage}>
                <div style={{ "backgroundColor": "#F8F9FE" }}>
                    <div className={styles.containerItens}>
                        <div className={styles.planItem}>
                            <p>Arcade(Monthly)</p>
                            <p>Change</p>
                            <p>$9/mo</p>
                        </div>
                        <div className={styles.addsItem}>
                            <p>Online service</p>
                            <p>+$1/mo</p>
                            <p>Online service</p>
                            <p>+$1/mo</p>
                            <p>Online service</p>
                            <p>+$1/mo</p>
                        </div>
                    </div>
                </div>
                <div className={styles.resultItem}>
                    <p>Total(per year)</p>
                    <p>$120/yr</p>
                </div>
            </div>
        </DefaultPage>
    )
}
