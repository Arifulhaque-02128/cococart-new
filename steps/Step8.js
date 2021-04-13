import React, { Component } from 'react'
import styles from '../styles/App.module.scss';

class Step8 extends Component {

    render() {
        if (this.props.currentStep !== 8) {
            return null
        }


        return (
            <form onSubmit={this.props.goNext} className={`${styles.formGroup}`}>
                <label className={styles.formLabel}>How do customers receive their orders?</label>
                <br />
                <div className={styles.radioWrapper}>

                    <div className= {this.props.orderType === 'delivery' ? `${styles.radio}  ${styles.checked}` : styles.radio}>
                        <label>
                            <input
                                className={styles.formControl}
                                name="orderType"
                                id="radio-delivery"
                                type="radio"
                                checked={this.props.orderType === "delivery"}
                                value="delivery"
                                onChange={this.props.handleChange}

                            />

                        Delivery

                    </label>

                    </div>
                    <div className= {this.props.orderType === 'pickup' ? `${styles.radio}  ${styles.checked}` : styles.radio}>
                        <label>
                            <input
                                className={styles.formControl}
                                name="orderType"
                                type="radio"
                                checked={this.props.orderType === "pickup"}
                                value="pickup"
                                onChange={this.props.handleChange}
                            />
                        Pickup

                        </label>

                    </div>
                    <div className= {this.props.orderType === 'both' ? `${styles.radio}  ${styles.checked}` : styles.radio}>
                        <label>
                            <input
                                className={styles.formControl}
                                name="orderType"
                                type="radio"
                                checked={this.props.orderType === "both"}
                                value="both"
                                onChange={this.props.handleChange}
                            />
                        Both Delivery and Pickup

                        </label>

                    </div>
                </div>

            </form>
        )

    }
}

export default Step8