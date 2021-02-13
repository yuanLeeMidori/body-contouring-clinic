const mongoose = require('mongoose')
const Schema = mongoose.Schema;

const pageSchema = new Schema({
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