import React, { Component } from 'react'
import styles from '../styles/App.module.scss';

class Step104 extends Component {


    render() {
        if (this.props.data.currentStep !== 104) {
            return null
        }


        return (
            <form className={`${styles.formGroup}`} onSubmit={this.props.goNext}>
                <label>What is the price?</label>
                <br/>
                <input
                    className={`{styles.formControl}`}
                    id="price"
                    name="price"
                    type="text"
                    placeholder="99"
                    value={this.props.data.price}
                    onChange={this.props.handleChange} 
                />
            </form>
        )

    }
}

export default Step104