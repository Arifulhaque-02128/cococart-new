import React, { Component } from 'react'
import styles from '../styles/App.module.scss';

class Step0 extends Component {
    handleSubmit = (e) => {
        e.preventDefault()
    }

    render() {
        if (this.props.data.currentStep !== 0) {
            return null
        }
        
        return (
            <form className={`${styles.formGroup}`} onSubmit={this.handleSubmit}>
                <label>Choose what do you want to sell?</label>

                <div className={styles.zeroOptions}>
                    <div className={styles.serviceWrapper}>
                        <button className={styles.btnService} onClick={this.props.handleIsService} name="isProduct" value={false}>
                   
                        </button>

                        <p>Services to provide to your community</p>
                    </div>
                    <div className={styles.productWrapper}>
                        <button className={styles.btnProduct} onClick={this.props.handleIsProduct} name="isProduct" value={true}>

                        </button>

                        <p>Products to sell to your customers</p>
                    </div>
                </div>

            </form>
        )

    }
}

export default Step0