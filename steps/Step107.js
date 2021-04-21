import React, { Component } from 'react'
import styles from '../styles/App.module.scss';

class Step107 extends Component {
    handleSubmit = (event) => {
        event.preventDefault()
    }

    render() {
        if (this.props.data.currentStep !== 107) {
            return null
        }


        return (
            <form className={`${styles.formGroup}`} onSubmit={this.props.goNext}>
                <label>Do you have a video to share?</label>
                <p className={styles.subLabel}>An intro video will attract more subscribers</p>
                <br/>
                <div className={styles.btnOptionWrapper}>
                    <button className={styles.btnOption1} name="haveVideo" value="true" onClick={this.props.handleChange}>
                    
                            Yes
                        
                    </button>
                    <button className={styles.btnOption2} name="haveVideo" value="false" onClick={this.props.handleChange}>
                    
                            No
                        
                    </button>
                    
                </div>
            </form>
        )

    }
}

export default Step107