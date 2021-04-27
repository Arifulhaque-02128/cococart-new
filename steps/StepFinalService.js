import React from 'react';
import styles from '../styles/App.module.scss';
import { useRouter } from 'next/router'



const StepFinal = (props) => {
    const router = useRouter()
    const shopURL = "http://localhost:3000/shop/".concat(props.data.shopID)
    const paymentURL = shopURL.concat('/setting')
    console.log(props.data.shopID)
    const goToShop = () => {
        router.push(shopURL)
    }

    const handleSetPayment = () => {
        router.push(paymentURL)
    }






    return (
        props.data.shopCreated ? 
        <div className={styles.lastPageWrapper}>
            <h1 className={styles.heading}>Your shop is ready!</h1>

            <div className={styles.mainContent}>
                <div className={styles.linkAndNext}>
                    <div className={styles.linkWrapper}>
                        <h3>Share your link</h3>
                        <div className={styles.link}>
                            <p className={styles.linkText}>{shopURL}</p>

                            <button className={styles.btnVisitShop} onClick={goToShop}>visit shop</button>

                        </div>
                    </div>
                    <div className={styles.nextWrapper}>
                        <h3>What's next</h3>
                        <div className={styles.btnWrapper}>
                            <button className={styles.btnAddMore} onClick={props.handleAddMore}>
                                <img src="/cart.png" />
                                <h3 className={styles.addMore}>Add More</h3>
                            </button>
                            <button className={styles.btnPayment} onClick={handleSetPayment}>
                                <img src="/payment.png" />

                                <h3>Set Payment Method</h3>
                            </button>
                        </div>
                    </div>
                </div>
                <div className={styles.right}>
                    <p className={styles.txtPreview}>Preview</p>
                    <div className={styles.summaryWrapper}>

                        <h3 className={styles.header}>Order Summary</h3>
                        <hr />
                        <div className={styles.productDetails}>
                            <div className={styles.imgProduct}>
                                {/* imgURL */}
                                <img src='/service_logo.png'/>
                            
                            </div>
                            <div className={styles.txtProduct}>
                                {/* productName */}
                                <h3>{props.data.serviceName}</h3>
                                {/* price */}
                                <p>৳{props.data.price}</p>
                            </div>

                        </div>
                        
                        <hr />
                        <div className={styles.total}>
                            <p className={styles.txtTotal}>Total</p>
                            {/* totalcost */}
                            <h1 className={styles.amount}>৳{props.data.price}</h1>
                        </div>
                        <div className={styles.btnWrapper}>
                            <button>
                                Proceed To Pay
                                </button>
                        </div>

                    </div>

                </div>
            </div>
        </div>
        : null

    )
}



export default StepFinal