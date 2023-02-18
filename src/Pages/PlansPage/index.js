import React, { useState } from 'react'
import styles from './plansPage.module.scss';
import inputs from './inputs.json'
import { Field, useFormikContext } from 'formik';
import Switch from '@mui/material/Switch';


export default function PlanPage() {

    const [checked, setChecked] = useState(true);
    
    const handleSwitchChange = (event) => {
        setChecked(event.target.checked)
    }
    
    return (
        <section>
            <h1>Select your plan</h1>
            <p>You have the option of monthly or yearly billing.</p>

            <div className={styles.container}>
                {inputs.map((input) => {
                    
                    const { type, name, label, icon, id, valueMonth, valueYear } = input;
                    
                    return (
                        <div
                            key={id}
                            className={`${styles.containerPlan}`}>
                            <Field
                                name={name}
                                type={type}
                                id={id}
                                value={checked ?
                                    JSON.stringify(valueMonth)
                                    :
                                    JSON.stringify(valueYear)}
                            />
                            <label htmlFor={id}>
                                <img src={icon} alt={name} />
                                <p>{label}</p>
                                {checked ?
                                    <p>{valueMonth.value}</p>
                                    :
                                    <>
                                        <p>{valueYear.value}</p>
                                        <p>2 months free</p>
                                    </>}
                            </label>
                        </div>
                    )
                }
                )}
                <div>
                    <p style={{color: checked ? 'hsl(213, 96%, 18%)': 'hsl(231, 11%, 63%)'}}>Monthly</p>
                    <Field>
                        {(props) => {
                            
                            props.field.value = checked
                            props.form.values.yearMonth = props.field.value
                            return (
                                <Switch
                                    {...props.field}
                                    {...props.form.values.yearMonth}
                                    id='yearMonth'
                                    checked={checked}
                                    onChange={handleSwitchChange}
                                    />
                            )
                        }}
                    </Field>
                    <p style={{color: checked ? 'hsl(231, 11%, 63%)': 'hsl(213, 96%, 18%)'}}>Yearly</p>
                </div>
            </div>
        </section>
    )
}
