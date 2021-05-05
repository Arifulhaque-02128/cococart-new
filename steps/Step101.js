import React, { Component } from 'react'
import styles from '../styles/App.module.scss';

class Step101 extends Component {


    render() {
        if (this.props.data.currentStep !== 101) {
            return null
        }


        return (
            
            <form className={`${styles.formGroup}`} onSubmit={this.props.goNext}>
                <label>What is your name?</label>
                <br/>
                <input
                    className={`{styles.formControl}`}
                    id="name"
                    name="name"
                    type="text"
                    placeholder="Enter here"
                    value={this.props.data.name}
                    onChange={this.props.handleChange} 
                />
            </form>
            
        )

    }
}

export default Step101