const mongoose = require('mongoose');

const serviceSchema = new mongoose.Schema({
/* 
    shopid: shopid,
      name: this.state.name,
      serviceName: this.state.serviceName,
      coverURL: this.state.imageURL,
      price: this.state.price,
      isOneTime: this.state.isOneTime,
      cardDescription: this.state.cardDescription,
      haveVideo: this.state.haveVideo,
      youtubeLink: this.state.youtubeLink,
      wantSocial: this.state.wantSocial,
      email: this.state.email
    } */
    shopID: {
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
    haveVideo: {
        type: Boolean
    },
    youtubeLink: {
        type: String
    },
    wantSocial: {
        type: Boolean
    },
    confirmationEmail: {
        type: String
    }
});

module.exports = mongoose.models.serviceShopInfo || mongoose.model('serviceShopInfo', serviceSchema)