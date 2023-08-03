const express = require("express");
const router = express.Router();
const UserModel = require("../models/signup");

// router.get("/user", async (req, res) => {
//   try {
//     const users = await UserModel.find();
//     if(!users){
//       res.status(400).json({
//         success: false,
//         message: "No data found"
//       })
//     }
//     return  res.status(200).json({
//       success: true,
//       data: users,
//       message: "Data fetched successfully",
//     });
//   } catch (error) {
//     res.status(400).json({
//       success: false,
//       message: error.message,
//     });
//   }
// })

router.route("/login").post(async (req, res) => {
  try {
    const { email } = req.body;
    const { password } = req.body;
    console.log(email, password);
    const user =await UserModel.findOne({ email: email });
    if (!user) {
      return res.status(400).json({
        success: false,
        message: "User not found",
      });
    }
    if (user.password !== password) {
      return res.status(400).json({
        success: false,
        message: "Incorrect password",
      });
    }
    return res.status(200).json({
      success: true,
      message: "User logged in successfully",
      data: {
        username: user.username,
        email: user.email,
      },
    });
  } catch (error) {
    return res.status(400).json({
      success: false,
      message: error.message,
    });
  }
});

router.route("/signup").post(async(req, res) => {
  const { username } = req.body;
  const { email } = req.body;
  const { password } = req.body;
  console.log(username, email, password);
  try {
    const user =await UserModel.findOne({ email: email });
    if (user) {
      return res.status(400).json({
        success: false,
        message: "User already exists",
        data:null
      });
    }
    // const newUser = await UserModel.create({
    //   username: username,
    //   email: email,
    //   password: password,
    // })

    const newUserModel = new UserModel({
      username: username,
      email: email,
      password: password,
    });
    newUserModel.save();
    return res.status(200).json({
      success: true,
      message: "User registered successfully",
      data: {
        username: username,
        email: email,
      },
    });
  } catch (error) {
    res.status(400).json({
      success: false,
      message: error.message,
    });
  }
});

module.exports = router;
