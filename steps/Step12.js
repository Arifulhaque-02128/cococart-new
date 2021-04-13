import React, { Component } from 'react';
import styles from '../styles/App.module.scss';

class Step12 extends Component {

    render() {
        if (this.props.currentStep !== 12) {
            return null
        }


        return (
            <form onSubmit={this.props.handleSubmit}  className={styles.formGroup}>
                <label>And lastly, what is your email?</label>
                <br/>
                <input
                    className={`${styles.formControl}`}
                    id="email"
                    name="email"
                    type="text"
                    placeholder="Enter email"
                    value={this.props.email} 
                    onChange={this.props.handleChange}
                />
                
            </form>
        )

    }
}

export default Step12