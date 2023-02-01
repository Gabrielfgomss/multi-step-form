import DefaultPage from 'Pages/DefaultPage';
import React from 'react'
import { Link, useNavigate } from 'react-router-dom';
import styles from './summaryPage.module.scss'

export default function SummaryPage() {

    const navigate = useNavigate();

    const navegateTo = (location) => {
        navigate(-1)
    }

    return (
        <div className={styles.summaryContainer}>
            <div className={styles.summaryPage}>
                <h1>Finishing up</h1>
                <p className={styles.subTitle}>Double-check everything looks OK before confirming</p>
                <div className={styles.containerItens}>
                    <div className={styles.contentSidebar}>
                        <p className={styles.sidebarTitle}>Advanced (Montly)</p>
                        <p className={styles.sidebarValue}>$9/mo</p>
                        <Link onClick={navegateTo('/plans')}>Change</Link>
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
                <p>Total (per year)</p>
                <p>$120/yr</p>
            </div>
            <div className={styles.twoButtons}>
                <button type='button' onClick={navegateTo}>Go back</button>
                <button type='submit'>Confirm</button>
            </div>
        </div>

    )
}
