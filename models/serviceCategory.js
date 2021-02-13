const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const serviceCategorySchema = new Schema(
  {
    // _id: {
    //   type: mongoose.Types.ObjectId,
    //   required: true,
    // },
    CategoryName: {
      type: String,
      required: true,
    },
  },
  { timestamps: true }
);

const ServiceCategory = mongoose.model('serviceCategories', serviceCategorySchema);

module.exports = ServiceCategory;
