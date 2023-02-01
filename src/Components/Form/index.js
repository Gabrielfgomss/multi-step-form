import React, { useState } from 'react'
import { Formik, Form as FormikForm} from 'formik';
import { useLocation, useNavigate } from 'react-router-dom';
import FormControl from 'Components/FormControl';
import './formItem.module.scss'
// import * as Yup from 'yup'

export default function Form({ to, props }) {

    const getLocation = useLocation();

    let location = getLocation.pathname;
    
    let navigate = useNavigate();

    const navigateTo = (event) => {
        event.preventDefault()
        navigate(-1)
    }

    const onSubmit = (values) => {
        console.log(values)
        props = values;
        navigate(to);
        // let newValues = Object.entries(values)
        // newValues.map((values) => {
        //     const key = values[0];
        //     const valor = values[1];
        //     const saveData = async function () {
        //         const conection = await fetch("http://localhost:3500/items", {
        //             method: "POST",
        //             headers: {
        //                 "Content-type": "application/json"
        //             },
        //             body: JSON.stringify({
        //                 [key]: valor
        //             })
        //         });
        //         const convertion = await conection.json();
        //         return convertion
        //     }
        //     return (
        //         console.log(saveData())
        //     )
        // })
        
    }
    return (
        <Formik
            initialValues={{}}
            onSubmit={onSubmit}
            >
            {(formik) => {
                
                return (
                    <FormikForm
                        >
                        <FormControl
                            props={formik}
                            location={location}
                        />
                        <section>
                            {location === '/' ?
                                null
                                :
                                <button onClick={navigateTo} type="button">Go Back</button>
                            }
                            <button type="submit">Next Step</button>
                        </section>
                    </FormikForm>)
            }}
        </Formik>

    )
}
