import React from 'react';
import Account from '../components/Account/Account';
// import shopSchema from '../Models/dataSchema';
// import { dbConnect, jsonify } from '../utils/dbConnect';

const account = () => {
    return (
        <div>
            <Account />
        </div>
    );
};

export default account;


// export const getServerSideProps = async (context) => {

//     dbConnect();
//     const apiData = await shopSchema.find({ shopID: context.query.shopid }).exec();

//     return{
//         props: { apiData: jsonify(apiData) }
//     }
// }