import React from 'react'
import styles from '../styles/AppShow.module.scss'

const IsThisAGift = (props) => {
    return (
        props.data.currentStep === 8 ?
        <div className={styles.screenWrapper}>
            <div className={styles.screenContentWrapper}>
                <div className={styles.giftWrapper}>
                    <div className={styles.titleQues}>
                        <h2>Is this a gift for someone?</h2>
                    </div>

                    <button className={styles.btnGift}>
                        Yes
                    </button>
                    <button className={styles.btnGift}>
                        No
                    </button>

                </div>

            </div>



        </div>
        : null
    )
}

export default IsThisAGift