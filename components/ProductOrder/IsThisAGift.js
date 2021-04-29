import React from 'react'
import styles from '../../styles/AppShow.module.scss'

const IsThisAGift = (props) => {
    return (
        props.data.currentStep === 9 ?
            <div className={styles.screenWrapper}>
                <div className={styles.screenContentWrapper}>
                    <div className={styles.giftWrapper}>
                        <div className={styles.titleQues}>
                            <h2>Is this a gift for someone?</h2>
                        </div>

                        <button
                            name="isGift"
                            className={styles.btnGift}
                            value={true}
                            onClick={props.handleChange}
                        >
                            Yes
                    </button>
                        <button
                            name="isGift"
                            className={styles.btnGift}
                            value={false}
                            onClick={props.handleChange}
                        >
                            No
                    </button>

                    </div>

                </div>



            </div>
            : null
    )
}

export default IsThisAGift