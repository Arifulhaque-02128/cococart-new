import React, { useState } from 'react';
import {FaTelegramPlane} from 'react-icons/fa';
import styles from './settings.module.css';
import Switch from '@material-ui/core/Switch';
import TextField from '@material-ui/core/TextField';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';

const Rocket = () => {

    const [select, setSelect] = useState({
        switch: false,
      });
    const [accNumber, setAccNumber] = useState("")
    const [accType, setAccType] = useState("")
    const [paymentInstruction, setPaymentInstruction] = useState("Payment has to be completed within 30 minutes for your order to be processed.")

    console.log(accType)
    
    return (
        <div className={styles.settingStyle}>
            <div>
                <FaTelegramPlane size={30} />
            </div>
            <div>
                <h4>Nagad</h4>
                <p>Allow customers to pay you via Nagad.</p>
                {
                    select.switch && <div>
                    <TextField onChange={(e) => setAccNumber(e.target.value)} className={styles.inputField} placeholder="01234567890" label="Account Number" /> <br/>

                    <FormControl className={styles.inputField} >
                        <InputLabel id="account-type">Account Type</InputLabel>
                        <Select
                            labelId="account-type"
                            value={accType}
                            onChange={(e) => setAccType(e.target.value)}
                        >
                            <MenuItem value={"Personal"}>Personal</MenuItem>
                            <MenuItem value={"Agent"}>Agent</MenuItem>
                            <MenuItem value={"Merchant"}>Merchant</MenuItem>
                        </Select>
                    </FormControl> <br/>

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

export default Rocket;