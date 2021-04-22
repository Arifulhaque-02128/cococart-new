import React, { useState } from 'react';
import styles from './settings.module.css';
import Switch from '@material-ui/core/Switch';
import TextField from '@material-ui/core/TextField';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import Image from 'next/image'

const Rocket = ({setting}) => {

    const [paymentSetting, setPaymentSetting] = setting
    const { bkash } = paymentSetting
    const { accType, paymentInstruction, accNumber } = bkash;

    const [select, setSelect] = useState({
        switch: false,
      });
    
    return (
        <div className={styles.settingStyle}>
            <div>
                <Image
                    src="/bkash.svg"
                    alt="bKash"
                    width={50}
                    height={50}
                />
            </div>
            <div className={styles.midContainer}>
                <h4>bKash</h4>
                <p>Allow customers to pay you via bKash.</p>
                {
                    select.switch && <div>
                    <TextField onChange={(e) => setPaymentSetting({...paymentSetting, bkash: {...bkash, accNumber: e.target.value}})} className={styles.inputField} placeholder="01234567890" label="Account Number" /> <br/>

                    <FormControl className={styles.inputField} >
                        <InputLabel id="account-type">Account Type</InputLabel>
                        <Select
                            labelId="account-type"
                            value={accType}
                            onChange={(e) => setPaymentSetting({...paymentSetting, bkash: {...bkash, accType: e.target.value}})}
                        >
                            <MenuItem value={"Personal"}>Personal</MenuItem>
                            <MenuItem value={"Agent"}>Agent</MenuItem>
                            <MenuItem value={"Merchant"}>Merchant</MenuItem>
                        </Select>
                    </FormControl> <br/>

                    <TextField onChange={(e) => setPaymentSetting({...paymentSetting, bkash: {...bkash, paymentInstruction: e.target.value}})} className={styles.inputField}  label="Payment Instructions" value={paymentInstruction} multiline /> <br/>

                </div>
                }
            </div>
            <div>
                <Switch
                    checked={select.switch}
                    onChange={(e) => {
                            setSelect({...status, [e.target.name]: e.target.checked})
                            setPaymentSetting({...paymentSetting, bkash: { accNumber: '', accType: '', paymentInstruction: 'Payment has to be completed within 30 minutes for your order to be processed.' } })
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

export default Rocket;