import React, { useEffect } from 'react'
import styles from '../../styles/AppShow.module.scss'
import IndividualOrder from './IndividualOrder'


const WantSomethingMore = (props) => {

    // props: name, price, url, quantity
    const AllOrderComponents = props.data.orders.map(order => {
        return <IndividualOrder
            key={order.url}
            name={order.name}
            price={order.price}
            url={order.url}
            quantity={order.quantity}
            updateByOne={props.updateByOne}
            updateTotalCost={props.updateTotalCost} />
    })
    // console.log(props.data.orders)


    return (
        props.data.currentStep === 6 ?
            <div className={styles.screenWrapper}>
                <div className={styles.screenContentWrapper}>
                    <div className={styles.orderSummary}>
                        <div className={styles.topSummary}>
                            <h2>Your order</h2>
                            <h2 className={styles.totalCost}>৳{props.data.totalCost}</h2>
                        </div>

                        {
                            AllOrderComponents
                        }

                    </div>

                    <div className={styles.optionAnythingElse}>
                        <div className={styles.titleQues}>
                            <h2>Would you like something else?</h2>
                        </div>

                        <button className={styles.btnMore} onClick={props.handleChange} value={true} name="wantMore">
                            Yes, I want more
                        </button>
                        <button className={styles.btnMore} onClick={props.handleChange} value={false} name="wantMore">
                            That's all I need
                        </button>
                    </div>


                </div>



            </div>
            : null
    )
}

export default WantSomethingMore