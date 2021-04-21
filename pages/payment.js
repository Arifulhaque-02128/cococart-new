import React from 'react'
import PayStripe from '../components/PayStripe/PayStripe'
import StepFinal from '../steps/StepFinal'
import styles from '../styles/App.module.scss'

const payment = () => {
    return (
        <PayStripe />     
        // <div className={styles.topContainer}>

        //         <StepFinal />

        // </div>
    )
}


export default payment