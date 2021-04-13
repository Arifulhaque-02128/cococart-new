import React, { Component } from 'react';
import styles from '../styles/App.module.scss';

class Step10 extends Component {

    render() {
        if (this.props.currentStep !== 10) {
            return null
        }


        return (
            <form onSubmit={this.props.goNext}  className={`${styles.formGroup}`}>
                <label>How much is delivery?</label>
                <br/>
                <input
                    className={`${styles.formControl}`}
                    id="deliveryCost"
                    name="deliveryCost"
                    type="text"
                    placeholder="Enter deliveryCost"
                    value={this.props.deliveryCost} 
                    onChange={this.props.handleChange}
                />
                
            </form>
        )

    }
}

export default Step10