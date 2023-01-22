import React from 'react'
import DefaultPage from 'Pages/DefaultPage';
import styles from './inicialPage.module.scss'
import inputs from './inputs.json'

import FormInput from 'Components/Form';

export default function InicialPage({ to }) {

    return (
        <DefaultPage
            title='Personal info'
            paragraph='Please provide your name, email address, and phone number.' type={'text'}>
            <FormInput to={to} inputs={inputs} styles={styles}/>
        </DefaultPage>
    )
}
