import React, {useState, useEffect} from 'react'
import styles from '../styles/AppShow.module.scss'

const IndividualOrder = (props) => {
    const [quantity, setQuantity] = useState(props.quantity)

    useEffect(() => {
        props.updateByOne(props.name, quantity)
        // props.updateTotalCost()
    }, [quantity])

    // const handleIncrement = () => {
    //     setQuantity(prevQuantity => Number(prevQuantity)+1)
    //     props.updateByOne(props.name, quantity)
    // }



    return (
        <div className={styles.productWrapper}>
            <div className={styles.productDetails}>
                <div className={styles.imageHolder}>
                    <img src={props.url} />
                </div>



            </div>
            <div className={styles.product}>
                <p>{props.name}</p>
                <p>৳{props.price}</p>
            </div>
            <div className={styles.calculate}>
                <button className={styles.btnCalculate} onClick={() => setQuantity(prevQuantity => Number(prevQuantity)+1)}>
                    +
                </button>
                <h2>{quantity}</h2>
                <button className={styles.btnCalculate} onClick={() => {
                    if(quantity > 0) setQuantity(prevQuantity => Number(prevQuantity)-1)
                }}>
                    -
                </button>
            </div>
        </div>
    )
}

export default IndividualOrder