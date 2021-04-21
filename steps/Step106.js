import React, { Component } from 'react'
import styles from '../styles/App.module.scss';

class Step106 extends Component {


    render() {
        if (this.props.data.currentStep !== 106) {
            return null
        }


        return (
            <form className={`${styles.formGroup}`} onSubmit={this.props.goNext}>
                <label>Describe your card</label>
                <p className={styles.subLabel}>Write something about your service</p>
                <br/>
                <input
                    className={`{styles.formControl}`}
                    id="cardDescription"
                    name="cardDescription"
                    type="text"
                    placeholder="Get access to my community"
                    value={this.props.data.cardDescription}
                    onChange={this.props.handleChange} 
                />
            </form>
        )

    }
}

export default Step106