const mongoose = require('mongoose');

const orderSchema = new mongoose.Schema({
    shopID: {
        type: String
    },
    shopName: {
        type: String
    },
    productName: {
        type: String,
    },
    price: {
        type: Number,
    },
    imageURL: {
        type: String
    },
    hasOptions: {
        type: Boolean
    },
    options: {
        type: Array
    },
    hasSpecificDate: {
        type: Boolean
    },
    orderType: {
        type: String
    },
    hasDeliveryFee: {
        type: Boolean
    },
    deliveryCost: {
        type: Number
    },
    instructions: {
        type: String
    },
    email: {
        type: String
    },
});

module.exports = mongoose.models.orderInfo || mongoose.model('orderInfo', orderSchema)