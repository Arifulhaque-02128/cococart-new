import React from 'react';
import styles from '../Product.module.css';

const Step4 = ({info, stepCount}) => {
    const [step, setStep] = stepCount;
    const [orderInfo, setOrderInfo] = info;
    return (
        <div>
            <div className={styles.orderContainer}>
                <div className={styles.clientInfo}>
                    <h2 style={{fontWeight: "500", fontSize: "24px"}}>How would you like to make payment?</h2> <br/>
                </div>
                <br/> 
                <div className={`${orderInfo.payment_method === "card" ? styles.btnChosen : styles.chooseBtn}`} 
                    onClick={() => { setOrderInfo({...orderInfo, payment_method: "card"})}}
                >
                     Credit/Debit Card
                </div>
                <br/>
                <div className={`${orderInfo.payment_method === "bkash" ? styles.btnChosen : styles.chooseBtn}`}
                    onClick={() => { setOrderInfo({...orderInfo, payment_method: "bkash"})}}
                >  Bkash
                </div>
                <br/>
            </div>  
            <div className={styles.nextPrevBtn}>
                <div className={styles.btn}>
                    <button onClick={() => setStep(step-1)}> Prev </button>
                </div>
                <div className={styles.btn}>
                    <button onClick={() => { setStep(step+1)}} > Next </button>
                </div>
            </div> 
        </div>
    );
};

export default Step4;