import React from 'react';
import Settings from '../../../components/Settings/PaymentSetting/Settings'
import shopSchema from '../../../Models/dataSchema';
import { dbConnect, jsonify } from '../../../utils/dbConnect';


const setting = ({apiData}) => {
    const {shopID, setting} = apiData[0]
    console.log("inside setting------------", setting)
    return (
        <div>
            <Settings shopID={shopID} setting={setting}/>
        </div>
    );
};

export default setting;



export const getServerSideProps = async (context) => {

    dbConnect();
    const apiData = await shopSchema.find({ shopID: context.query.shopid }).exec();

    return{
        props: { apiData: jsonify(apiData) }
    }
}