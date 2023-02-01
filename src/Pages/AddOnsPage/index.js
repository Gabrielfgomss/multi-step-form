import { Field } from 'formik';
import React from 'react'
import styles from './addOnsPage.module.scss'
import inputs from './inputs.json'

export default function AddOnsPage({ props }) {
  
  console.log(props.values.yearMonth)

  return (
    <section>

      <h1>Pick add-ons</h1>
      <p>Add-ons help enhance your gaming experience.</p>

      <div className={styles.containerAdds}>
      {inputs.map((input) => {
        const { name, type, label, text, valueMonth, valueYear } = input;
        return (
          <div
            key={name}>
            <Field
              type={type}
              name={name}
              id={label}
              value={JSON.stringify({ [label]: valueYear })}
            />
            <label htmlFor={label}>
              <p>{label}</p>
              <p>{text}</p>
              <p>{props.values.yearMonth === true ? valueMonth:valueYear}</p>
            </label>
          </div>
        )
      })}
      </div>
      
    </section>  
  )
}
