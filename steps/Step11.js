import React, { Component } from 'react';
import styles from '../styles/App.module.scss';

class Step11 extends Component {

    render() {
        if (this.props.currentStep !== 11) {
            return null
        }


        return (
            <form onSubmit={this.props.goNext}  className={`${styles.formGroup}`}>
                <label>What are the instructions for pickup orders?</label>
                <br/>
                <input
                    className={`${styles.formControl}`}
                    id="instructions"
                    name="instructions"
                    type="text"
                    placeholder="Enter instructions"
                    value={this.props.instructions} 
                    onChange={this.props.handleChange}
                />
                
            </form>
        )

    }
}

export default Step11