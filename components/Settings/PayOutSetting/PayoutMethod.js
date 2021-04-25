import React, { useState } from 'react';
import {FaDollarSign} from 'react-icons/fa';
import TextField from '@material-ui/core/TextField';
import styles from './payoutSetting.module.css';
import Radio from '@material-ui/core/Radio';
import RadioGroup from '@material-ui/core/RadioGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import FormControl from '@material-ui/core/FormControl';

const PayoutMethod = ({setting}) => {

    const [payoutSetting, setPayoutSetting] = setting;
    const {payout_method, payout_info} = payoutSetting;

    console.log("inside payoutmethod", payout_method, payout_info)

    const [value, setValue] = useState(payout_method);

    const handleChange = (event) => {
        setValue(event.target.value);
        setPayoutSetting({...payoutSetting, payout_method: event.target.value})
    };
    return (
        <div className={`${styles.settingStyle}`}>
            <div>
                <FaDollarSign size={30} />
            </div>
            <div className={`${styles.midContainer}`}>
                <h4>Payout method</h4>
                <p>Collect cash from customers upon delivery or pickup.</p>
                
                
                <FormControl component="fieldset" className={`${styles.formControl}`}>
                    
                    <RadioGroup aria-label="gender" name="gender1" value={value} onChange={handleChange}>
                        <FormControlLabel value="bkash" control={<Radio />} label="bKash" />
                        <FormControlLabel value="bank" control={<Radio />} label="Bank Transfer" />
                    </RadioGroup> <br/>

                    <TextField value={payout_info.holder_name} onChange={ (e) => setPayoutSetting({...payoutSetting, payout_info: {...payout_info, holder_name: e.target.value } }) } className={styles.inputField}  placeholder="Account holder name" />
                    {
                        value === 'bank' && <div>
                            <TextField value={payout_info.bank_name} onChange={ (e) => setPayoutSetting({...payoutSetting, payout_info: {...payout_info, bank_name: e.target.value } }) } className={styles.inputField}  placeholder="Bank" /> <br/>
                            <TextField value={payout_info.branch_name}  onChange={ (e) => setPayoutSetting({...payoutSetting, payout_info: {...payout_info, branch_name: e.target.value } }) } className={styles.inputField}  placeholder="Branch" /> <br/>
                        </div>
                    }
                    <TextField value={payout_info.account_number} onChange={ (e) => setPayoutSetting({...payoutSetting, payout_info: {...payout_info, account_number: e.target.value } }) } className={styles.inputField}  placeholder="Account number" /> <br/>

                </FormControl>
                
            </div>
        </div>
    );
};

export default PayoutMethod;