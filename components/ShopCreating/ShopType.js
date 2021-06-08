import React from 'react';
import styles from './ShopType.module.css';

const Shop = ({shop_type}) => {

    const [shopType, setShopType] = shop_type
    return (
        <div className={styles.shopContainer}>
            <label className="text-center">Choose what do you want to sell?</label>

            <div className="flex justify-center p-5">

                <div className="m-5 p-5 cursor-pointer" onClick={() => setShopType('service')}>
                    <div className={`${styles.btnService}`}> </div>
                    <p className="font-light text-center">Services to provide to your community</p>
                </div>

                <div className="m-5 p-5 cursor-pointer" onClick={() => setShopType('product')}>
                    <div className={`${styles.btnProduct}`}> </div>
                    <p className="font-light text-center">Products to sell to your customers</p>
                </div>
                
            </div>
        </div>
    );
};

export default Shop;