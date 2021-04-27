import React from 'react';
import {BsPeopleCircle} from 'react-icons/bs';
import {MdEmail} from 'react-icons/md';
import TextField from '@material-ui/core/TextField';
import styles from './Account.module.css';

const AccountDetails = ({accountInfo}) => {
    const [accountDetails, setAccountDetails] = accountInfo
    const {userName, email} = accountDetails
    return (
        <div>
            <div className={`${styles.accountStyle}`}>
                <div>
                    <BsPeopleCircle size={30} />
                </div>
                <div className={`${styles.midContainer}`}>
                    <h4>Your name</h4>
                    <TextField value={userName} onChange={ (e) => setAccountDetails({...accountDetails, userName: e.target.value})} className={styles.inputField}  placeholder="Coco" /> <br/>
                </div>
            </div>
            <div className={`${styles.accountStyle}`}>
                <div>
                    <MdEmail size={30} />
                </div>
                <div className={`${styles.midContainer}`}>
                    <h4>Email</h4>
                    <TextField value={email} onChange={ (e) => setAccountDetails({...accountDetails, email: e.target.value})} className={styles.inputField}  placeholder="coco@gmail.com" /> <br/>
                </div>
            </div>
        </div>
    );
};

export default AccountDetails;