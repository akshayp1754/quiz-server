const mongoose = require('mongoose')


const categorySchema = {
    description: String,
    // categories: String,
    // item: String,
    // belongsTo: String
}

const categories = mongoose.model("categories", categorySchema)

module.exports = categories