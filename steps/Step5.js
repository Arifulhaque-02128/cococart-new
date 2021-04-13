import React, { Component } from 'react';
import styles from '../styles/App.module.scss';

class Step5 extends Component {

    render() {
        if (this.props.currentStep !== 5) {
            return null
        }


        return (
            <form onSubmit={this.props.goNext} className={`${styles.formGroup}`}>

                <label className={styles.formLabel}>Does your product come with different options?</label>
                <br />
                <div className={styles.radioWrapper}>

                    <div className={this.props.hasOptions ? `${styles.radio}  ${styles.checked}` : styles.radio}>
                        <label>
                            <input
                                className={styles.formControl}
                                name="hasOptions"
                                id="radio-delivery"
                                type="radio"
                                checked={this.props.hasOptions}
                                value="true"
                                onChange={this.props.handleChange}

                            />

                        Yes

                    </label>

                    </div>
                    <div className={this.props.hasOptions ? styles.radio : `${styles.radio}  ${styles.checked}`}>
                        <label>
                            <input
                                className={styles.formControl}
                                name="hasOptions"
                                type="radio"
                                checked={!this.props.hasOptions}
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

export default Step5