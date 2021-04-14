const mongoose = require('mongoose');

const shopSchema = new mongoose.Schema({
    shopName: {
        type: String
    },
    productName: {
        type: String,
    },
    price: {
        type: String,
    },
    email: {
        type: String
    },
    imageURL: {
        type: String
    },
});

module.exports = mongoose.models.shopInfo || mongoose.model('shopInfo', shopSchema)