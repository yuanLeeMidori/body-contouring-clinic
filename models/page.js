const mongoose = require('mongoose')
const Schema = mongoose.Schema;

const pageSchema = new Schema({
    _id: {
        type: Number,
        required: true,
    },
    accountId: {
        type: Schema.Types.ObjectId,
        ref: 'accounts',
        required: true,
    },
    isActive: {
        type: Boolean,
        required: true,
    }
})

const Page = mongoose.model('pages', pageSchema);

module.exports = Page;