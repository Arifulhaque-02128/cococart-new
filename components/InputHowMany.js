import React from 'react'
import styles from '../styles/AppShow.module.scss'

const HowMany = (props) => {
    return (
        props.data.currentStep === 4 ?
        <div className={styles.screenWrapper}>
            <div className={styles.screenContentWrapper}>
                <div className={styles.inputWrapper}>
                    <div className={styles.titleQues}>

                        <h2>And how many would you like?</h2>
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

export default HowMany