import React from 'react'
import { Field, ErrorMessage } from 'formik'
import { useLocation } from 'react-router-dom'

export default function InputComponent({ inputData, styles, inputValue, inputError, inputTouched, SelectedValue }) {

  const location = useLocation();

  const validation = () => {
    let error
    if (!inputValue && inputData.type === 'text') {
      error = 'This field is required'
      return error
    } else if (inputData.name === 'email' && !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(inputValue)) {
      error = 'Invalid email format'
      return error
    } else if (inputData.name === 'phoneNumber' && !/^[\+]?[(]?[0-9]{3}[)]?[-\s\.]?[0-9]{3}[-\s\.]?[0-9]{4,6}$/i.test(inputValue)) {
      error = 'Invalid number format'
      return error
    }
  }

  return (
    <label>
      <Field
        validate={validation}
        name={inputData.name}
        type={inputData.type}
        id={inputData.label}
        placeholder={inputData.placeholder}
        className={
          inputError !== '' && inputTouched === true ?
            `${styles.error}`
            : ''}
      >
      </Field>
      <div className={`
        ${styles.textContainer}
        ${styles.checkboxInner}`}>
        <p className={`${styles.title}`}>{inputData.label}</p>
        <ErrorMessage name={inputData.name} component='span' />
        {location.pathname === '/plans' ?
          <>
            <img src={`${inputData.icon}`} alt={inputData.name} />
            {SelectedValue === false ? 
              <p>{inputData.valueMonth}</p>
              :
              <>
                <p>{inputData.valueYear}</p>
                <p>2 months free</p>
              </>
            }
          </>
          : null}
        {location.pathname === '/add-ons' ?
          <>
            <p className={`${styles.subTitle}`}>{inputData.text}</p>
            {SelectedValue === false ? 
              <p>{inputData.valueMonth}</p>
              :
              <p>{inputData.valueYear}</p>}
          </>
          : null
        }
      </div>
    </label>
  )
}
