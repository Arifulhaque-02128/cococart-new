import React from 'react'
import styles from '../../styles/AppShow.module.scss'

const InputEmail = (props) => {
    return (
        props.data.currentStep === 12 ?
        <div className={styles.screenWrapper}>
            <div className={styles.screenContentWrapper}>
                <div className={styles.inputWrapper}>
                    <div className={styles.titleQues}>
                        <h2>And finally, what's your email?</h2>
                        <p>Your order confirmation will be sent here.</p>
                    </div>

                    <input
                        className={styles.input}
                        type="text"
                        placeholder="Enter here"
                        name="confirmationEmail"
                        onChange={props.handleChange}
                        value={props.data.confirmationEmail}
                    />
                </div>


            </div>



        </div>
        : null
    )
}

export default InputEmail