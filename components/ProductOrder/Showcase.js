import React, { Component } from 'react'
import First from './First'
import InputHowMany from './InputHowMany'
import Options from './Options'
import OrderDate from './OrderDate'
import ShowProduct from './ShowProduct'
import InputName from './InputName'
import InputPhone from './InputPhone'
import IsThisAGift from './IsThisAGift'
import InputRecipientName from './InputRecipientName'
import InputRecipientPhone from './InputRecipientPhone'
import InputAddress from './InputAddress'
import InputEmail from './InputEmail'
import PaymentOptions from './PaymentOptions'
import WantSomethingMore from './WantSomethingMore'
import OrderSummary from './OrderSummary'
import Nav from './Nav'

class Showcase extends Component {
    constructor(props) {
        super(props)
        this.state = {
            ...props.data,
            orderDate: "",
            orderMonth: "",
            orderYear: "",
            totalCost: "0",
            orders: [],
            lastOrder: "",
            name: "",
            phone: "",
            isGift: true,
            wantMore: false,
            recipientName: "",
            recipientPhone: "",
            deliveryAddress: "",
            confirmationEmail: "",

            totalSteps: 14,
            currentStep: 1

        }
        // this.handleNext = this.handleNext.bind(this)
        // this.handlePrev = this.handlePrev.bind(this)

    }



    handleNext = () => {
        let newStep = this.state.currentStep + 1
        if (this.state.currentStep === 5 && this.state.wantMore) {
            newStep = 3
        } else if (this.state.currentStep === 8 && !this.state.isGift) {
            newStep = 11
        }

        console.log(newStep);

        // should not proceed if no order is placed
        if (this.state.currentStep === 3 && this.state.orders.length === 0) 
            return

        this.setState({
            currentStep: newStep
        })

    }

    handlePrev = () => {
        let newStep = this.state.currentStep - 1
        if (this.state.currentStep === 11 && !this.state.isGift) {
            newStep = 8
        }


        this.setState({
            currentStep: newStep
        })

    }


    handleChange = (event) => {
        let { name, value, type } = event.target
        if (value === "true") {
            value = true
        }
        if (value === "false") {
            value = false
        }

        this.setState({
            [name]: value
        })

        // console.log(name, value)
        // console.log(this.state)

    }

    setDate = (d) => {
        this.setState({
            orderDate: d.getDate(),
            orderMonth: d.getMonth(),
            orderYear: d.getFullYear()
        })
    }

    addProduct = (product) => {
        this.setState(prevState => {
            const orders = prevState.orders
            orders.push({
                name: product.name,
                price: product.price,
                url: product.url,
                quantity: 1
            })
            return { ...prevState, orders }
        })
        // console.log(product)
    }

    updateProductQuantity = (event) => {
        this.setState(prevState => {
            const orders = prevState.orders
            orders[orders.length - 1].quantity = event.target.value
            return {
                ...prevState, orders
            }
        },() => this.updateTotalCost())
        
    }

    updateByOne = (name, quantity) => {
        this.setState(prevState => {
            const orders = prevState.orders.map(order => {
                if (order.name === name) order.quantity = quantity
                return order
            })
            return {
                ...prevState, orders
            }

        }, () => this.updateTotalCost())
    }

    updateTotalCost = () => {
        let totalCost = 0
        this.state.orders.map(order => {
            totalCost += Number(order.price) * Number(order.quantity)
        })

        // console.log(totalCost)
        this.setState({
            totalCost: totalCost
        })
    }

    handleSubmit = () => {
        alert(`Your order has been placed!`)
        this.updateTotalCost()



        const data = {
            shopID: this.state.shopID,
            orderDate: this.state.orderDate,
            orderMonth: this.state.orderMonth,
            orderYear: this.state.orderYear,
            totalCost: this.state.totalCost,
            orders: this.state.orders,
            name: this.state.name,
            phone: this.state.phone,
            isGift: this.state.isGift,
            recipientName: this.state.recipientName,
            recipientPhone: this.state.recipientPhone,
            deliveryAddress: this.state.deliveryAddress,
            confirmationEmail: this.state.confirmationEmail
        }
        console.log(this.state)
        console.log(data)

        fetch('http://localhost:3000/api/placeOrder', {
            method: 'POST', // or 'PUT'
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(data),
        })
            .then(response => response.json())
            .then(data => {
                console.log('Success:', data);
            })
            .catch((error) => {
                console.error('Error:', error);
            });


    }



    render() {
        return (
            <>
                <ShowProduct data={this.state} goNext={this.handleNext} />
                <OrderDate data={this.state} setDate={this.setDate} />
                <Options data={this.state} addProduct={this.addProduct} />
                <InputHowMany data={this.state} updateProductQuantity={this.updateProductQuantity} />
                <WantSomethingMore
                    data={this.state}
                    updateByOne={this.updateByOne}
                    updateTotalCost={this.updateTotalCost}
                    handleChange={this.handleChange}
                />
                <InputName data={this.state} handleChange={this.handleChange} />
                <InputPhone data={this.state} handleChange={this.handleChange} />
                <IsThisAGift data={this.state} handleChange={this.handleChange} />
                {/* if isgift */}
                <InputRecipientName data={this.state} handleChange={this.handleChange} />
                {/* if isgift */}
                <InputRecipientPhone data={this.state} handleChange={this.handleChange} />

                <InputAddress data={this.state} handleChange={this.handleChange} />
                <InputEmail data={this.state} handleChange={this.handleChange} />
                <OrderSummary data={this.state} handleChange={this.handleChange} />
                <PaymentOptions data={this.state} handleSubmit={this.handleSubmit} />


                <Nav data={this.state} goNext={this.handleNext} goPrev={this.handlePrev} />
            </>
        )
    }
}


export default Showcase