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
  comprehensionQue.find().then((foundQue) => res.json(foundQue));
});

module.exports = router;
