import { TextField } from '@material-ui/core';
import React from 'react';
import styles from '../Product.module.css';

const Step2 = ({info, stepCount}) => {

    const [step, setStep] = stepCount;
    const [orderInfo, setOrderInfo] = info;

    return (
        <div>
            <br/> <br/> <br/>
            <div className={styles.orderContainer}> 
                <div className={styles.clientInfo}>
                    <h1>How many Cookies would you like?</h1> <br/>
                    <TextField onChange={(e) => setOrderInfo({...orderInfo, product_amount: e.target.value})} value={orderInfo.product_amount} placeholder="Enter the number" />
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