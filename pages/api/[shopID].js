import shopSchema from '../../Models/dataSchema';
import { dbConnect } from '../../utils/dbConnect';



dbConnect();

export default async (req, res) => {

    const { method, query: { shopID } } = req;
    const updatedData = req.body;

    console.log(shopID);
    console.log(updatedData);

    switch (method) {
        case "GET":
            try {
                const settingForSpecificShop = await shopSchema.find({ shopID: shopID })

                if(!settingForSpecificShop){
                    res.status(400).json({success: false})
                }

                res.status(200).json( settingForSpecificShop )
            } catch (error) {
                res.status(400).json({success: "failed"})
            }
            break;
        case "PUT":
            try {
                const updatedSetting = await shopSchema.findByIdAndUpdate(shopID, updatedData);

                if(!updatedSetting){
                    res.status(400).json({success: false})
                }
                
                res.status(201).json( updatedSetting )
            } catch (error) {
                res.status(400).json({success: false})
            }
            break;
    }
}