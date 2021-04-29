import dataSchema from '../../Models/dataSchema';
import { dbConnect } from '../../utils/dbConnect';


dbConnect();

export default async (req, res) => {
    const { method } = req;

    switch (method) {
        case "GET":
            try {
                const shopData = await dataSchema.find({})
                res.status(200).json(shopData)
            } catch (error) {
                res.status(400).json({ success: false })
            }
            break;
        case "POST":
            try {
                const shopData = await dataSchema.create(req.body)
                res.status(201).json(shopData)
            } catch (error) {
                res.status(400).json({ success: false })
            }
            break;
        case "PUT":
            try {
                const updatedData = req.body;
                const shopID = updatedData.shopID

                // console.log("from api put")
                // const property = updatedData.isAccountCreation ? "accountDetails" : "setting"
                // let updatedSetting = ""

                const updatedSetting = await dataSchema.findOneAndUpdate({ shopID }, {"products": updatedData} )
                console.log("inside put: ", updatedData)
                if (!updatedSetting) {
                    res.status(400).json({ success: false })
                }


                res.status(201).json(updatedSetting)


            } catch (error) {
                res.status(400).json({ success: false })
            }
            break;
        default:
            res.status(400).json({ success: false });
            break;
    }
}