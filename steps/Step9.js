import React, { Component } from 'react'
import styles from '../styles/App.module.scss';

class Step9 extends Component {

    render() {
        if (this.props.currentStep !== 9) {
            return null
        }


        return (
            <form onSubmit={this.props.goNext} className={`${styles.formGroup}`}>
                <label className={styles.formLabel}>Do you charge a delivery fee?</label>
                <br />
                <div className={styles.radioWrapper}>

                    <div className= {this.props.hasDeliveryFee ? `${styles.radio}  ${styles.checked}` : styles.radio}>
                        <label>
                            <input
                                className={styles.formControl}
                                name="hasDeliveryFee"
                                id="radio-delivery"
                                type="radio"
                                checked={this.props.hasDeliveryFee === "delivery"}
                                value="true"
                                onChange={this.props.handleChange}

                            />

                        Yes

                    </label>

                    </div>
                    <div className= {this.props.hasDeliveryFee ? styles.radio : `${styles.radio}  ${styles.checked}` }>
                        <label>
                            <input
                                className={styles.formControl}
                                name="hasDeliveryFee"
                                type="radio"
                                checked={this.props.hasDeliveryFee === "pickup"}
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

export default Step9