import React, { Component } from 'react'
import styles from '../../styles/AppShow.module.scss'



const Welcome = (props) => {
    // const goNext = () => {
    //     alert('yoho')
    // }
    return (
        props.data.currentStep === 1 &&
        <div className={styles.screenWrapper}>
            <div className={styles.screenContentWrapper}>

                <div className={styles.bigImageWrapper}>
                    <img src={props.data.coverURL} />
                </div>
                <div className={styles.titleCenter}>
                    <h2> Welcome to {props.data.name}'s Page  </h2>
                </div>
                <div className={styles.introWrapper}>
                    <a href={props.data.youtubeLink}>
                        <button className={styles.btnIntro}>
                            ► Play intro
                        </button>

                    </a>

                </div>

                <div className={styles.btnWrapper}>
                    <button className={[styles.btn, styles.btnOrder].join(' ')} onClick={props.goNext}>Order Now</button>

                </div>


            </div>



        </div>



    )
}

export default Welcome




