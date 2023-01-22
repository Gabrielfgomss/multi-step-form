import FormInput from 'Components/Form';
import ModelPage from 'Pages/DefaultPage';
import React from 'react'
import styles from './addOnsPage.module.scss'
import inputs from './inputs.json'

export default function AddOnsPage({ to }) {
 
  return (
    <ModelPage
            title='Pick add-ons'
            paragraph='Add-ons help enhance your gaming experience'
        >
            <FormInput to={to} inputs={inputs} styles={styles}>
            </FormInput>
        </ModelPage>
  )
}
