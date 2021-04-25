import React, { useState } from 'react';
import {FaDollarSign} from 'react-icons/fa';
import styles from './settings.module.css';
import Switch from '@material-ui/core/Switch';
import TextField from '@material-ui/core/TextField';

const Cash = ({setting}) => {

    const [paymentSetting, setPaymentSetting] = setting
    const { cash } = paymentSetting
    const { cashPayInstruction } = cash;

    const [select, setSelect] = useState({
        switch: cashPayInstruction ? true : false,
      });

    return (
        <div className={styles.settingStyle}>
            <div>
                <FaDollarSign size={30} />
            </div>
            <div className={styles.midContainer}>
                <h4>Cash</h4>
                <p>Collect cash from customers upon delivery or pickup.</p>
                {
                     select.switch && <div>
                         <TextField onChange={(e) => setPaymentSetting({...paymentSetting, cash: {...cash, cashPayInstruction: e.target.value} })} className={styles.inputField}  label="Payment Instructions" value={cashPayInstruction} multiline /> <br/>
                     </div>
                }
            </div>
            <div>
                <Switch
                    checked={select.switch}
                    onChange={(e) => {
                            setSelect({...status, [e.target.name]: e.target.checked})
                            setPaymentSetting({...paymentSetting, cash: { cashPayInstruction: 'We will collect cash on delivery or pickup.'} })
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

export default Cash;