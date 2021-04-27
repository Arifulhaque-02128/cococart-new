import React from 'react'
import styles from '../../styles/AppShow.module.scss'



const Options = (props) => {
    return (
        props.data.currentStep === 2 &&
        <div className={styles.screenWrapper}>
            <div className={styles.screenContentWrapper}>
                <div className={styles.titleCenter}>
                    <h2> What would you like to buy?  </h2>
                </div>

                <div className={styles.optionCard}>
                    <div className={styles.descriptionWrapper}>
                        <h3 className={styles.title}>{props.data.serviceName}</h3>
                        <p className={styles.description}>{props.data.cardDescription}</p>
                    </div>
                    <div className={styles.divider}></div>
                    <div className={styles.priceWrapper}>
                        <h3 className={styles.price}>৳{props.data.price}</h3>
                        <p>monthly</p>
                    </div>
                </div>




            </div>
        </div>
    )
}

export default Options




