import React from 'react'
import { Formik, Form, Field } from 'formik';
import { useLocation, useNavigate } from 'react-router-dom';
import { Switch } from 'formik-material-ui'
import InputData from 'Components/InputData';
// import * as Yup from 'yup'

export default function FormInput({ to, inputs, styles }) {

    let location = useLocation();
    
    let navigate = useNavigate();

    const navigateTo = (event) => {
        event.preventDefault()
        navigate(-1)
    }

    const initialValues = {
        
    }
    
    inputs.map((input) =>  {return(initialValues[input.name] = '')})

    // const phoneRegExp = /^[\+]?[(]?[0-9]{3}[)]?[-\s\.]?[0-9]{3}[-\s\.]?[0-9]{4,6}$/;

    // const validationSchema = Yup.object({
    //     name: Yup.string().required('This is required'),
    //     email: Yup.string().email('Invalid email format').required('This is required'),
    //     phoneNumber: Yup.string().matches(phoneRegExp, 'Phone number is not valid').required('This is required')
    // })

    const onSubmit = values => {
        navigate(to);
        console.log(values)
    }

    return (  
        <Formik
            initialValues={initialValues}
            //validationSchema={location.pathname === '/' ? validationSchema : null}
            onSubmit={onSubmit}
            validateOnBlur={false}
            validateOnChange={false}>
            {props => {
                console.log(props)
                return (
                <Form
                    className={
                        `${styles.userForm}
                         ${styles.plansForm}
                         ${styles.addsForm}`}>
                    {inputs.map(input => (
                        <div
                            key={input.label}
                            className={`
                                ${styles.containerUser}
                                ${styles.containerPlan}
                                ${styles.containerAdds}`}>
                            <InputData
                                inputSelect={props.values.yearMonth}
                                inputValue={props.values[input.name]}
                                inputError={props.errors[input.name]}
                                inputTouched={props.touched[input.name]}
                                inputData={input}
                                styles={styles}
                                />
                        </div>)
                    )}
                    {location.pathname === '/plans' ? 
                        <div className={`${styles.selectorValue}`}>
                            <p>Monthly</p>
                            {initialValues['yearMonth'] = false}
                            <Field label="yearMonth" name="yearMonth" component={Switch} type='checkbox' />
                            <p>Yearly</p>
                        </div> 
                    : null}
                    <div className={`${styles.twoButtons} ${styles.oneButton}`}>
                        {location.pathname !== '/' ? 
                            <button onClick={navigateTo} type="button">Go Back</button>
                            : null}
                        <button type="submit">Next Step</button>
                    </div>
                </Form>)}}
        </Formik>
        
    )
}
