import React from 'react';
import BankTransfer from './BankTransfer';
import Cash from './Cash';
import CreditAndDebit from './CreditAndDebit';
import Rocket from './Rocket';
import Bkash from './Bkash';
import Nagad from './Nagad';
import styles from './settings.module.css';

const Settings = () => {
    return (
        <div className={styles.container}>
            <div className={styles.leftSide}>
                <h4>Payments</h4>
                <p>Choose how customer pay</p>
            </div>
            <div className={styles.card}>
                <CreditAndDebit /> <br/>
                <Bkash />
                <Nagad />
                <Rocket />
                <BankTransfer />
                <Cash />
            </div>
        </div>
    );
};

export default Settings;