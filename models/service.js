const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const serviceSchema = new Schema(
  {
    serviceCategory: {
      type: Schema.Types.ObjectId,
      ref: 'serviceCategories',
      required: true,
    },
    serviceName: {
      type: String,
      required: true,
    },
    serviceDescription: {
      type: String,
    },
    isActive: {
      type: Boolean,
      required: true,
    },
  },
  { timestamps: true }
);

const Service = mongoose.model('services', serviceSchema);

module.exports = Service;
