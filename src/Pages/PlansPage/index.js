import DefaultPage from 'Pages/DefaultPage';
import React from 'react'
import styles from './plansPage.module.scss';
import inputs from './inputs.json'
import FormInput from 'Components/Form';

export default function PlanPage({ to }) {
  
    return (
        <DefaultPage
            title='Select your plan'
            paragraph='You have the option of monthly or yearly billing'>
            <FormInput to={to} inputs={inputs} styles={styles}>   
            </FormInput>
        </DefaultPage>
    )
}
