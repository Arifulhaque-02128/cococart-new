import React, { useState } from 'react'
import styles from '../../styles/AppShow.module.scss'
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';

const First = () => {
    const [value, onChange] = useState(new (Date))
    console.log(value)
    return (
        <div className={styles.screenWrapper}>
            <div className={styles.screenContentWrapper}>

                <div>
                    <Calendar
                        onChange={onChange}
                        value={value}
                        minDate={new Date()}
                    />
                </div>
            </div>
        </div>
    )
}

export default First