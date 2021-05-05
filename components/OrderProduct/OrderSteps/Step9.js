import React from 'react';
import styles from '../Product.module.css';

const Step5 = ({info}) => {
    const {imageURL} = info;
    return (
        <div>
            <div className={styles.orderContainer}>
                <img className={styles.coverImg} src={imageURL} alt="cover_photo"/>
                <p className={styles.welcomeText}>Thank you for your order!</p>
            </div>
        </div>
    );
};

export default Step5;