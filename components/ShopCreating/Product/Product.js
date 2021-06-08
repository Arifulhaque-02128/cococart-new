import React, { useState } from 'react';
import Product1 from './Steps/Product1';

const Product = () => {
    const [step, setStep] = useState(1)
    const [shopInfo, setShopInfo] = useState({
        shopName: ''
    })
    return (
        <div>
            {
                step === 1 && <Product1 info={[shopInfo, setShopInfo]} stepCount={[step, setStep]} />
            }
        </div>
    );
};

export default Product;