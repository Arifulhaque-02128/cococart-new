import React from 'react'
import styles from '../../styles/AppShow.module.scss'
import DateOption from './DateOption'

const DateOptions = () => {
    // automate date 
    // more options
    
    return (
        <div className={styles.dateOptionsWrapper}>
            <DateOption day="Sun" date="18" month="April"/>
            <DateOption day="Mon" date="19" month="April"/>
            <DateOption day="Tue" date="20" month="April"/>
            <DateOption day="Wed" date="21" month="April"/>



        </div>
    )
}

export default DateOptions