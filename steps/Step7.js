import React, { Component } from 'react'
import styles from '../styles/App.module.scss';

class Step7 extends Component {

    render() {
        if (this.props.currentStep !== 7) {
            return null
        }


        return (
            <form onSubmit={this.props.goNext}  className={`${styles.formGroup}`}>
                <label className={styles.formLabel}>Do your customers order for a specific date?</label>
                <br />
                <div className={styles.radioWrapper}>

                    <div className={this.props.hasSpecificDate ? `${styles.radio}  ${styles.checked}` : styles.radio}>
                        <label>
                            <input
                                className={styles.formControl}
                                name="hasSpecificDate"
                                id="radio-delivery"
                                type="radio"
                                checked={this.props.hasSpecificDate}
                                value="true"
                                onChange={this.props.handleChange}

                            />

                        Yes

                    </label>

                    </div>
                    <div className={this.props.hasSpecificDate ? styles.radio : `${styles.radio}  ${styles.checked}`}>
                        <label>
                            <input
                                className={styles.formControl}
                                name="hasSpecificDate"
                                type="radio"
                                checked={!this.props.hasSpecificDate}
                                value="false"
                                onChange={this.props.handleChange}
                            />
                        No

                        </label>

                    </div>
                   
                </div>
                
            </form>
        )

    }
}

export default Step7