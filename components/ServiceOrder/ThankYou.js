import React, { Component } from 'react'
import styles from '../../styles/AppShow.module.scss'



const ThankYou = (props) => {
    return (
        props.data.currentStep === 9 &&
        <div className={styles.screenWrapper}>
            <div className={styles.screenContentWrapper}>

                <div className={styles.bigImageWrapper}>
                    <img src={props.data.coverURL} />
                </div>
                <div className={styles.titleCenter}>
                    <h2> Thank you so much for your order!  </h2>
                </div>
                


            </div>



        </div>



    )
}

export default ThankYou




