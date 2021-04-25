import React from 'react'
import styles from '../../styles/AppShow.module.scss'

const DateOption = (props) => {
    const handleClick = () => {
        alert('hi')
    }
    return (
        <button className={[styles.btn, styles.btnDate].join(' ')} onClick={handleClick}>
            <div className={styles.day}>
                <h1>{props.day}</h1>
            </div>
            <div className={styles.date}>
                <h1>{props.date}</h1>
            </div>
            <div className={styles.month}>
                <h1>{props.month}</h1>
            </div>
            



        </button>
    )
}

export default DateOption