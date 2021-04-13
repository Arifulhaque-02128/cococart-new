import React, { Component } from 'react';
import styles from '../styles/App.module.scss';

class Step2 extends Component {


    render() {
        if (this.props.currentStep !== 2) {
            return null
        }


        return (
            <form onSubmit={this.props.goNext}  className={`${styles.formGroup}`}>
                <label>What are you selling?</label>
                <br/>
                <input
                    className={`${styles.formControl}`}
                    id="productName"
                    name="productName"
                    type="text"
                    placeholder="product name"
                    value={this.props.email} 
                    onChange={this.props.handleChange}
                />
            </form>
        )

    }
}

export default Step2