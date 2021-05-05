import React from 'react';
import styles from '../Product.module.css';

const Step1 = ({info, stepCount}) => {
    console.log(info)

    const {imageURL, shopName, price} = info;
    const [step, setStep] = stepCount
    return (
        <div>
            <div className={styles.orderContainer}>
                <div className={styles.productContainer}>
                    <img className={styles.coverImg} src={imageURL} alt="cover_photo"/>
                    <p style={{textAlign: "center"}}>Price: ৳{price} </p>
                </div>
                <p className={styles.welcomeText}>Welcome to <span className={styles.serviceOwner}> {shopName}</span>'s page </p>
                <div className={styles.btn}>
                   <button onClick={() => setStep(1)}> Order Now</button>
                </div>
            </div>
            <div className={styles.nextPrevBtn}>
                <div className={styles.btn}>
                    <button onClick={() => setStep(step+1)}> Next </button>
                </div>
            </div>
        </div>
    );
};

export default Step1;