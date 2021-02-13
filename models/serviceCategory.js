const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const serviceCategorySchema = new Schema(
  {
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
    CategoryName: {
      type: String,
      required: true,
    },
  },
  { timestamps: true }
);

const ServiceCategory = mongoose.model('serviceCategories', serviceCategorySchema);

module.exports = ServiceCategory;
