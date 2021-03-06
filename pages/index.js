import React, { Component } from 'react'
import styles from '../styles/App.module.scss'
import Step0 from '../steps/Step0'
import Step1 from '../steps/Step1'
import Step2 from '../steps/Step2'
import Step3 from '../steps/Step3'
import Step4 from '../steps/Step4'
import Step5 from '../steps/Step5'
import Step7 from '../steps/Step7'
import Step8 from '../steps/Step8'
import Step11 from '../steps/Step11'
import Step12 from '../steps/Step12'
import Step6 from '../steps/Step6'
import Step9 from '../steps/Step9'
import Step10 from '../steps/Step10'
import StepFinal from '../steps/StepFinal'
import Step101 from '../steps/Step102'
import Step102 from '../steps/Step101'
import Step103 from '../steps/Step103'
import Step104 from '../steps/Step104'
import Step105 from '../steps/Step105'
import Step106 from '../steps/Step106'
import Step107 from '../steps/Step107'
import Step109 from '../steps/Step109'
import Step108 from '../steps/Step108'
import Step110 from '../steps/Step110'
import Step111 from '../steps/Step111'
import StepFinalService from '../steps/StepFinalService'

class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      totalSteps: 12,
      currentStep: 0,
      isProduct: true,    // product or service
      shopID: "",
      shopName: "",       // 1
      productName: "",    // 2
      price: "",          // 4
      imageURL: "",
      hasOptions: false,  // 5

      optionAName: "",    // 6
      optionBName: "",    // 6
      optionCName: "",    // 6
      optionDName: "",    // 6
      optionAPrice: "",   // 6
      optionBPrice: "",   // 6
      optionCPrice: "",   // 6
      optionDPrice: "",   // 6
      optionAurl: "",
      optionBurl: "",
      optionCurl: "",
      optionDurl: "",

      hasSpecificDate: false, //  7
      orderType: "",      // 8 (delivery/pickup/both)
      hasDeliveryFee: false,  //  9
      deliveryCost: 0,        // 10
      instructions: "",       // 11
      email: "",              // 12
      shopCreated: false,

      name: "",
      serviceName: "",
      isOneTime: false,
      cardDescription: "",
      wantSocial: "",
      promoVideoLink: "",
      fbLink: "",
      instagramLink: "",
      linkedInLink: "",
      youTubeLink: ""
    }


    this.handleChange = this.handleChange.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this)
    this.handleServiceSubmit = this.handleServiceSubmit.bind(this)
    this.handleImageUpload = this.handleImageUpload.bind(this)
    this.handleIsProduct = this.handleIsProduct.bind(this)
    this.handleIsService = this.handleIsService.bind(this)
    this.handleAddMore = this.handleAddMore.bind(this)
    this._next = this._next.bind(this)
    this._prev = this._prev.bind(this)
  }

  _next() {
    let currentStep = this.state.currentStep


    if (currentStep === 5 && !this.state.hasOptions) {
      currentStep += 2
    } else if (currentStep === 8 && this.state.orderType === "pickup") {
      currentStep += 3
    } else if (currentStep === 9 && !this.state.hasDeliveryFee) {
      currentStep += 2
    } else if (currentStep === 107 && !this.state.haveVideo) {
      currentStep += 2
    } else if (currentStep === 109 && !this.state.wantSocial) {
      currentStep += 2
    } else if (currentStep < this.state.totalSteps) {
      currentStep++
    }


    this.setState({
      currentStep: currentStep
    })
  }

  _prev() {
    let currentStep = this.state.currentStep

    if (currentStep === 7 && !this.state.hasOptions) {
      currentStep -= 2
    } else if (currentStep === 11 && this.state.orderType === "pickup") {
      currentStep -= 3
    } else if (currentStep === 11 && !this.state.hasDeliveryFee) {
      currentStep -= 2
    } else if (currentStep === 111 && !this.state.wantSocial) {
      currentStep -= 2
    } else if (currentStep === 109 && !this.state.haveVideo) {
      currentStep -= 2
    } else if (currentStep === 101) {
      currentStep = 0
    } else if (currentStep >= 0) {
      currentStep--
    }


    this.setState({
      currentStep: currentStep
    })
  }

  handleChange(event) {
    let { name, value, type } = event.target
    if (value === "true") {
      value = true
    }
    if (value === "false") {
      value = false
    }

    // console.log(event)


    if (type === "file") {
      this.setState({
        image: event.target.files[0]
      })
    } else {
      this.setState({
        [name]: value
      }, () => console.log(name, value))
    }
  }

  handleIsService(event) {
    this.setState({
      isProduct: false,
      currentStep: 101,
      totalSteps: 111
    })
  }


  handleIsProduct(event) {
    this.setState({
      isProduct: true,
      currentStep: 1,
      totalSteps: 12
    })
  }


  handleImageUpload(name, imgURL) {
    this.setState({
      [name]: imgURL
    })
  }

  handleSubmit(event) {
    event.preventDefault()
    // const { shopName, productName, price, options, email } = this.state
    // alert(`Your Product ${productName} has been updated`)
    const optionA = {
      name: this.state.optionAName,
      price: this.state.optionAPrice,
      url: this.state.optionAurl
    }
    const optionB = {
      name: this.state.optionBName,
      price: this.state.optionBPrice,
      url: this.state.optionBurl
    }
    const optionC = {
      name: this.state.optionCName,
      price: this.state.optionCPrice,
      url: this.state.optionCurl
    }
    const optionD = {
      name: this.state.optionDName,
      price: this.state.optionDPrice,
      url: this.state.optionDurl
    }

    const shopID = this.state.shopName.replace(/ /g, '').toLowerCase()
    this.setState({
      shopID: shopID
    })
    const products = [{
      productName: this.state.productName, 
      price: this.state.price, 
      imageURL: this.state.imageURL,
      hasOptions: this.state.hasOptions,
      options: [optionA, optionB, optionC, optionD]}]
    
    const data = {
      shopID: this.state.shopName.replace(/ /g, '').toLowerCase(),
      shopName: this.state.shopName,
      shop_type: 'product',
      products: products,
      productName: this.state.productName,
      price: this.state.price,
      imageURL: this.state.imageURL,
      hasOptions: this.state.hasOptions,
      options: [optionA, optionB, optionC, optionD],
      hasSpecificDate: this.state.hasSpecificDate,
      orderType: this.state.orderType,
      hasDeliveryFee: this.state.hasDeliveryFee,
      deliveryCost: this.state.deliveryCost,
      instructions: this.state.instructions,
      email: this.state.email,
      isProduct: true,
      setting: [],
      accountDetails: [{userName: "", email: this.state.email}],
    }
    fetch('http://localhost:3000/api', {
      method: 'POST', // or 'PUT'
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(data),
    })
      .then(response => response.json())
      .then(data => {
        console.log('Success:', data);
        this.setState({
          shopCreated: true,
          currentStep: this.state.totalSteps
        })
      })
      .catch((error) => {
        console.error('Error:', error);
      });
    console.log(this.state)
  }

  handleServiceSubmit(event) {
    event.preventDefault()

    const shopID = this.state.name.replace(/ /g, '').toLowerCase()
    const services = [{
      service_name: this.state.serviceName, 
      price: this.state.price, 
      imageURL: this.state.imageURL,
    }]

    const data = {
      shopID: this.state.name.replace(/ /g, '').toLowerCase(),
      name: this.state.name,
      services: services,
      shop_type: 'service',
      serviceName: this.state.serviceName,
      coverURL: this.state.imageURL,
      price: this.state.price,
      isOneTime: this.state.isOneTime,
      cardDescription: this.state.cardDescription,
      youTubeLink: this.state.youTubeLink,
      fbLink: this.state.fbLink,
      instagramLink: this.state.instagramLink,
      linkedInLink: this.state.linkedInLink,
      promoVideoLink: this.state.promoVideoLink,
      email: this.state.email,
      isProduct: false,
      setting: [],
      accountDetails: [{userName: "", email: this.state.email}]
    }
    console.log(data)
    // send data to db

    fetch('http://localhost:3000/api', {
      method: 'POST', // or 'PUT'
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(data),
    })
      .then(response => response.json())
      .then(data => {
        console.log('Success:', data);
        this.setState({
          shopCreated: true,
          currentStep: this.state.totalSteps,
          shopID: shopID
        })
      })
      .catch((error) => {
        console.error('Error:', error);
      });
    
  }


  handleAddMore() {
    const isProduct = this.state.isProduct
    let newStep = isProduct ? 2 : 102
    this.setState({
      currentStep: newStep,
      shopCreated: false,
      productName: "",   
      price: "",          
      imageURL: "",
      hasOptions: false, 
    
      optionAName: "",   
      optionBName: "",   
      optionCName: "",    
      optionDName: "",    
      optionAPrice: "",   
      optionBPrice: "",   
      optionCPrice: "",   
      optionDPrice: "",   
      optionAurl: "",
      optionBurl: "",
      optionCurl: "",
      optionDurl: "",
    
      hasSpecificDate: false, 
      orderType: "",      
      hasDeliveryFee: false,  
      deliveryCost: 0,        
      instructions: "",       
      email: "",              
      shopCreated: false,
    
      name: "",
      serviceName: "",
      isOneTime: false,
      cardDescription: "",
      haveVideo: false,
      wantSocial: "",
      promoVideoLink: "",
      fbLink: "",
      instagramLink: "",
      linkedInLink: "",
      youTubeLink: "",
    })   
  }


  previousButton() {
    let currentStep = this.state.currentStep;
    if (currentStep !== 0) {
      return (
        <button
          className={`${styles.btn} ${styles.floatLeft}`}
          type="button"
          onClick={this._prev}>
          Prev
        </button>
      )
    }
    return null;
  }

  nextButton() {
    let currentStep = this.state.currentStep;
    console.log(currentStep)
    if (currentStep < this.state.totalSteps && currentStep > 0) {
      return (
        <button
          className={`${styles.btn} ${styles.floatRight}`}
          type="button"
          onClick={this._next}>
          Next
        </button>
      )
    }
    return null;
  }



  render() {
    if (this.state.shopCreated && this.state.isProduct)
      return (
        <StepFinal data={this.state} handleAddMore={this.handleAddMore}/>
      )
    if (this.state.shopCreated && !this.state.isProduct){
      return (
        <StepFinalService data={this.state} handleAddMore={this.handleAddMore}/>
      )
    }
    return (
      <div className={styles.topContainer}>


        <div className={styles.topFragment}>
          <div className={styles.stepCounter}>
            <p>Step {(this.state.currentStep) % 100} of {(this.state.totalSteps) % 100}</p>
            <hr />
          </div>

          <div className={styles.questionBlock}>
            <Step0
              data={this.state}
              handleIsProduct={this.handleIsProduct}
              handleIsService={this.handleIsService}
              goNext={this._next}
            />
            <Step1
              currentStep={this.state.currentStep}
              shopName={this.state.shopName}
              handleChange={this.handleChange}
              goNext={this._next}
            />
            <Step2
              currentStep={this.state.currentStep}
              productName={this.state.productName}
              handleChange={this.handleChange}
              goNext={this._next}
            />

            <Step3
              currentStep={this.state.currentStep}
              image={this.state.image}
              handleChange={this.handleChange}
              handleImageUpload={this.handleImageUpload}
              goNext={this._next}
            />
            <Step4
              currentStep={this.state.currentStep}
              email={this.state.email}
              handleChange={this.handleChange}
              goNext={this._next}
            />

            <Step5
              currentStep={this.state.currentStep}
              hasOptions={this.state.hasOptions}
              handleChange={this.handleChange}
              goNext={this._next}
            />

            <Step6
              currentStep={this.state.currentStep}
              data={this.state}
              handleChange={this.handleChange}
              handleImageUpload={this.handleImageUpload}
              goNext={this._next}
            />


            <Step7
              currentStep={this.state.currentStep}
              hasSpecificDate={this.state.hasSpecificDate}
              handleChange={this.handleChange}
              goNext={this._next}
            />

            <Step8
              currentStep={this.state.currentStep}
              orderType={this.state.orderType}
              handleChange={this.handleChange}
              goNext={this._next}
            />

            <Step9
              currentStep={this.state.currentStep}
              hasDeliveryFee={this.state.hasDeliveryFee}
              handleChange={this.handleChange}
              goNext={this._next}
            />

            <Step10
              currentStep={this.state.currentStep}
              deliveryCost={this.state.deliveryCost}
              handleChange={this.handleChange}
              goNext={this._next}
            />

            {/* step 9, 10 */}

            <Step11
              currentStep={this.state.currentStep}
              instructions={this.state.instructions}
              handleChange={this.handleChange}
              goNext={this._next}
            />

            <Step12
              currentStep={this.state.currentStep}
              email={this.state.email}
              handleChange={this.handleChange}
              handleSubmit={this.handleSubmit}
            />

            <Step101 data={this.state} handleChange={this.handleChange} goNext={this._next} />

            <Step102 data={this.state} handleChange={this.handleChange} goNext={this._next} />
            <Step103
              data={this.state}
              handleChange={this.handleChange}
              goNext={this._next}
              handleImageUpload={this.handleImageUpload} />
            <Step104 data={this.state} handleChange={this.handleChange} goNext={this._next} />
            <Step105 data={this.state} handleChange={this.handleChange} goNext={this._next} />
            <Step106 data={this.state} handleChange={this.handleChange} goNext={this._next} />
            <Step107 data={this.state} handleChange={this.handleChange} goNext={this._next} />
            <Step108 data={this.state} handleChange={this.handleChange} goNext={this._next} />
            <Step109 data={this.state} handleChange={this.handleChange} goNext={this._next} />
            <Step110 data={this.state} handleChange={this.handleChange} goNext={this._next} />
            <Step111 data={this.state} handleChange={this.handleChange} handleSubmit={this.handleServiceSubmit} />
            
            {this.previousButton()}
            {this.nextButton()}
          </div>

          {this.state.currentStep === this.state.totalSteps && this.state.isProduct?
            <button onClick={this.handleSubmit} className={`${styles.btn} ${styles.btnSuccess} ${styles.btnBlock}`}>Done!</button>
            : null}

          {this.state.currentStep === this.state.totalSteps && !this.state.isProduct?
            <button onClick={this.handleServiceSubmit} className={`${styles.btn} ${styles.btnSuccess} ${styles.btnBlock}`}>Done!</button>
            : null}

          {/*  {this.state.currentStep === this.state.totalSteps && this.state.shopCreated ?
          <a href={`localhost:3000/shop/${this.state.shopID}`}>
            <button onClick={this.goToShop} className={`${styles.btn} ${styles.btnSuccess} ${styles.btnBlock}`}>go to shop!</button>
            </a>
            : null}
 */}


        </div>

        <div>
        {
          ( ((this.state.currentStep)%100 !== 0) && (!this.state.isProduct) ) && 
          <div className={styles.imageContainer}>
              <img src={`/service_preview/preview${(this.state.currentStep)%100}.png`} alt="preview"/>
          </div>
        }
        </div>


      </div>
    )
  }
}


export default App