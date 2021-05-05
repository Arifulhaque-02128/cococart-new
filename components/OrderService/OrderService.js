import React, { useState } from 'react';
import Step1 from './OrderSteps/Step1';
import Step2 from './OrderSteps/Step2';
import Step3 from './OrderSteps/Step3';
import Step4 from './OrderSteps/Step4';
import Step5 from './OrderSteps/Step5';
import styles from './Service.module.css';

const Order = ({shopInfo}) => {

    console.log(shopInfo)
    const [step, setStep] = useState(0)
    const [orderInfo, setOrderInfo] = useState({
        client_name: '',
        fbAddress: '',
        emailAddress: '',
        whatsApp: '',
        instagramAddress: '',
        payment_method: '',
    })

    if (step === 8) {
        console.log(orderInfo)
    }

    return (
        <div className={styles.order}>
            {
                (step === 0) && <Step1 info={shopInfo} stepCount={[step, setStep]} />
                
            }
            {
                (step === 1) && <Step2 info={[orderInfo, setOrderInfo]} stepCount={[step, setStep]} />

            }
            {
                (step === 2) && <Step3 info={[orderInfo, setOrderInfo]} stepCount={[step, setStep]} />

            }
            {
                (step === 3) && <Step4 info={[orderInfo, setOrderInfo]} stepCount={[step, setStep]} />

            }
            {
                (step === 4) && <Step5 info={shopInfo} />

            }
        </div>
    );
};

export default Order;