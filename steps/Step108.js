import React, { Component } from 'react'
import styles from '../styles/App.module.scss';

class Step108 extends Component {


    render() {
        if (this.props.data.currentStep !== 108) {
            return null
        }


        return (
            <form className={`${styles.formGroup}`} onSubmit={this.props.goNext}>
                <label>Copy and paste a Youtube link</label>
                <br/>
                <input
                    className={`{styles.formControl}`}
                    name="promoVideoLink"
                    type="text"
                    placeholder="https://www.youtube.com/watch?v..."
                    value={this.props.data.promoVideoLink}
                    onChange={this.props.handleChange} 
                />
            </form>
        )

    }
}

export default Step108