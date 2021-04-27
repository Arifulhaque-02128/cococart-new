import React from 'react'
import styles from '../../styles/AppShow.module.scss'

const InputWhatsApp = (props) => {
    return (
        props.data.currentStep === 6 ?
        <div className={styles.screenWrapper}>
            <div className={styles.screenContentWrapper}>
                <div className={styles.inputWrapper}>
                    <div className={styles.titleQues}>
                        <h2>What's your WhatsApp number?</h2>
                        <p>Enter here</p>
                    </div>

                    <input
                        className={styles.input}
                        type="text"
                        placeholder="Enter here"
                        name="ordererWhatsApp"
                        onChange={props.handleChange}
                        value={props.data.ordererWhatsApp}
                    />
                </div>


            </div>



        </div>
        : null
    )
}

export default InputWhatsApp