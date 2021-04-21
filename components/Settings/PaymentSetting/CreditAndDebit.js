import React, { useState } from 'react';
import {BiCreditCard} from 'react-icons/bi';
import styles from './settings.module.css';
import Switch from '@material-ui/core/Switch';
import TextField from '@material-ui/core/TextField';


const CreditAndDebit = ({setting}) => {
    
    const [paymentSetting, setPaymentSetting] = setting
    const { card } = paymentSetting
    const { minAmount } = card;

    const [select, setSelect] = useState({
        switch: false,
      });
    const [select2, setSelect2] = useState({
        switch2: false
    })
    
    return (
        <div className={styles.settingStyle}>
            <div>
                <BiCreditCard size={30} />
            </div>
            <div className={styles.midContainer}>
                <h4>Credit/Debit Card</h4>
                <p>Increase sales by accepting card payments. Over 70% of buyers prefer paying by card. Card fees apply. </p>
                {
                    select.switch && <div>
                        <Switch
                            checked={select2.switch2}
                            onChange={(e) => {
                                    setSelect2({...status, [e.target.name]: e.target.checked})
                                    setPaymentSetting({...paymentSetting, card:{ minAmount: '0' }})
                                }
                            }
                            color="primary"
                            name="switch2"
                            inputProps={{ 'aria-label': 'primary checkbox' }}
                        /> <span className={styles.switchLabel}>Minimum spend required</span>
                    </div>
                }
                {
                    (select2.switch2 && select.switch) && <div>
                        <p>Allow payment with credit/debit cards only for orders over this amount, excluding delivery.</p>
                        <span>৳</span>
                        <TextField onChange={(e) => setPaymentSetting({...paymentSetting, card: {...card, minAmount: e.target.value}}) } className={styles.cardField} value={minAmount} /> 
                    </div>
                }
            </div>
            <div>
                <Switch
                    checked={select.switch}
                    onChange={(e) => {
                            setSelect({...status, [e.target.name]: e.target.checked})
                            setPaymentSetting({...paymentSetting, card:{ minAmount: '0' }})
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

export default CreditAndDebit;