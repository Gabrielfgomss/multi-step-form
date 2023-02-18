import React from 'react'
import styles from './inicialPage.module.scss'
import inputs from './inputs.json'
import { ErrorMessage, Field, useFormikContext } from 'formik';

export default function InicialPage() {
    
    const {values, errors, touched } = useFormikContext();
    
    return (
        <section>
            <h1>Personal info</h1>
            <p className={styles.subtitle}>Plese provide your name, email, and phone number.</p>
            
            <div className={styles.container}>
                {inputs.map((input) => {

                    const { type, label, name, placeholder, id } = input;
                    
                    const validation = () => {
                        let error
                        if (!values[name]) {
                            error = 'This field is required'
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
                                    {}
                                }
                            />
                        </div>
                    )
                })
                }
            </div>
        </section>
    )
}
