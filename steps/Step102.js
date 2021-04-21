import React, { Component } from 'react'
import styles from '../styles/App.module.scss';

class Step102 extends Component {


    render() {
        if (this.props.data.currentStep !== 102) {
            return null
        }


        return (
            <form className={`${styles.formGroup}`} onSubmit={this.props.goNext}>
                <label>What service do you want to sell?</label>
                <p className={styles.subLabel}>Enter a card name</p>
                <br/>
                <input
                    className={`{styles.formControl}`}
                    id="serviceName"
                    name="serviceName"
                    type="text"
                    placeholder="Join my exclusive community"
                    value={this.props.data.serviceName}
                    onChange={this.props.handleChange} 
                />
            </form>
        )

    }
}

export default Step102