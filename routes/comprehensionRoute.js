const express = require("express");
const router = express.Router();
const comprehensionQue = require("../models/comprehension");

router.route("/comprehension").post((req, res) => {
  const passage = req.body.passage;
  const questionTitle = req.body.questionTitle;
  const questionText = req.body.questionText;
  const option = req.body.option;

  
  const newComprehensionQue = new comprehensionQue({
    passage,
    questionTitle,
    questionText,
    option,
  });

  newComprehensionQue.save();
});

router.route("/test").get((req, res) => {
  try{
  const data = comprehensionQue.find().then((foundQue) => res.status(200).json({
    success: true,
    data: foundQue,
    message: "Data fetched successfully"
  }));
  }catch(error){
    res.status(400).json({
      success: false,
      message: error.message
    })
  }
});

module.exports = router;