import React, { Component } from 'react';
import styles from '../styles/App.module.scss';

class Step4 extends Component {

    render() {
        if (this.props.currentStep !== 4) {
            return null
        }


        return (
            <form onSubmit={this.props.goNext}  className={`${styles.formGroup}`}>
                <label>What is the price?</label>
                <br/>
                <input
                    className={`${styles.formControl}`}
                    id="price"
                    name="price"
                    type="text"
                    placeholder="Enter price"
                    value={this.props.price} 
                    onChange={this.props.handleChange}
                />
                
            </form>
        )

    }
}

export default Step4