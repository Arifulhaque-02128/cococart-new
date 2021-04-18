import React from 'react'
import styles from '../styles/AppShow.module.scss'
import IndividualOrder from './IndividualOrder'


const WantSomethingMore = (props) => {
    return (
        props.data.currentStep === 5 ?
        <div className={styles.screenWrapper}>
            <div className={styles.screenContentWrapper}>
                <div className={styles.orderSummary}>
                    <div className={styles.topSummary}>
                        <h2>Your order</h2>
                        <h2 className={styles.totalCost}>৳{props.data.totalCost}</h2>
                    </div>
                   <IndividualOrder />
                   <IndividualOrder />

                </div>

                <div className={styles.optionAnythingElse}>
                    <div className={styles.titleQues}>
                        <h2>Would you like something else?</h2>
                    </div>

                    <button className={styles.btnMore}>
                        Yes, I want more
                    </button>
                    <button className={styles.btnMore}>
                        That's all I need
                    </button>
                </div>


            </div>



        </div>
        : null
    )
}

export default WantSomethingMore