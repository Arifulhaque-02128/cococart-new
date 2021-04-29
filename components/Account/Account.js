import React, { useState } from 'react';
import styles from './Account.module.css';
import AccountDetails from './AccountDetails';

const Account = ({shopID, details}) => {
    const retrievedUserName = details.userName
    const retrievedEmail = details.email
    console.log("inside acc=", retrievedEmail, retrievedUserName)
    const [accountDetails, setAccountDetails] = useState({userName: retrievedUserName || "", email: retrievedEmail || ""})

    const [isSaved, setIsSaved] = useState(false)


    const handleSave = () =>{

        const data = {userName : accountDetails.userName, email: accountDetails.email, isAccountCreation: true }
        console.log(data)
        fetch(`http://localhost:3000/api/${shopID}`, {
        method: 'PUT', 
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
        })
        .then(response => response.json())
        .then(data => {
        console.log('Success:', data);
        })
        .catch((error) => {
        console.error('Error:', error);
        });

        setIsSaved(true)
        setTimeout(() => {setIsSaved(false)}, 5000)
    }

    return (
        <div className={styles.container}>
            <div className={styles.leftSide}>
                <h4>Account</h4>
                <p>Update your account details</p>
            </div>
            <div>
                <div className={styles.card}>
                    <AccountDetails accountInfo = {[accountDetails, setAccountDetails]} />
                </div>
                <div className={styles.saveBtn}>
                    <button
                     onClick={handleSave}
                    >
                        Save
                    </button>
                </div>
                <p className={styles.message}>{isSaved && "Saved Successfully..."}</p>
            </div>
        </div>
    );
};

export default Account;