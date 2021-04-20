import Router from 'next/dist/next-server/lib/router/router';
import React, { Component } from 'react';
import styles from '../styles/App.module.scss';

class Step13 extends Component {

    
    render() {
        return (
            <div className={styles.lastPageWrapper}>
                <h1 className={styles.heading}>Your shop is ready!</h1>

                <div className={styles.mainContent}>
                    <div className={styles.linkAndNext}>
                        <div className={styles.linkWrapper}>
                            <h3>Share your link</h3>
                            <div className={styles.link}>
                                <p className={styles.linkText}>https://eedfsdfsf.cococart.co</p>

                                <button className={styles.btnVisitShop}>visit shop</button>

                            </div>
                        </div>
                        <div className={styles.nextWrapper}>
                            <h3>What's next</h3>
                            <div className={styles.btnWrapper}>
                                <button className={styles.btnAddMore}>
                                    <img src="/cart.png" />
                                    <h3 className={styles.addMore}>Add More</h3>
                                </button>
                                <button className={styles.btnPayment}>
                                    <img src="/payment.png" />

                                    <h3>Set Payment Method</h3>
                                </button>
                            </div>
                        </div>
                    </div>

                    <div className={styles.summaryWrapper}>

                    </div>
                </div>
            </div>

        )

    }
}

export default Step13