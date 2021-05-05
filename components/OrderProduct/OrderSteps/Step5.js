import React from 'react';
import styles from '../Product.module.css';
import { TextField } from '@material-ui/core';

const Step5 = ({info, stepCount, deliveryCost}) => {
    const [step, setStep] = stepCount;
    const [orderInfo, setOrderInfo] = info;
    return (
        <div>
            <div className={styles.orderContainer}>
                <div className={styles.clientInfo}>
                    <h2 style={{fontWeight: "500", fontSize: "24px"}}>How would you like to receive your order?</h2> <br/>
                </div>
                <br/> 
                <div className={`${orderInfo.receive_via === "delivery" ? styles.btnChosen : styles.chooseBtn}`} 
                    onClick={() => { setOrderInfo({...orderInfo, receive_via: "delivery"})}}
                >
                    <span> Delivery</span>
                    <span style={{color: "gray"}}>৳{deliveryCost}</span>
                </div>
                {
                    orderInfo.receive_via === "delivery" && <div>
                        <br/> 
                        <h4> What's the delivery address?</h4>
                        <p>Delivery fee is ৳{deliveryCost} </p>
                        <TextField onChange={(e) => setOrderInfo({...orderInfo, delivery_address: e.target.value})} value={orderInfo.delivery_address} placeholder="12/2 Bashundara, Dhaka" />
                    </div>
                }
                <br/>
                <div className={`${orderInfo.receive_via === "pickup" ? styles.btnChosen : styles.chooseBtn}`}
                    onClick={() => { setOrderInfo({...orderInfo, receive_via: "pickup"})}}
                >
                    <span> Pickup</span>
                    <span style={{color: "gray"}}>free</span>
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

export default Step5;