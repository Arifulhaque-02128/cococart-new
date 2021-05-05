import { TextField } from '@material-ui/core';
import React from 'react';
import styles from '../Product.module.css';

const Step4 = ({info, stepCount}) => {

    const [step, setStep] = stepCount;
    const [orderInfo, setOrderInfo] = info;

    return (
        <div>
            <br/> <br/> <br/>
            <div className={styles.orderContainer}> 
                <div className={styles.clientInfo}>
                    <h1>What's your phone number?</h1>
                    <p>No spam. For order purposes only.</p>
                    <br/>
                    <TextField onChange={(e) => setOrderInfo({...orderInfo, client_phone: e.target.value})} value={orderInfo.client_phone} placeholder="0178888..." />
                </div> 
            </div>
            <div className={styles.nextPrevBtn}>
                <div className={styles.btn}>
                    <button onClick={() => setStep(step-1)}> Prev </button>
                </div>
                <div className={styles.btn}>
                    <button onClick={() => setStep(step+1)}> Next </button>
                </div>
            </div>
        </div>
    );
};

export default Step4;