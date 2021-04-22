import React from 'react'
import shopSchema from '../../../Models/dataSchema'
import { dbConnect, jsonify } from '../../../utils/dbConnect'
import Showcase from '../../../components/Showcase'


const Shop = (props) => {
    const {apiData} = props
    console.log(apiData)
    // console.log(`api data: ${apiData[0]}`)
    return (
        apiData.length > 0 ? <Showcase data={apiData[0]}/> : null
        
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