const mongoose = require('mongoose');

const orderSchema = new mongoose.Schema({
    shopID: {
        type: String
    },
    product_name: {
        type: String,
    },
    imageURL:{
        type: String,
    },
    product_amount: {
        type: String,
    },
    totalCost: {
        type: Number,
    },
    client_name: {
        type: String
    },
    client_phone: {
        type: String
    },
    isGift: {
        type: Boolean
    },
    receive_via: {
        type: String
    },
    client_email: {
        type: String
    },
    payment_method: {
        type: String
    },

    delivery_address: {
        type: String
    },
    emailAddress: {
        type: String
    },
    fbAddress: {
        type: String
    },
    instagramAddress: {
        type: String
    },
    whatsApp: {
        type: String
    }
});

module.exports = mongoose.models.orderInfo || mongoose.model('orderInfo', orderSchema)