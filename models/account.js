const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const accountSchema = new Schema(
  {
    firstName: {
      type: String,
      required: true,
    },
    lastName: {
      type: String,
      required: true,
    },
    userID: {
      type: String,
      required: true,
    },
    password: {
      type: String,
      required: true,
    },
    email: {
      type: String,
      required: true,
    },
    address: {
      type: String,
    },
    accountLevelId: {
      type: Schema.Types.ObjectId,
      ref: 'accountLevels',
      required: true,
    },
  },
  { timestamps: true }
);

const Account = mongoose.model('accounts', accountSchema);

module.exports = Account;
