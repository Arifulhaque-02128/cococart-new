import React from 'react';
import PayoutMethod from './PayoutMethod';
import styles from './payoutSetting.module.css';

const PayoutSetting = ({setting}) => {
    return (
        <div className={styles.container}>
            <div className={styles.leftSide}>
                <h4>Earnings</h4>
                <p>Choose how you receive your payouts</p>
            </div>
            <div>
                <div className={styles.card}>
                    <PayoutMethod setting={setting} />
                </div>
            </div>
        </div>
    );
};

export default PayoutSetting;