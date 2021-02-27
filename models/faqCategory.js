const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const faqCategorySchema = new Schema({
    faqCategoryName: {
        type: String, 
        required: true,
    },
}, { timestamps: true });

const FAQCategory = mongoose.model('faqCategories', faqCategorySchema);

module.exports = FAQCategory;
