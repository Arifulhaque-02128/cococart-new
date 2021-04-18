import React, { useState } from 'react'
import styles from '../styles/AppShow.module.scss'
import DateOptions from './DateOptions'
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';

const OrderDate = (props) => {
    const [value, onChange] = useState(new (Date))

    return (
        props.data.currentStep === 2 ?
        <div className={styles.screenWrapper}>
            <div className={styles.screenContentWrapper}>
                <div className={styles.titleQues}>
                    <h2>When would you like to order for?</h2>
                    <p>Showing next available dates.</p>
                </div>

                <div className={styles.calenderView}>
                    <Calendar
                        onChange={onChange}
                        value={value}
                        minDate={new Date()}
                    />
                </div>
                {/* <DateOptions /> */}
                {/* <div className={styles.moreDatesWrapper}>
                    <button className={styles.btnMoreDates}>
                        More dates
                    </button>

                </div> */}



            </div>


            

        </div>
        :null
    )
}

export default OrderDate