import React from 'react'
import { Formik, Form, Field } from 'formik';
import { useLocation, useNavigate } from 'react-router-dom';
import { Switch } from 'formik-material-ui'
import InputData from 'Components/InputData';
import styles from './formItem.module.scss'
// import * as Yup from 'yup'

export default function FormInput({ title, paragraph, to, inputs, stylesInput }) {

    let location = useLocation();

    let navigate = useNavigate();

    const navigateTo = (event) => {
        event.preventDefault()
        navigate(-1)
    }
    
    const onSubmit = values => {
        navigate(to);
        console.log(values)
    }
    
    const initialValues = {

    }

    inputs.map((input) => { return (initialValues[input.name] = '') })

    return (
        <Formik
            initialValues={initialValues}
            onSubmit={onSubmit}>
            {props => {
                console.log(props)
                return (
                    <Form>
                        <section>
                            <h1>{title}</h1>
                            <p className={styles.subtitle}>{paragraph}</p>
                            {inputs.map(input => (
                                <div
                                    key={input.label}
                                    className={`
                                    ${stylesInput.containerUser}
                                    ${stylesInput.containerPlan}
                                    ${stylesInput.containerAdds}`}>
                                    <InputData
                                        inputSelect={props.values.yearMonth}
                                        inputValue={props.values[input.name]}
                                        inputError={props.errors[input.name]}
                                        inputTouched={props.touched[input.name]}
                                        inputData={input}
                                        styles={stylesInput}
                                    />
                                </div>)
                            )}
                            {location.pathname === '/plans' ?
                                <div className={`${stylesInput.selectorValue}`}>
                                    <p>Monthly</p>
                                    {initialValues['yearMonth'] = false}
                                    <Field label="yearMonth" name="yearMonth" component={Switch} type='checkbox' />
                                    <p>Yearly</p>
                                </div>
                                : null
                            }
                        </section>
                        <section>
                            {location.pathname !== '/' ?
                                <button onClick={navigateTo} type="button">Go Back</button>
                                : null
                            }
                            <button type="submit">Next Step</button>
                        </section>
                    </Form>)
            }}
        </Formik>

    )
}
