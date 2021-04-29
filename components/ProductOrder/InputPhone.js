import React from 'react'
import styles from '../../styles/AppShow.module.scss'

const InputPhone = (props) => {
    return (
        props.data.currentStep === 8 ?
        <div className={styles.screenWrapper}>
            <div className={styles.screenContentWrapper}>
                <div className={styles.inputWrapper}>
                    <div className={styles.titleQues}>

                        <h2>What's your phone number?</h2>
                        <p>No spam. For order purposes only.</p>
                    </div>

                    <input
                        name="phone"
                        className={styles.input}
                        type="text"
                        placeholder="Enter here"
                        onChange={props.handleChange}
                        value={props.data.phone}
                    />
                </div>


            </div>



        </div>
        : null
    )
}

export default InputPhone