import React from 'react'
import styles from '../styles/AppShow.module.scss'

const OrderSummary = (props) => {
    let deliveryMethod = props.data.orderType
    deliveryMethod === "both" ? deliveryMethod = "Delivery and Pickup" : deliveryMethod


    const AllOrderComponents = props.data.orders.map(order => {
        return (
            <div className={styles.productDetails} key={order.name}>
                <div className={styles.imgProduct}>
                    {/* imgURL */}
                    <img src={order.url} />

                </div>
                <div className={styles.txtProduct}>
                    {/* productName */}
                    <h3>{order.name}</h3>
                    {/* price */}
                    <p>৳{order.price} x{order.quantity}</p>
                </div>

            </div>

        )
    })


    return (
        props.data.currentStep === 13 ?
            <div className={styles.screenWrapper}>
                <div className={styles.summaryWrapper}>

                    <h3 className={styles.header}>Order Summary</h3>
                    <hr />


                    {
                        AllOrderComponents
                    }

                    <hr />
                    <div className={styles.productDetails}>
                        <div className={styles.imgProduct}>
                            <img src="/delivery.png" />

                        </div>
                        <div className={styles.txtProduct}>
                            {/* del/pickup/both */}
                            <h3>{deliveryMethod}</h3>
                            {/* deliveryCost */}
                            <p>৳{props.data.deliveryCost}</p>
                        </div>
                    </div>
                    <hr />
                    <div className={styles.total}>
                        <p className={styles.txtTotal}>Total</p>
                        {/* totalcost */}
                        <h1 className={styles.amount}>৳{Number(props.data.totalCost) + Number(props.data.deliveryCost)}</h1>
                    </div>


                </div>
            </div>
            : null
    )
}

export default OrderSummary