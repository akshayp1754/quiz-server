const mongoose = require('mongoose')


const categorySchema = {
    items: String,
  inputFields: [String],
}

const categories = mongoose.model("categories", categorySchema)

module.exports = categories