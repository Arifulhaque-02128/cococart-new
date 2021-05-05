import { TextField } from '@material-ui/core';
import React, { useState } from 'react';
import styles from '../Service.module.css';

const Step3 = ({info, stepCount}) => {
    const [step, setStep] = stepCount;
    const [orderInfo, setOrderInfo] = info;

    const [isFb, setIsFb] = useState(false)
    const [isEmail, setIsEmail] = useState(false)
    const [isWhatsApp, setIsWhatsApp] = useState(false)
    const [isInstagram, setIsInstagram] = useState(false)

    return (
        <div>
            <div className={styles.orderContainer}>
                <div className={styles.clientInfo}>
                    <h2 style={{fontWeight: "500", fontSize: "24px"}}>How would you like to receive your order?</h2> <br/>
                    <p>Choose multiple if you want</p>
                </div>
                <br/> 
                <div className={styles.chooseBtn} onClick={() => setIsFb(!isFb)}>
                     Facebook 
                </div>
                {
                    isFb && <div>
                        <br/>
                        <TextField onChange={(e) => setOrderInfo({...orderInfo, fbAddress: e.target.value})} value={orderInfo.fbAddress} placeholder="Fb  Address" /> <br/>
                    </div>
                }
                <br/>
                <div onClick={() => setIsEmail(!isEmail)} className={styles.chooseBtn}>
                     Email 
                </div>
                {
                    isEmail && <div>
                        <br/> 
                        <TextField onChange={(e) => setOrderInfo({...orderInfo, emailAddress: e.target.value})} value={orderInfo.EmailAddress} placeholder="Email Address" />
                    </div>
                }
                <br/>
                <div onClick={() => setIsWhatsApp(!isWhatsApp)} className={styles.chooseBtn}>
                     Whats App 
                </div>
                {
                    isWhatsApp && <div>
                        <br/>
                        <TextField onChange={(e) => setOrderInfo({...orderInfo, whatsApp: e.target.value})} value={orderInfo.whatsApp} placeholder="Whats app number" />
                    </div>
                }
                <br/>
                <div className={styles.chooseBtn} onClick={() => setIsInstagram(!isInstagram)}>
                     Instagram 
                </div>
                {
                    isInstagram && <div>
                        <br/>
                        <TextField onChange={(e) => setOrderInfo({...orderInfo, instagramAddress: e.target.value})} value={orderInfo.instagramAddress} placeholder="Instagram  Address" />
                    </div>
                }
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