import React, { useState } from 'react';
import Product from '../components/ShopCreating/Product/Product';
import Service from '../components/ShopCreating/Service/Service';
import Shop from '../components/ShopCreating/ShopType';


const index = () => {
    const [shopType, setShopType] = useState(false)
    return (
        <div>
            { !shopType &&  <Shop shop_type={[shopType, setShopType]} /> }
            {
                shopType === "product" && <Product />
            }
            {
                shopType === "service" && <Service />
            }
        </div>
    );
};

export default index;