import DefaultPage from 'Pages/DefaultPage';
import React from 'react'
import styles from './plansPage.module.scss';
import inputs from './inputs.json'
import FormComponent from 'Components/Form';

export default function PlanPage({ to }) {
  
    return (
        <DefaultPage>
            <FormComponent 
                to={to} 
                inputs={inputs} 
                stylesInput={styles} 
                title='Select your plan'
                paragraph='You have the option of monthly or yearly billing'/>   
        </DefaultPage>
    )
}
