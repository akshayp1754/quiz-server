const express = require("express");
const router = express.Router();
const UserModel = require("../models/signup");


router.route("/user-register").post( (req, res) => {
    const username = req.body.username;
    const email = req.body.email;
    const password = req.body.password;
 
    const newUserModel = new UserModel({
        username,
        email,
        password,
      });
 
      newUserModel.save()
 
});





module.exports = router;