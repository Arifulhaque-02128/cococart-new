import React from 'react'
import styles from '../styles/AppShow.module.scss'

const Option = (props) => {
    // props: name, price, src
    const handleClick = () => {
        alert("clicked")
    }
    return (
        <div className={styles.optionWrapper} onClick={handleClick}>
            <img src={props.src} />
            <div className={styles.productInfo}>
                <h3 className={styles.name}>{props.name}</h3>
                <h3 className={styles.price}>{props.price}</h3>

            </div>



        </div>


    )
}

export default Option