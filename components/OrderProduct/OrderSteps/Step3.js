import { TextField } from '@material-ui/core';
import React from 'react';
import styles from '../Product.module.css';

const Step3 = ({info, stepCount}) => {

    const [step, setStep] = stepCount;
    const [orderInfo, setOrderInfo] = info;

    return (
        <div>
            <br/> <br/> <br/>
            <div className={styles.orderContainer}> 
                <div className={styles.clientInfo}>
                    <h1>What's your name?</h1> <br/>
                    <TextField onChange={(e) => setOrderInfo({...orderInfo, client_name: e.target.value})} value={orderInfo.client_name} label="Name" placeholder="John Doe" />
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

export default Step3;