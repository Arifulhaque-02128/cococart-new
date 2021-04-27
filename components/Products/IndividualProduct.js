import React from 'react'
import styles from '../../styles/Products.module.scss'
import Switch from '@material-ui/core/Switch';

const IndividualProduct = (props) => {
    console.log(props.data)
    return (
        <div className={styles.productWrapper}>
            {/* {props.data.imgURL} */}
            <img className={styles.imgProduct} src={props.data.imageURL} />
            <p className={styles.element}>{props.data.productName}</p>
            <p className={styles.element}>৳{props.data.price}</p>
            <p className={styles.element}>inventory</p>
            <Switch className={styles.element} />
        </div>
    )
}

export default IndividualProduct


