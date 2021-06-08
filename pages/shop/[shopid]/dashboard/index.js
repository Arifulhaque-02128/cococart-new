import React, { useState } from 'react';
import Settings from '../../../../components/Settings/PaymentSetting/Settings'
import shopSchema from '../../../../Models/dataSchema';
import { dbConnect, jsonify } from '../../../../utils/dbConnect';
import Products from '../../../../components/Products/Products';
import Account from '../../../../components/Account/Account';
import Orders from '../../../../components/Dashboard/Orders';
import orderSchema from '../../../../Models/orderSchema'
import styles from '../../../../styles/Dashboard.module.css';
import Sidebar from '../../../../components/Sidebar/Sidebar';



const index = ({apiData, orderData}) => {
    const {shopID, setting, accountDetails} = apiData[0]
    console.log("inside dashboard------------", apiData[0])
    const [dashboard, setDashboard] = useState("account")
    return (
        <div className={styles.dashboard}>
            <div className={styles.sidebar}>
                <Sidebar active={[dashboard, setDashboard]} />
            </div>
            <div className={styles.mainContainer}>
                {
                    dashboard === "setting" && <Settings shopID={shopID} setting={setting} />
                }
                {
                    dashboard === "account" && <Account shopID={shopID} details={accountDetails[0]}/>
                }
                {
                    dashboard === "products" && <Products data={apiData[0]} />
                }
                {
                    dashboard === "orders" && <Orders data={orderData} />
                }
            </div>
            
        </div>
    );
};
export default index;

export const getServerSideProps = async (context) => {

    dbConnect();
    const apiData = await shopSchema.find({ shopID: context.query.shopid }).exec();
    const apiDataForOrder = await orderSchema.aggregate([{ $match: { shopID: context.query.shopid } }]).exec();

    return{
        props: { apiData: jsonify(apiData), orderData: jsonify(apiDataForOrder) }
    }
}