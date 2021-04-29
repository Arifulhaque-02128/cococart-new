import React from 'react'
import styles from '../../styles/AppShow.module.scss'

const InputAddress = (props) => {
    return (
        props.data.currentStep === 12 ?
        <div className={styles.screenWrapper}>
            <div className={styles.screenContentWrapper}>
                <div className={styles.inputWrapper}>
                    <div className={styles.titleQues}>
                        <h2>What's the delivery address?</h2>
                        <p>Delivery fee is ৳{props.data.deliveryCost}. </p>
                    </div>

                    <input
                        className={styles.input}
                        type="text"
                        placeholder="Enter here"
                        name="deliveryAddress"
                        onChange={props.handleChange}
                        value={props.data.deliveryAddress}
                    />
                </div>


            </div>



        </div>
        : null
    )
}

export default InputAddress