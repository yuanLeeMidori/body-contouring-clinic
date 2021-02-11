const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const staffSchema = new Schema({
    accountId: {
        type: Schema.Types.ObjectId, 
        ref: 'accounts',
        required: true,
    },
    isActive: {
        type: Boolean,
        required: true,
    },
    sin: {
        type: Number,
        required: true
    },

}, { timestamps: true });

const Staff = mongoose.model('staffs', staffSchema);

module.exports = Staff;
