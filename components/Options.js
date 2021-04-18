import React from 'react'
import styles from '../styles/AppShow.module.scss'
import Option from './Option'

const Options = (props) => {
    // const AllOptions = props.data.options.map(option => {
    //     return option.name?<Option name={option.name} price={option.price} src={option.url} />:null
    // })

    // if there is no option, just show the main product

    return (
        props.data.currentStep === 3 ?
        <div className={styles.screenWrapper}>
            <div className={styles.screenContentWrapper}>
                <div className={styles.titleQues}>
                    <h2>Which option of {props.data.productName} would you like?</h2>
                </div>

                {/* loop through the options and for each, show one option */}
                <div className={styles.optionsWrapper} >
                    {props.data.options.map(option => {
                        return option.name?<Option name={option.name} price={option.price} src={option.url} />:null
                    })}
                </div>


            </div>



        </div>
        :null
    )
}

export default Options