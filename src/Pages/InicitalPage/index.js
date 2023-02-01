import React from 'react'
import styles from './inicialPage.module.scss'
import inputs from './inputs.json'
import { ErrorMessage, Field } from 'formik';

export default function InicialPage({ props }) {
    
    const { initialValues, values, errors, touched } = props;
    
    return (
        <section>
            <h1>Personal info</h1>
            <p className={styles.subtitle}>Plese provide your name, email, and phone number.</p>
            <div className={styles.container}>
                {inputs.map((input) => {

                    const { type, label, name, placeholder, id } = input;

                    initialValues[name] = '';

                    const validation = () => {

                        let error
                        if (!values[name]) {
                            error = 'This field is required'
                            return error
                        }

                        if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email) && name === 'email') {
                            error = 'Invalid email format'
                            return error

                        } if (!/^[\+]?[(]?[0-9]{3}[)]?[-\s\.]?[0-9]{3}[-\s\.]?[0-9]{4,6}$/i.test(values.phoneNumber) && name === 'phoneNumber') {
                            error = 'Invalid number format'
                            return error
                        }
                    }

                    return (
                        <div
                            key={id}
                            className={`${styles.containerUser}`}>
                            <label>{label}</label>
                            <ErrorMessage name={name} component='span' />
                            <Field
                                type={type}
                                name={name}
                                placeholder={placeholder}
                                id={id}
                                validate={validation}
                                style={errors[name] !== undefined && touched[name] === true ?
                                    { border: '1px solid red' }
                                    :
                                    {}}
                            />
                        </div>
                    )
                })
                }
            </div>
        </section>
    )
}
