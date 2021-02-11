const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const requestSchema = new Schema({
    lastLoginTime: {
        type: Date,
        required: true
    },
    balaceId: {
        type: Number,
        required: true
    },

}, { timestamps: true });

const Request = mongoose.model('requests', requestSchema);

module.exports = Request;
