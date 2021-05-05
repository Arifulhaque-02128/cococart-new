import { TextField } from '@material-ui/core';
import React from 'react';
import styles from '../Service.module.css';

const Step2 = ({info, stepCount}) => {
    
    const [step, setStep] = stepCount;
    const [orderInfo, setOrderInfo] = info;

    return (
        <div>
            <br/> <br/> <br/>
            <div className={styles.orderContainer}>
                <div className={styles.clientInfo}>
                    <h1>What is Your Name?</h1> <br/>
                    <TextField onChange={(e) => setOrderInfo({...orderInfo, clientInfo: e.target.value})} value={orderInfo.client_name} label="Name" placeholder="Phil John" />
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

export default Step2;