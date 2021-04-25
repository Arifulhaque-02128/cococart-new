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
    const { nagad } = paymentSetting
    const { accType, paymentInstruction, accNumber } = nagad;

    const [select, setSelect] = useState({
        switch: accType?true:false,
      });
    
    return (
        <div className={styles.settingStyle}>
            <div>
            <Image
                src="/nagad.svg"
                alt="Nagad"
                width={50}
                height={50}
            />
            </div>
            <div  className={styles.midContainer}>
                <h4>Nagad</h4>
                <p>Allow customers to pay you via Nagad.</p>
                {
                    select.switch && <div>
                    <TextField value={accNumber} onChange={(e) => setPaymentSetting({...paymentSetting, nagad: {...nagad, accNumber: e.target.value}})} className={styles.inputField} placeholder="01234567890" label="Account Number" /> <br/>

                    <FormControl className={styles.inputField} >
                        <InputLabel id="account-type">Account Type</InputLabel>
                        <Select
                            labelId="account-type"
                            value={accType}
                            onChange={(e) => setPaymentSetting({...paymentSetting, nagad: {...nagad, accType: e.target.value}})}
                        >
                            <MenuItem value={"Personal"}>Personal</MenuItem>
                            <MenuItem value={"Agent"}>Agent</MenuItem>
                            <MenuItem value={"Merchant"}>Merchant</MenuItem>
                        </Select>
                    </FormControl> <br/>

                    <TextField onChange={(e) => setPaymentSetting({...paymentSetting, nagad: {...nagad, paymentInstruction: e.target.value}})} className={styles.inputField}  label="Payment Instructions" value={paymentInstruction} multiline /> <br/>

                </div>
                }
            </div>
            <div>
                <Switch
                    checked={select.switch}
                    onChange={(e) => {
                            setSelect({...status, [e.target.name]: e.target.checked})
                            setPaymentSetting({...paymentSetting, nagad: { accNumber: '', accType: '', paymentInstruction: 'Payment has to be completed within 30 minutes for your order to be processed.' } })
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