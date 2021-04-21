import React, { Component } from 'react'
import styles from '../styles/App.module.scss';

class Step111 extends Component {


    render() {
        if (this.props.data.currentStep !== 111) {
            return null
        }


        return (
            <form className={`${styles.formGroup}`} onSubmit={this.props.handleSubmit}>
                <label>And lastly, what is your email?</label>
                <br/>
                <input
                    className={`{styles.formControl}`}
                    name="email"
                    type="text"
                    placeholder="you@gmail.com"
                    value={this.props.data.email}
                    onChange={this.props.handleChange} 
                />
            </form>
        )

    }
}

export default Step111