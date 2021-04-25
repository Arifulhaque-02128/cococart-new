import React from 'react'
import styles from '../../styles/AppShow.module.scss'
import Option from './Option'

const Options = (props) => {

    let AllOptionsComponent = props.data.options.reduce((AllOptionsComponent, option) => {
        if(option.name) AllOptionsComponent.push(<Option key={option.url} name={option.name} price={option.price} url={option.url} addProduct={props.addProduct}/>)
        return AllOptionsComponent
    }, [])

    // if there is no option, just show the main product
    if(AllOptionsComponent.length == 0) {
        AllOptionsComponent = (
            <Option name={props.data.productName} price={props.data.price} url={props.data.imageURL} addProduct={props.addProduct}/>
        )
    }
    // console.log(AllOptionsComponent)

    return (
        props.data.currentStep === 3 ?
        <div className={styles.screenWrapper}>
            <div className={styles.screenContentWrapper}>
                <div className={styles.titleQues}>
                    <h2>Which option of {props.data.productName} would you like?</h2>
                </div>

                <div className={styles.optionsWrapper} >
                    {/* loop through the options and for each, show one option */}
                    {/* {props.data.options.map(option => {
                        return option.name?<Option name={option.name} price={option.price} src={option.url} />:null
                    })} */}

                    {
                        AllOptionsComponent
                    }

                </div>


            </div>



        </div>
        :null
    )
}

export default Options