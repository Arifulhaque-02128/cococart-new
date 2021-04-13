import React, { Component } from 'react'
import styles from '../styles/App.module.scss';

class Step1 extends Component {


    render() {
        if (this.props.currentStep !== 1) {
            return null
        }


        return (
            <form className={`${styles.formGroup}`} onSubmit={this.props.goNext}>
                <label>What is the name of your shop?</label>
                <br/>
                <input
                    className={`{styles.formControl}`}
                    id="shopName"
                    name="shopName"
                    type="text"
                    placeholder="shop name"
                    value={this.props.shopName}
                    onChange={this.props.handleChange} 
                />
            </form>
        )

    }
}

export default Step1