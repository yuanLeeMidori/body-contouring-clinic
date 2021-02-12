const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const accountLevelSchema = new Schema(
  {
    accountLevelId: {
      type: Number,
      require: true,
    },

    accountLevelName: {
      type: String,
      required: true,
    },
  },
  { timestamps: true }
);

const AccountLevel = mongoose.model('accountLevel', accountLevelSchema);

module.exports = AccountLevel;
