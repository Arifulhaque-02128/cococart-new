import React, { Component } from 'react'
import styles from '../../styles/AppShow.module.scss'
import InputName from './InputName'
import Nav from '../ProductOrder/Nav'
import Options from './Options'
import Welcome from './Welcome'
import OrderProcedure from './OrderProcedure'
import InputWhatsApp from './InputWhatsApp'
import InputEmail from './InputEmail'
import ConnectSocial from './ConnectSocial'
import PaymentOptions from './PaymentOptions'
import ThankYou from './ThankYou'


class ShowcaseService extends Component {
    constructor(props) {
        super(props)

        this.state = {
            ...props.data,

            totalSteps: 9,
            currentStep: 1,

            ordererName: "",
            orderProcedure: "email", // email/whatsapp/instagram/facebook
            ordererWhatsApp: "",
            ordererEmail: "",


        }
    }

    handleNext = () => {
        let newStep = this.state.currentStep + 1
        if (this.state.currentStep === 4 && this.state.orderProcedure === "whatsapp") {
            newStep = 6
        } else if (this.state.currentStep === 4 && this.state.orderProcedure === "instagram") {
            newStep = 7
        } else if (this.state.currentStep === 4 && this.state.orderProcedure === "facebook") {
            newStep = 7
        } else if (this.state.currentStep === 5) {
            newStep = 8
        } else if (this.state.currentStep === 6) {
            newStep = 8
        } 
        console.log(newStep);

        // should not proceed if no order is placed
        // if (this.state.currentStep === 3 && this.state.orders.length === 0)
        //     return

        this.setState({
            currentStep: newStep
        })

    }

    handlePrev = () => {
        let newStep = this.state.currentStep - 1
        if (this.state.currentStep === 8 && this.state.orderProcedure === "email") {
            newStep = 5
        } else if (this.state.currentStep === 8 && this.state.orderProcedure === "whatsapp") {
            newStep = 6
        } else if (this.state.currentStep === 6 || this.state.currentStep == 7) {
            newStep = 4
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

        console.log(name, value)
        // console.log(this.state)

    }


    handleSubmit = () => {
        alert(`Your order has been placed!`)
        // this.updateTotalCost()

        const data = {
            shopID: this.state.shopID,
            totalCost: this.state.price,
            name: this.state.ordererName,
            confirmationEmail: this.state.ordererEmail,
            whatsAppNumber: this.state.ordererWhatsApp,
            orderProcedure: this.state.orderProcedure
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
                <Welcome data={this.state} goNext={this.handleNext} />
                <Options data={this.state} handleChange={this.handleChange} />
                <InputName data={this.state} handleChange={this.handleChange} />
                <OrderProcedure data={this.state} handleChange={this.handleChange} />
                <InputEmail data={this.state} handleChange={this.handleChange} />
                <InputWhatsApp data={this.state} handleChange={this.handleChange} />
                <ConnectSocial data={this.state} handleChange={this.handleChange} />
                <PaymentOptions data={this.state} handleChange={this.handleChange} handleSubmit={this.handleSubmit}/>
                <ThankYou data={this.state} handleChange={this.handleChange} />


                <Nav data={this.state} goNext={this.handleNext} goPrev={this.handlePrev} />

            </>
        )
    }

}

export default ShowcaseService




