const mongoose = require('mongoose');

const shopSchema = new mongoose.Schema({
    shopID: {
        type: String
    },
    shopName: {
        type: String
    },
    coverURL: {
        type: String,
    },
    shop_type: {
        type: String
    },
    name: {
        type: String
    },
    products: {
        type: Array
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
    isProduct: {
        type: Boolean
    },
    isOneTime: {
        type: Boolean
    },
    cardDescription: {
        type: String
    },
    setting: {
        type: Array
    },
    accountDetails : {
        type: Array
    },
    isOneTime: {
        type: Boolean
    },
    cardDescription: {
        type: String
    },
    promoVideoLink: {
        type: String
    },
    fbLink: {
        type: String
    },
    instagramLink: {
        type: String
    },
    linkedInLink: {
        type: String
    },
    youTubeLink: {
        type: String
    }
});

module.exports = mongoose.models.shopInfo || mongoose.model('shopInfo', shopSchema)