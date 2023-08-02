const express = require("express");
const router = express.Router();
const UserModel = require("../models/signup");

// Define a route for handling POST requests to "/user-register"
router.post("/user-register", async (req, res) => {
  try {
    const addNewUser = await UserModel.create(req.body);
    return res.json({ userAdded: addNewUser, message: "User was added" });
  } catch (error) {
    // If there's an error, handle it appropriately
    return res.status(500).json({ error: "Internal Server Error" });
  }
});

module.exports = router;