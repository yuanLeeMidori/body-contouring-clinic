const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const serviceSchema = new Schema({
<<<<<<< HEAD
  // _id: {
  //   type: mongoose.Types.ObjectId,
  //   required: true,
  // },
=======
  _id: {
    type: Number,
    required: true,
  },
>>>>>>> d34c14870e205438315e371742e6bd262d7d764c
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
    required: true,
  },
  isActive: {
    type: Boolean,
    required: true,
  },
});

const Service = mongoose.model('services', serviceSchema);

module.exports = Service;
