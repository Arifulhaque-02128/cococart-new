import React from 'react'
import styles from '../../styles/AppShow.module.scss'

const InputRecipientPhone = (props) => {
    return (
        props.data.currentStep === 11 ?
        <div className={styles.screenWrapper}>
            <div className={styles.screenContentWrapper}>
                <div className={styles.inputWrapper}>
                    <div className={styles.titleQues}>
                        <h2>And what's their phone number?</h2>
                        <p>No spam. For order purposes only.</p>

                    </div>

                    <input
                        className={styles.input}
                        type="text"
                        placeholder="Enter here"
                        name="recipientPhone"
                        onChange={props.handleChange}
                        value={props.data.recipientPhone}
                    />
                </div>


            </div>



        </div>
        : null
    )
}

export default InputRecipientPhone