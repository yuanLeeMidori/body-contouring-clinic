const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const requestSchema = new Schema({
    accountId: {
      type: Schema.Types.ObjectId, 
      ref: 'accounts',
      required: true,
    }, 
    serviceCategoryId: {
      type: Schema.Types.ObjectId, 
      ref: 'serviceCategories',
      required: true,
    }, 
    requestCategoryId: {
      type: Schema.Types.ObjectId, 
      ref: 'requestCategories',
      required: true,
    }, 
    title: {
      type: String,
      required: true,
    },
    contents: {
      type: String,
      required: true,
    },
    date: {
      type: Date,
      required: true
    },
    lastRequestTime: {
        type: Date,
        required: true
    },
    attachedFile: {
        type: Buffer,
        required: true
    },

}, { timestamps: true });

const Request = mongoose.model('requests', requestSchema);

module.exports = Request;
