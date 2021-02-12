const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const balanceSchema = new Schema(
  {
    balanceId: {
      type: Number,
      require: true,
    },

    service: {
      type: Schema.Types.ObjectId,
      ref: 'service',
      required: true,
    },

    balanceAccount: {
      type: Number,
      required: true,
    },

    isActive: {
      type: Boolean,
      required: true,
    },
  },
  { timestamps: true }
);

const Balance = mongoose.model('balance', balanceSchema);

module.exports = Balance;
