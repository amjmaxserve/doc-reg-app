const express = require("express");
const router = express.Router();
const User = require("../models/userModel");

// Define a route for the /api/user/register endpoint
router.post("/register", async (req, res) => {
  const user = new User(req.body);
  await user.save();
  res.json(user);
});

module.exports = router;
