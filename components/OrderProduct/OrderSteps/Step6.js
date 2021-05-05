import React from 'react';
import styles from '../Product.module.css';


const Step6 = ({info, stepCount}) => {
    const [step, setStep] = stepCount;
    const [orderInfo, setOrderInfo] = info;
    return (
        <div>
            <div className={styles.orderContainer}>
                <div className={styles.clientInfo}>
                    <h2 style={{fontWeight: "500", fontSize: "24px"}}>Is this a gift?</h2> <br/>
                </div>
                <br/> 
                <div className={`${orderInfo.isGift === "yes" ? styles.btnChosen : styles.chooseBtn}`} 
                    onClick={() => { setOrderInfo({...orderInfo, isGift: "yes"})}}
                >
                    Yes
                </div>
                <br/>
                <div className={`${orderInfo.isGift === "no" ? styles.btnChosen : styles.chooseBtn}`}
                    onClick={() => { setOrderInfo({...orderInfo, isGift: "no"})}}
                >
                    No
                </div>
                <br/>
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

export default Step6;