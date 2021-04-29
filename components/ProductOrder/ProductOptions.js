import React from 'react'
import styles from '../../styles/AppShow.module.scss'
import Option from './Option'

const Options = (props) => {

    // let AllProductsComponent = props.data.products.reduce((AllProductsComponent, product) => {
    //     if (product.name) AllProductsComponent.push(<Option key={product.imageURL} name={product.productName} price={product.price} url={product.imageURL} addProduct={props.addProduct} />)
    //     return AllProductsComponent
    // }, [])

    const AllProductsComponent = props.data.products.map((product, index) => {
        // console.log(index)
        return <Option
            key={index}
            name={product.productName}
            price={product.price}
            url={product.imageURL}
            addProduct={props.selectProduct}
            idx={index} />
    })

    // console.log(props.data.products[0])



    return (
        props.data.currentStep === 3 ?
            <div className={styles.screenWrapper}>
                <div className={styles.screenContentWrapper}>
                    <div className={styles.titleQues}>
                        <h2>Which Product would you like?</h2>
                    </div>

                    <div className={styles.optionsWrapper} >
                        {/* loop through the options and for each, show one option */}
                        {/* {props.data.options.map(option => {
                        return option.name?<Option name={option.name} price={option.price} src={option.url} />:null
                    })} */}

                        {
                            AllProductsComponent
                        }

                    </div>


                </div>



            </div>
            : null
    )
}

export default Options