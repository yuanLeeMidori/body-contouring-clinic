const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const customerSchema = new Schema({
    lastLoginTime: {
        type: Date,
        required: true
    },
    balaceId: {
        type: Number,
        required: true
    },

}, { timestamps: true });

const Customer = mongoose.model('customers', customerSchema);

module.exports = Customer;
