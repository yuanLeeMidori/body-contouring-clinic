const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const offerSchema = new Schema({
    _id: {
        type: Number,
        required: true,
    },
    offerName: {
        type: String,
        required: true,
    },
    date: { // what is date in offer? expire date?
        type: String,
        required: true,
    },
    description: {
        type: String,
        required: true,
    },
    imageURL: {
        type: String,
        required: true,
    }
})

const Offer = mongoose.model('offers', offerSchema);

module.exports = Offer;