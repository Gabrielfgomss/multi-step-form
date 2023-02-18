import { useFormikContext } from 'formik';
import React, { useEffect, useRef, useState } from 'react'
import { Link } from 'react-router-dom';
import styles from './summaryPage.module.scss'

export default function SummaryPage({ props, to }) {

    const {resetForm, values} = useFormikContext();
    
    return (
        <>
            {(props.plan !== undefined && props.plan !== '') ?
                <div className={styles.summaryPage}>
                    <h1>Finishing up</h1>
                    <p className={styles.subTitle}>Double-check everything looks OK before confirming</p>
                    <div className={styles.containerItens}>
                        <div className={styles.contentSidebar}>
                            <p className={styles.sidebarTitle}>{JSON.parse(props.plan).title}</p>
                            <p className={styles.sidebarValue}>{JSON.parse(props.plan).value}</p>
                            <Link to='/plans' onClick={() => {
                                resetForm({values: {
                                    email: values.email,
                                    name: values.name,
                                    phoneNumber: values.phoneNumber,
                                    plan: '',
                                    adds: ''
                                }})}}>Change</Link>
                        </div>
                        {props.adds !== undefined ? props.adds.map((add, index) => {
                            if (add.length > 0) {
                                return (
                                    <div className={styles.contentSidebar} key={index}>
                                        <p>{JSON.parse(add).title}</p>
                                        <p>{JSON.parse(add).value}</p>
                                    </div>
                                )
                            }
                        }) : <p>Nao</p>

                        }

                    </div>
                    <p>{props.yearMonth === true ? 'Total (per month)':'Total (per year)'}</p>
                    <p>{props.adds !== undefined ?
                        `+$${(props.adds
                            .map((add) => JSON.parse(add).value.replace(/\D/g, ''))
                            .reduce((total, add) => total + Number(add), 0) + Number(JSON.parse(props.plan).value.replace(/\D/g, '')))}/
                            ${props.yearMonth === true ? 'mo':'yr'}`
                             : '10'}
                    </p>
                </div>
                : null}
            
        </>

    )
}
