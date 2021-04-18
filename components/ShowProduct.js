import React from 'react'
import styles from '../styles/AppShow.module.scss'

const ShowProduct = (props) => {
    return (
        props.data.currentStep === 1 ?
        <div className={styles.screenWrapper}>
            <div className={styles.screenContentWrapper}>

                <div className={styles.bigImageWrapper}>
                    <img src={props.data.imageURL} />
                </div>
                <div className={styles.titleCenter}>
                    <h2> Welcome to {props.data.shopName} </h2>
                </div>

                <div className={styles.btnWrapper}>
                    <button className={[styles.btn, styles.btnOrder].join(' ')} onClick={props.goNext}>Order Now</button>

                </div>


            </div>



        </div>
        : null
    )
}

export default ShowProduct