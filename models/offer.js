const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const offerSchema = new Schema({
  offerName: {
    type: String,
    required: true,
  },
  appliedService: {
    type: Schema.Types.ObjectId,
    ref: 'services',
    required: true,
  },
  startDate: {
    type: Date,
    required: true,
  },
  endDate: {
    type: Date,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
  imageURL: {
    type: String,
  },
});

const Offer = mongoose.model('offers', offerSchema);

module.exports = Offer;
