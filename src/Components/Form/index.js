import React, { useEffect } from 'react'
import { Formik, Form as FormikForm, useFormikContext} from 'formik';
import { Link, useNavigate } from 'react-router-dom';
import './formItem.module.scss'
// import * as Yup from 'yup'

export default function Form({location, children, to, savedData}) {

    let navigate = useNavigate();

    const onSubmit = (values) => {
        console.log(Object.values(values)[0]);
        if(location !== '/summary') {
        savedData(values)
        navigate(to);
        } else if (location === '/summary' && Object.values(values)[4] !== '') {
            navigate(to)
        }
    }
    
    return (
        <Formik
            initialValues={{
                name: '',
                email: '',
                phoneNumber: '',
                yearMonth: '',
                plan: '',
                adds: ''
            }}
            onSubmit={onSubmit}
            
            >
            {(formik) => {
                console.log(formik)
                return (
                    <FormikForm
                        >
                        {children}
                        <section>
                            {location === '/' ?
                                null
                                :
                                <Link to={-1}>Go Back</Link>
                            }
                            <button type="submit">{location === '/summary' ? 'Confirm':'Next Step'}</button>
                        </section>
                    </FormikForm>)
            }}
        </Formik>
    )
}
