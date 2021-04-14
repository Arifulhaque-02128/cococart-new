const mongoose = require('mongoose');

const productSchema = new mongoose.Schema({
    domainName: {
        type: String
    },
    category: {
        type: String,
    },
    pageName: {
        type: String,
        trim: true,
    },
    pageInfo: {
        type: Array
    },
    contactInfo: {
        type: Array
    },
    products: {
        type: Array
    }
});

module.exports = mongoose.models.clientInfo || mongoose.model('clientInfo', productSchema)