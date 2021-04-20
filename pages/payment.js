import React from 'react'
import PayStripe from '../components/PayStripe/PayStripe'
import Step13 from '../steps/Step13'
import styles from '../styles/App.module.scss'

const payment = () => {
    return (
        <PayStripe />     
        // <div className={styles.topContainer}>

        //         <Step13 />

        // </div>
    )
}


export default payment