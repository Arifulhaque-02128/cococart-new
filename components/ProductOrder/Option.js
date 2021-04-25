import React from 'react'
import styles from '../../styles/AppShow.module.scss'

const Option = (props) => {
    // props: name, price, url, addProduct

    // const handleClick = () => {
    //     alert("clicked")
    // }
    return (
        <div className={styles.optionWrapper} onClick={() => props.addProduct(props)}>
            <img src={props.url} />
            <div className={styles.productInfo}>
                <h3 className={styles.name}>{props.name}</h3>
                <h3 className={styles.price}>{props.price}</h3>

            </div>



        </div>


    )
}

export default Option