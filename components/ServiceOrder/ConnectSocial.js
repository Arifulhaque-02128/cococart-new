import React, { Component } from 'react'
import styles from '../../styles/AppShow.module.scss'



const OrderProcedure = (props) => {
    return (
        props.data.currentStep === 7 &&
        <div className={styles.screenWrapper}>
            <div className={styles.screenContentWrapper}>
                <div className={styles.optionAnythingElse}>
                    <div className={styles.titleQues}>
                        <h2>Connect your social?</h2>
                        <p>We will use it to fetch your profile link</p>
                    </div>

                    <button className={styles.btnMore}  value="instagram" name="orderProcedure">
                        Instagram
                        </button>
                    <button className={styles.btnMore}  value="facebook" name="orderProcedure">
                        Facebook
                        </button>
                </div>




            </div>
        </div>
    )
}

export default OrderProcedure




