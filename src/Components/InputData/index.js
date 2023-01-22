import React from 'react'
import { Field, ErrorMessage } from 'formik'
import { useLocation } from 'react-router-dom'

export default function InputData({ inputData, styles, inputValue, inputError, inputTouched, inputSelect }) {
  
  const location = useLocation();
  
  const value = inputSelect === false ? inputData.valueMonth:inputData.valueYear;

  const validation = () => {
    let error
    if (!inputValue  && inputData.type === 'text') {
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
              <p>{value}</p>
            </>
            : null}
          {location.pathname === '/add-ons' ? 
            <> 
              <p className={`${styles.subTitle}`}>{inputData.text}</p>
              <p className={`${styles.valueMonth}`}>{value}</p>
            </>
            : null
          }
      </div>
    </label>
  )
}
