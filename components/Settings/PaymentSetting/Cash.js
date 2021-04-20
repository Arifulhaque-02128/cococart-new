import React, { useState } from 'react';
import {FaDollarSign} from 'react-icons/fa';
import styles from './settings.module.css';
import Switch from '@material-ui/core/Switch';
import TextField from '@material-ui/core/TextField';

const Cash = () => {
    const [select, setSelect] = useState({
        switch: false,
      });
    const [cashPayInstruction, setCashPayInstruction] = useState("We will collect cash on delivery or pickup.")
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
                         <TextField onChange={(e) => setCashPayInstruction(e.target.value)} className={styles.inputField}  label="Payment Instructions" value={cashPayInstruction} multiline /> <br/>
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

export default Cash;