import FormInput from 'Components/Form';
import DefaultPage from 'Pages/DefaultPage';
import React from 'react'
import styles from './addOnsPage.module.scss'
import inputs from './inputs.json'

export default function AddOnsPage({ to }) {

  return (
    <DefaultPage>
      <FormInput 
        to={to} 
        inputs={inputs} 
        stylesInput={styles} 
        title='Pick add-ons'
        paragraph='Add-ons help enhance your gaming experience' />
    </DefaultPage>
  )
}
