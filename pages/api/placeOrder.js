import orderSchema from '../../Models/orderSchema';
import { dbConnect } from '../../utils/dbConnect';


dbConnect();

export default async (req, res) => {
    const { method } = req;
    switch (method) {
        case "GET":
            try {
                const orderData = await orderSchema.find({})
                res.status(200).json(orderData)
            } catch (error) {
                res.status(400).json({success: false})
            }
            break;
        case "POST":
            try {
                const orderData = await orderSchema.create(req.body)
                res.status(201).json(orderData)
            } catch (error) {
                res.status(400).json({success: false})
            }
            break;
        default:
            res.status(400).json({success: false});
            break;
    }
}