const express = require('express')
const router = express.Router()
const clozeQuestion = require('../models/clozeque')

router.route('/clozequestion').post( async (req, res) => {
    try {
        const { questionText, option1, option2, option3,  selectedWord } = req.body;
        
  
      const newClozeQuestion = new clozeQuestion({
        questionText : questionText,
        options:[{
            option1 : option1,
            option2 : option2,
            option3 : option3,
        }],
        correctAnswer : selectedWord,
      });
      
      const savedClozeQuestion = await newClozeQuestion.save();
      res.json(savedClozeQuestion);
      console.log(newClozeQuestion);
    } catch (error) {
      res.status(500).json({ error });
    }
  });

  module.exports = router;