import React, { useState } from 'react';
import {RiBankFill} from 'react-icons/ri';
import styles from './settings.module.css';
import Switch from '@material-ui/core/Switch';
import TextField from '@material-ui/core/TextField';

const BankTransfer = () => {
    const [select, setSelect] = useState({
        switch: false,
      });
    const [holderName, setHolderName] = useState("")
    const [bank, setBank] = useState("")
    const [branch, setBranch] = useState("")
    const [accNumber, setAccNumber] = useState("")
    const [paymentInstruction, setPaymentInstruction] = useState("Payment has to be completed within 30 minutes for your order to be processed.")
    return (
        <div className={styles.settingStyle}>
            <div>
                <RiBankFill size={30} />
            </div>
            <div>
                <h4>Bank Transfer</h4>
                <p>Receive payment via your bank account. </p>
                {
                    select.switch && <div>
                    <TextField onChange={(e) => setHolderName(e.target.value)} className={styles.inputField} placeholder="John Doe" label="Account Holder Name" /> <br/>
                    <TextField onChange={(e) => setBank(e.target.value)} className={styles.inputField} placeholder="City Bank" label="Bank" /> <br/>
                    <TextField onChange={(e) => setBranch(e.target.value)} className={styles.inputField} label="Branch" /> <br/>
                    <TextField onChange={(e) => setAccNumber(e.target.value)} className={styles.inputField} placeholder="50600111118" label="Account Number" /> <br/>
                    <TextField onChange={(e) => setPaymentInstruction(e.target.value)} className={styles.inputField}  label="Payment Instructions" value={paymentInstruction} multiline /> <br/>

                </div>
                }
            </div>
            <div>
                <Switch
                    checked={select.switch}
                    onChange={(e) => setSelect({...status, [e.target.name]: e.target.checked})}
                    color="primary"
                    name="switch"
                    inputProps={{ 'aria-label': 'primary checkbox' }}
                />
            </div>
        </div>
    );
};

export default BankTransfer;