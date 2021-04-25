import React, { useState } from 'react';
import BankTransfer from './BankTransfer';
import Cash from './Cash';
import CreditAndDebit from './CreditAndDebit';
import Rocket from './Rocket';
import Bkash from './Bkash';
import Nagad from './Nagad';
import styles from './settings.module.css';
import PayoutSetting from '../PayOutSetting/PayoutSetting';

const Settings = ({shopID, setting}) => {
    const initialPaymentSetting = {
        card:{ minAmount: '0' },
        bkash: { accNumber: '', accType: '', paymentInstruction: 'Payment has to be completed within 30 minutes for your order to be processed.' },
        rocket: { accNumber: '', accType: '', paymentInstruction: 'Payment has to be completed within 30 minutes for your order to be processed.' },
        nagad: { accNumber: '', accType: '', paymentInstruction: 'Payment has to be completed within 30 minutes for your order to be processed.' },
        bankTransfer: { holderName: "", bank: "", branch: "", accNumber: "", paymentInstruction:"Payment has to be completed within 30 minutes for your order to be processed." },
        cash: { cashPayInstruction: 'We will collect cash on delivery or pickup.'}
    }
    const initialPayoutSetting = {payout_method: '', payout_info: {} }
    const retrievedPaymentSetting = setting[0]
    const [paymentSetting, setPaymentSetting] = useState(retrievedPaymentSetting || initialPaymentSetting)
    console.log("inside settings", paymentSetting)

    const retrievedPayoutSetting = setting[1]
    const [payoutSetting, setPayoutSetting] = useState(retrievedPayoutSetting || initialPayoutSetting)

    const [isSaved, setIsSaved] = useState(false)

    // const shopID = "";


    const handleSetting = () => {

        const data = [ paymentSetting, payoutSetting ];

        fetch(`http://localhost:3000/api/${shopID}`, {
        method: 'PUT', 
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
        })
        .then(response => response.json())
        .then(data => {
        console.log('Success:', data);
        })
        .catch((error) => {
        console.error('Error:', error);
        });

        // console.log(paymentSetting);
        // console.log(payoutSetting);
        
        setIsSaved(true)
        setTimeout(() => {setIsSaved(false)}, 2000)
    }

    return (
        <div className={styles.settingPage}>
            <div className={styles.container}>
                <div className={styles.leftSide}>
                    <h4>Payments</h4>
                    <p>Choose how customer pay</p>
                </div>
                <div>
                    <div className={styles.card}>
                        <CreditAndDebit setting={[paymentSetting, setPaymentSetting]} /> <br/>
                        <Bkash setting={[paymentSetting, setPaymentSetting]} /> <br/>
                        <Nagad setting={[paymentSetting, setPaymentSetting]} /> <br/>
                        <Rocket setting={[paymentSetting, setPaymentSetting]} /> <br/>
                        <BankTransfer setting={[paymentSetting, setPaymentSetting]} /> <br/>
                        <Cash setting={[paymentSetting, setPaymentSetting]} /> <br/>
                    </div>
                </div>
            </div>
            <div>
                <PayoutSetting setting={[payoutSetting, setPayoutSetting]} />
            </div>
            <div className={styles.saveBtn}>
                <button onClick={handleSetting}>Save</button>
            </div>
            <p className={styles.message}>{isSaved && "Saved Successfully..."}</p>
        </div>
    );
};

export default Settings;