import React from 'react';
import styles from '../Service.module.css';

const Step5 = ({info}) => {
    const {coverURL} = info;
    return (
        <div>
            <div className={styles.orderContainer}>
                <img className={styles.coverImg} src={coverURL} alt="cover_photo"/>
                <p className={styles.welcomeText}>Thank you for your order!</p>
            </div>
        </div>
    );
};

export default Step5;