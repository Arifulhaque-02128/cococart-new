import React, { useState } from 'react';
import styles from './Product.module.css';
import Step1 from './OrderSteps/Step1';
import Step2 from './OrderSteps/Step2';
import Step3 from './OrderSteps/Step3';
import Step4 from './OrderSteps/Step4';
import Step5 from './OrderSteps/Step5';
import Step6 from './OrderSteps/Step6';
import Step7 from './OrderSteps/Step7';
import Step8 from './OrderSteps/Step8';
import Step9 from './OrderSteps/Step9';

const OrderProduct = ({shopInfo}) => {

    // console.log(shopInfo)

    const [step, setStep] = useState(0)
    const [orderInfo, setOrderInfo] = useState({
        product_amount: "1",
        client_name: "",
        client_phone: "",
        receive_via: "",
        // cost: (shopInfo.deliveryCost + (shopInfo.price * orderInfo.product_amount)),
        isGift: "",
        client_email: "",
        payment_method: ""
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
                (step === 4) && <Step5 info={[orderInfo, setOrderInfo]} deliveryCost={shopInfo.deliveryCost} stepCount={[step, setStep]} />
                
            }
            {
                (step === 5) && <Step6 info={[orderInfo, setOrderInfo]} stepCount={[step, setStep]} />
                
            }
            {
                (step === 6) && <Step7 info={[orderInfo, setOrderInfo]} stepCount={[step, setStep]} />
                
            }
            {
                (step === 7) && <Step8 info={[orderInfo, setOrderInfo]} stepCount={[step, setStep]} />
                
            }
            {
                (step === 8) && <Step9 info={shopInfo} />
                
            }

        </div>
    );
};

export default OrderProduct;