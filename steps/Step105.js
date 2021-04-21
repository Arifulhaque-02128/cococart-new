import React, { Component } from 'react'
import styles from '../styles/App.module.scss';

class Step105 extends Component {


    render() {
        if (this.props.data.currentStep !== 105) {
            return null
        }


        return (
            <form className={`${styles.formGroup}`} onSubmit={this.props.goNext}>
                <label>Is it monthly or one time?</label>
                <br/>
                {/* <input
                    className={`{styles.formControl}`}
                    id="name"
                    name="name"
                    type="text"
                    placeholder="Enter here"
                    value={this.props.data.name}
                    onChange={this.props.handleChange} 
                /> */}
                <div className={styles.btnOptionWrapper}>
                    <button className={styles.btnOption1} name="isOneTime" value={false} onClick={this.props.handleChange}>
                    
                            Monthly Subscription
                        
                    </button>
                    <button className={styles.btnOption2} name="isOneTime" value={true} onClick={this.props.handleChange}>
                    
                            One Time Fee
                        
                    </button>
                    
                </div>
            </form>
        )

    }
}

export default Step105