import { Field, useFormikContext } from 'formik';
import React, { useEffect, useState } from 'react'
import styles from './addOnsPage.module.scss'
import inputs from './inputs.json'

export default function AddOnsPage() {
  
  const { values, resetForm } = useFormikContext();

  useEffect(() => {

    resetForm({values: {
      name: values.name,
      email: values.email,
      phoneNumber: values.phoneNumber,
      plan: values.plan,
      yearMonth: values.yearMonth,
      adds: ''
    }})

  },[values.yearMonth]);

  return (
    <section>

      <h1>Pick add-ons</h1>
      <p>Add-ons help enhance your gaming experience.</p>

      <div className={styles.containerAdds}>
        {inputs.map((input, index) => {

          const { type, name, label, valueMonth, valueYear, text } = input;

          return (
            <div key={index} >
              <Field 
              id={name}
              name='adds'
              value={values.yearMonth === true ? JSON.stringify(valueMonth) : JSON.stringify(valueYear)} 
              type={type} 
              />
              <label htmlFor={name}>
                <p>{label}</p>
                <p>{text}</p>
                <p>{values.yearMonth !== true && values.yearMonth !== undefined ? valueYear.value : valueMonth.value}</p>
              </label>
            </div>)
          }
        )
      }
      </div>

    </section>
  )
}
