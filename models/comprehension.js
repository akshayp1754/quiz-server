const mongoose = require('mongoose')

const ComprehensionSchema = {
    passage : String,
    questionTitle : String,
    questionText : String,
    // radioGroup: Boolean,
    option : [String],
}

const comprehensionQue = mongoose.model("comprehensionQue", ComprehensionSchema )

module.exports = comprehensionQue