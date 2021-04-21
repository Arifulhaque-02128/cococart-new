import React, { Component } from 'react'
import styles from '../styles/App.module.scss';

class Step109 extends Component {


    render() {
        if (this.props.data.currentStep !== 109) {
            return null
        }


        return (
            <form className={`${styles.formGroup}`} onSubmit={this.props.goNext}>
                <label>Do you want to link your social?</label>
                <p className={styles.subLabel}>Linking your social accounts gives you credibility</p>
                <br/>
                <div className={styles.btnOptionWrapper}>
                    <button className={styles.btnOption1} name="wantSocial" value="true" onClick={this.props.handleChange}>
                    
                            Yes
                        
                    </button>
                    <button className={styles.btnOption2} name="wantSocial" value="false" onClick={this.props.handleChange}>
                    
                            No
                        
                    </button>
                    
                </div>
            </form>
        )

    }
}

export default Step109