const mongoose = require('mongoose');

const serviceSchema = new mongoose.Schema({
    shopID: {
        type: String
    },
    shop_type: {
        type: String
    },
    name: {
        type: String
    },
    serviceName: {
        type: String
    },
    
    coverURL: {
        type: String,
    },
    price: {
        type: String
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
    },
    confirmationEmail: {
        type: String
    }
});

module.exports = mongoose.models.serviceShopInfo || mongoose.model('serviceShopInfo', serviceSchema)