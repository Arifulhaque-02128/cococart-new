import React from 'react'
import styles from '../styles/AppShow.module.scss'

const Nav = (props) => {
    return (
        
        props.data.currentStep > 1 ? 
            <div className={styles.navButtons}>
                <button className={styles.btnPrev} onClick={props.goPrev}> Prev </button>
                {
                    props.data.currentStep < props.data.totalSteps ?
                        <button className={styles.btnNext} onClick={props.goNext}> Next </button>
                        : null
                }
            </div>
            : null
        

    )
}

export default Nav