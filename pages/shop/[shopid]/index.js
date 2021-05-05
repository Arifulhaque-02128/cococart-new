import React from 'react'
import shopSchema from '../../../Models/dataSchema'
import { dbConnect, jsonify } from '../../../utils/dbConnect'
// import Showcase from '../../../components/ProductOrder/Showcase'
// import ShowcaseService from '../../../components/ServiceOrder/ShowcaseService'
import OrderService from '../../../components/OrderService/OrderService'
import OrderProduct from '../../../components/OrderProduct/OrderProduct'


const Shop = (props) => {
    const {apiData} = props
    const shopInfo = apiData[0]
    const shopType = shopInfo.shop_type
    
    return (
        
        <div> 
            {
                shopType === 'service' ? <OrderService shopInfo={shopInfo} /> : < OrderProduct shopInfo={shopInfo} />
            }
            
            {/* apiData.length > 0 ? <Showcase data={apiData[0]}/> : null
            // apiData.length > 0 ? <ShowcaseService data={apiData[0]}/> : null */}
        </div>
    )
}

export default Shop

export const getServerSideProps = async (context) => {

    dbConnect();
    const apiData = await shopSchema.find({ shopID: context.query.shopid }).exec();

    return{
        props: { apiData: jsonify(apiData) }
    }
}

