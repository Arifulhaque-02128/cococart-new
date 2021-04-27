import React from 'react'
import styles from '../../styles/AppShow.module.scss'

const InputEmail = (props) => {
    return (
        props.data.currentStep === 5 ?
        <div className={styles.screenWrapper}>
            <div className={styles.screenContentWrapper}>
                <div className={styles.inputWrapper}>
                    <div className={styles.titleQues}>
                        <h2>What's your email?</h2>
                        <p>Enter here</p>
                    </div>

                    <input
                        className={styles.input}
                        type="text"
                        placeholder="Enter here"
                        name="ordererEmail"
                        onChange={props.handleChange}
                        value={props.data.ordererEmail}
                    />
                </div>


            </div>



        </div>
        : null
    )
}

export default InputEmail