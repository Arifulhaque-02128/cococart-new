import AccountDetails from '../../components/Account/AccountDetails';
import dataSchema from '../../Models/dataSchema';
import { dbConnect } from '../../utils/dbConnect';



dbConnect();

export default async (req, res) => {

    const { method, query: { shopID } } = req;
    const updatedData = req.body;
    


    // console.log(shopID);
    // console.log("client data: ",updatedData.email);

    switch (method) {
        case "GET":
            try {
                const settingForSpecificShop = await dataSchema.find({ shopID: shopID })

                // if(!settingForSpecificShop){
                //     res.status(400).json({success: false})
                // }
                // console.log("from api")
                // console.log(settingForSpecificShop)

                res.status(200).json(settingForSpecificShop)
            } catch (error) {
                res.status(400).json({ success: "failed" })
            }
            break;
        case "PUT":
            try {
                // console.log("from api put")
                // const property = updatedData.isAccountCreation ? "accountDetails" : "setting"
                // let updatedSetting = ""
                if(updatedData.isAccountCreation){
                    const updatedSetting = await dataSchema.findOneAndUpdate({shopID}, {"email": updatedData.email, "accountDetails": updatedData})
                    // console.log("inside put: ", updatedSetting)
                    if(!updatedSetting){
                        res.status(400).json({success: false})
                    }
    
    
                    res.status(201).json(updatedSetting)
                } else {
                    const updatedSetting = await dataSchema.findOneAndUpdate({shopID}, {"setting": updatedData})
                    // console.log("inside put: ", updatedSetting)
                    if(!updatedSetting){
                        res.status(400).json({success: false})
                    }
    
    
                    res.status(201).json(updatedSetting)
                }
                
            } catch (error) {
                res.status(400).json({ success: false })
            }
            break;
    }
}