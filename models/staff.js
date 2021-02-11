const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const staffSchema = new Schema({
    isActive: {
        type: String,
        required: true
    },
    sin: {
        type: Number,
        required: true
    },

}, { timestamps: true });

const Staff = mongoose.model('staffs', staffSchema);

module.exports = Staff;
