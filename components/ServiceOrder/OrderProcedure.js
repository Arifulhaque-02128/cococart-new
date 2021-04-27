import React, { Component } from 'react'
import styles from '../../styles/AppShow.module.scss'



const OrderProcedure = (props) => {
    return (
        props.data.currentStep === 4 &&
        <div className={styles.screenWrapper}>
            <div className={styles.screenContentWrapper}>
                <div className={styles.optionAnythingElse}>
                    <div className={styles.titleQues}>
                        <h2>How would you like to receive your order?</h2>
                    </div>

                    <button className={styles.btnMore} onClick={props.handleChange} value="email" name="orderProcedure">
                        Email
                        </button>
                    <button className={styles.btnMore} onClick={props.handleChange} value="whatsapp" name="orderProcedure">
                        WhatsApp
                        </button>
                    <button className={styles.btnMore} onClick={props.handleChange} value="instagram" name="orderProcedure">
                        Instagram
                        </button>
                    <button className={styles.btnMore} onClick={props.handleChange} value="facebook" name="orderProcedure">
                        Facebook
                        </button>
                </div>




            </div>
        </div>
    )
}

export default OrderProcedure




