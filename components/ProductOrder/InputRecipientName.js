import React from 'react'
import styles from '../../styles/AppShow.module.scss'

const InputRecipientName = (props) => {
    return (
        props.data.currentStep === 10 ?
        <div className={styles.screenWrapper}>
            <div className={styles.screenContentWrapper}>
                <div className={styles.inputWrapper}>
                    <div className={styles.titleQues}>

                        <h2>What's the recipient's name?</h2>
                    </div>

                    <input
                        name="recipientName"
                        className={styles.input}
                        type="text"
                        placeholder="Enter here"
                        onChange={props.handleChange}
                        value={props.data.recipientName}
                    />
                </div>


            </div>



        </div>
        : null
    )
}

export default InputRecipientName