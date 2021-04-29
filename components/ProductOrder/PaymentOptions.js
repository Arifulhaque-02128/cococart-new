import React from 'react'
import styles from '../../styles/AppShow.module.scss'

const PaymentOptions = (props) => {
    return (
        props.data.currentStep === 15 ?
        <div className={styles.screenWrapper}>
            <div className={styles.screenContentWrapper}>
                <div className={styles.paymentWrapper}>
                    <div className={styles.titleQues}>
                        <h2>How would you like to make payment?</h2>
                        
                    </div>
                    {/* if credit */}
                    <button className={styles.btnPayment} onClick={props.handleSubmit}>
                        Credit/Debit Card
                        
                    </button>
                    
                    
                </div>


            </div>



        </div>
        : null
    )
}

export default PaymentOptions