const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const balanceHistorySchema = new Schema(
  {
    balanceHistoryId: {
      type: Number,
      require: true,
    },

    balance: {
      type: Schema.Types.ObjectId,
      ref: 'balance',
      required: true,
    },

    date: {
      type: Date,
      required: true,
    },

    description: {
      type: String,
      required: true,
    },
  },
  { timestamps: true }
);

const BalanceHistory = mongoose.model('balanceHistory', balanceHistorySchema);

module.exports = BalanceHistory;
