import { TextField } from '@material-ui/core';
import React from 'react';
import styles from '../Product.module.css';

const Step7 = ({info, stepCount}) => {

    const [step, setStep] = stepCount;
    const [orderInfo, setOrderInfo] = info;

    return (
        <div>
            <br/> <br/> <br/>
            <div className={styles.orderContainer}> 
                <div className={styles.clientInfo}>
                    <h1>And finally, what's your email??</h1>
                    <p> Your order confirmation will be sent here. </p>
                    <br/>
                    <TextField onChange={(e) => setOrderInfo({...orderInfo, client_email: e.target.value})} value={orderInfo.client_email} placeholder="coco@gmail.com" />
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

export default Step7;