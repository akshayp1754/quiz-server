const mongoose = require('mongoose')


const ComprehensionSchema = {
    passage : String,
    questionTitle : String,
    questionText : String,
    // option : [{"Option 1":String,"Option 2":String,"Option 3":String,"Option 4":String,}],
    option : [String],
}

const comprehensionQue = mongoose.model("comprehensionQue", ComprehensionSchema )

module.exports = comprehensionQue