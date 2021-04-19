const mongoose = require('mongoose');

const orderSchema = new mongoose.Schema({
    shopID: {
        type: String
    },
    orderDate: {
        type: Number
    },
    orderMonth: {
        type: Number
    },
    orderYear: {
        type: Number
    },
    totalCost: {
        type: Number,
    },
    orders: {
        type: Array,
    },
    name: {
        type: String
    },
    phone: {
        type: String
    },
    isGift: {
        type: Boolean
    },
    recipientName: {
        type: String
    },
    recipientPhone: {
        type: String
    },
    deliveryAddress: {
        type: String
    },
    confirmationEmail: {
        type: String
    }
});

module.exports = mongoose.models.orderInfo || mongoose.model('orderInfo', orderSchema)