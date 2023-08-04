const mongoose = require('mongoose');

const clozeQuestionSchema = new mongoose.Schema({
  questionText: { type: String, required: true },
  options: { type: [{
    option1:String,
    option2:String,
    option3:String,
  }], required: true },
  correctAnswer: { type: String, required: true },
});

const ClozeQuestion = mongoose.model('ClozeQuestion', clozeQuestionSchema);

module.exports = ClozeQuestion;