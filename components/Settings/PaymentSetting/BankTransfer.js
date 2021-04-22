import React, { useState } from 'react';
import {RiBankFill} from 'react-icons/ri';
import styles from './settings.module.css';
import Switch from '@material-ui/core/Switch';
import TextField from '@material-ui/core/TextField';

const BankTransfer = ({setting}) => {

    const [paymentSetting, setPaymentSetting] = setting
    const { bankTransfer } = paymentSetting
    const { holderName, branch, bank, accNumber, paymentInstruction } = bankTransfer;

    const [select, setSelect] = useState({
        switch: false,
      });

    return (
        <div className={styles.settingStyle}>
            <div>
                <RiBankFill size={30} />
            </div>
            <div className={styles.midContainer}>
                <h4>Bank Transfer</h4>
                <p>Receive payment via your bank account. </p>
                {
                    select.switch && <div>
                    <TextField onChange={(e) => setPaymentSetting({...paymentSetting, bankTransfer: {...bankTransfer, holderName: e.target.value} })} className={styles.inputField} placeholder="John Doe" label="Account Holder Name" /> <br/>
                    <TextField onChange={(e) => setPaymentSetting({...paymentSetting, bankTransfer: {...bankTransfer, bank: e.target.value} })} className={styles.inputField} placeholder="City Bank" label="Bank" /> <br/>
                    <TextField onChange={(e) => setPaymentSetting({...paymentSetting, bankTransfer: {...bankTransfer, branch: e.target.value} })} className={styles.inputField} label="Branch" /> <br/>
                    <TextField onChange={(e) => setPaymentSetting({...paymentSetting, bankTransfer: {...bankTransfer, accNumber: e.target.value} })} className={styles.inputField} placeholder="50600111118" label="Account Number" /> <br/>
                    <TextField onChange={(e) => setPaymentSetting({...paymentSetting, bankTransfer: {...bankTransfer, paymentInstruction: e.target.value} })} className={styles.inputField}  label="Payment Instructions" value={paymentInstruction} multiline /> <br/>

                </div>
                }
            </div>
            <div>
                <Switch
                    checked={select.switch}
                    onChange={(e) => {
                        setSelect({...status, [e.target.name]: e.target.checked})
                        setPaymentSetting({...paymentSetting, bankTransfer: { holderName: "", bank: "", branch: "", accNumber: "", paymentInstruction:"Payment has to be completed within 30 minutes for your order to be processed." } })
                        }
                    }
                    color="primary"
                    name="switch"
                    inputProps={{ 'aria-label': 'primary checkbox' }}
                />
            </div>
        </div>
    );
};

export default BankTransfer;