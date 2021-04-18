import React from 'react'
import styles from '../styles/AppShow.module.scss'

const InputPhone = (props) => {
    return (
        props.data.currentStep === 7 ?
        <div className={styles.screenWrapper}>
            <div className={styles.screenContentWrapper}>
                <div className={styles.inputWrapper}>
                    <div className={styles.titleQues}>

                        <h2>What's your phone number?</h2>
                        <p>No spam. For order purposes only.</p>
                    </div>

                    <input
                        className={styles.input}
                        type="text"
                        placeholder="Enter here"

                    />
                </div>


            </div>



        </div>
        : null
    )
}

export default InputPhone