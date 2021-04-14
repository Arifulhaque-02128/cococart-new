import dataSchema from '../../Models/dataSchema';
import { dbConnect } from '../../utils/dbConnect';


dbConnect();

export default async (req, res) => {
    const { method } = req;
    switch (method) {
        case "GET":
            try {
                const clientData = await dataSchema.find({})
                res.status(200).json(clientData)
            } catch (error) {
                res.status(400).json({success: false})
            }
            break;
        case "POST":
            try {
                const clientData = await dataSchema.create(req.body)
                res.status(201).json(clientData)
            } catch (error) {
                res.status(400).json({success: false})
            }
            break;
        default:
            res.status(400).json({success: false});
            break;
    }
}