import React from 'react'
import styles from '../styles/AppShow.module.scss'

const IndividualOrder = () => {
    return (
        <div className={styles.productWrapper}>
            <div className={styles.productDetails}>
                <div className={styles.imageHolder}>
                    <img src="/cactu.jpeg" />
                </div>



            </div>
            <div className={styles.product}>
                <p>cactus</p>
                <p>৳200</p>
            </div>
            <div className={styles.calculate}>
                <button className={styles.btnCalculate}>
                    +
                </button>
                <h2>2</h2>
                <button className={styles.btnCalculate}>
                    -
                </button>
            </div>
        </div>
    )
}

export default IndividualOrder