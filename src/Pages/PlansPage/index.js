import React from 'react'
import styles from './plansPage.module.scss';
import inputs from './inputs.json'
import { Field } from 'formik';
import Switch from '@mui/material/Switch';


export default function PlanPage({ props }) {

    const { initialValues, values } = props;
    
    return (
        <section>
            <h1>Select your plan</h1>
            <p>You have the option of monthly or yearly billing.</p>
            <div className={styles.container}>
                {inputs.map((input) => {

                    const { type, name, label, icon, id, valueMonth, valueYear } = input;
                    initialValues['yearMonth'] = true;
                    initialValues[name] = '';
                    return (
                        <div
                            key={id}
                            className={`${styles.containerPlan}`}>
                            <Field
                                name={name}
                                type={type}
                                id={id}
                                value={values.yearMonth ?
                                    JSON.stringify({ [label]: valueMonth })
                                    :
                                    JSON.stringify({ [label]: valueYear })}
                            />
                            <label htmlFor={id}>
                                <img src={icon} alt={name} />
                                <p>{label}</p>
                                {values.yearMonth ?
                                    <p>{valueMonth}</p>
                                    :
                                    <>
                                        <p>{valueYear}</p>
                                        <p>2 months free</p>
                                    </>}
                            </label>
                        </div>
                    )}
                )}
                <div>
                    <p>Monthly</p>
                    <Field 
                        name='yearMonth'
                        type='checkbox'
                    >
                        {({field, form, meta}) => {
                            return (
                                <Switch 
                                    {...field}/>
                            )
                        }}
                    </Field>
                    <p>Yearly</p>
                </div>
            </div>
        </section>
    )
}
