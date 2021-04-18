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
import Nav from './Nav'

class Showcase extends Component {
    constructor(props) {
        super(props)
        this.state = {
            ...props.data,
            orderDate: "",
            orderMonth: "",
            totalCost: "100",
            orders: [],
            name: "",
            phone: "",
            isGift: true,
            wantMore: false,
            recipientName: "",
            recipientPhone: "",
            deliveryAddress: "",
            confirmationEmail: "",

            totalSteps: 13,
            currentStep: 1

        }
        this.handleNext = this.handleNext.bind(this)
        this.handlePrev = this.handlePrev.bind(this)

    }



    handleNext = () => {
        let newStep = this.state.currentStep + 1
        if (this.state.currentStep === 5 && this.state.wantMore) {
            newStep = 3
        } else if (this.state.currentStep === 8 && !this.state.isGift) {
            newStep = 11
        }


        // if(newStep < this.state.totalSteps){
        this.setState({
            currentStep: newStep
        })

        // }

        console.log(newStep)
    }

    handlePrev = () => {
        let newStep = this.state.currentStep - 1
        if (this.state.currentStep === 11 && !this.state.isGift) {
            newStep = 8
        }


        this.setState({
            currentStep: newStep
        })

        console.log(newStep)
    }




    render() {
        return (
            <>
                <ShowProduct data={this.state} goNext={this.handleNext} />
                <OrderDate data={this.state} />
                <Options data={this.state} />
                <InputHowMany data={this.state} />
                <WantSomethingMore data={this.state} />
                <InputName data={this.state} />
                <InputPhone data={this.state} />
                <IsThisAGift data={this.state} />
                {/* if isgift */}
                <InputRecipientName data={this.state} />
                {/* if isgift */}
                <InputRecipientPhone data={this.state} />

                <InputAddress data={this.state} />
                <InputEmail data={this.state} />
                <PaymentOptions data={this.state} />


                <Nav data={this.state} goNext={this.handleNext} goPrev={this.handlePrev} />
            </>
        )
    }
}


export default Showcase