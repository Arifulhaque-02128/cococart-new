import React, { Component } from 'react'
import IndividualProduct from './IndividualProduct'
import styles from '../../styles/Products.module.scss'
import EditProduct from './EditProduct'


class Products extends Component {
    constructor(props) {
        super(props)
        this.state = {
            ...props.data,
            showList: true,
            currentProduct: 0,
        }

    }


    handleChange = (event) => {
        const { name, value } = event.target

        // console.log(event.target.randomField)

        this.setState(prevState => {
            const products = prevState.products
            products[prevState.currentProduct][name] = value

            return { ...prevState, products }
        }, () => console.log(this.state))
    }

    handleImageUpload = (name, value) => {
        this.setState({
            [name]: value
        })
    }

    handleOptionChange = (idx, event) => {
        // console.log(idx, event.target.name)
        const { name, value } = event.target
        this.setState(prevState => {
            const options = prevState.options
            options[idx][name] = value

            return { ...prevState, options }
        })
    }

    handleEdit = (idx) => {
        this.setState({
            showList: false,
            currentProduct: idx
        })
    }

    handleSubmit = () => {
        alert(`Your product has been updated!`)
    }

    saveEdits = (options) => {
        // console.log("inside saveedits -----", this.state)
        this.setState(prevState => {
            const newState = { ...prevState }
            newState.products[prevState.currentProduct].options = [...options]
            newState.showList = true
            return newState
        }, () => {
            // console.log("inside saveedits -----", this.state.products)
            // const data = {
            //     shopID: this.state.shopID,
            //     shopName: this.state.shopName,
            //     products: this.state.products,
            //     productName: this.state.productName,
            //     price: this.state.price,
            //     imageURL: this.state.imageURL,
            //     hasOptions: this.state.hasOptions,
            //     options: this.state.options,
            //     hasSpecificDate: this.state.hasSpecificDate,
            //     orderType: this.state.orderType,
            //     hasDeliveryFee: this.state.hasDeliveryFee,
            //     deliveryCost: this.state.deliveryCost,
            //     instructions: this.state.instructions,
            //     email: this.state.email,
            //     isProduct: this.state.isProduct,
            //     setting: this.state.setting,
            //     accountDetails: this.state.accountDetails
            // }
            fetch('http://localhost:3000/api', {
                method: 'PUT', // or 'PUT'
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(this.state.products),
            })
                .then(response => response.json())
                .then(data => {
                    console.log('Success:', data);
                })
                .catch((error) => {
                    console.error('Error:', error);
                });
        })
    }

    render() {

        const ProductComponents = this.state.products.map((product, index) => {
            return <div key={index} onClick={() => this.handleEdit(index)}>
                <IndividualProduct data={product} onClick={this.handleEdit} />
            </div>
        })


        return (
            this.state.showList ?
                <div className={styles.productsPage}>
                    <h1>Products</h1>

                    <div className={styles.productsTopRow}>
                        <p className={styles.elementTopRow}>Name</p>
                        <p className={styles.elementTopRow}>Price</p>
                        {/* <p className={styles.elementTopRow}>inventory</p> */}
                        <p className={styles.elementTopRow}>active</p>
                    </div>
                    {
                        ProductComponents
                    }

                </div>
                :
                <EditProduct
                    product={this.state.products[this.state.currentProduct]}
                    handleChange={this.handleChange}
                    handleImageUpload={this.handleImageUpload}
                    handleOptionChange={this.handleOptionChange}
                    saveEdits={this.saveEdits}
                />

        )
    }
}


export default Products