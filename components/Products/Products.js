import React, { Component } from 'react'
import IndividualProduct from './IndividualProduct'
import styles from '../../styles/Products.module.scss'


class Products extends Component {
    constructor(props) {
        super(props)
        this.state = {
            ...props.data,

        }

    }


    handleChange = (event) => {

    }

    handleSubmit = () => {
        alert(`Your order has been placed!`)
    }

    render() {
        return (

            <div className={styles.productsPage}>
                <h1>Products</h1>

                <div className={styles.productsTopRow}>
                    <p className={styles.elementTopRow}>Name</p>
                    <p className={styles.elementTopRow}>Price</p>
                    <p className={styles.elementTopRow}>inventory</p>
                    <p className={styles.elementTopRow}>active</p>
                </div>
                <IndividualProduct data={this.state} />

            </div>

        )
    }
}


export default Products