const express = require("express");
const router = express.Router();
const User = require("../models/User");

// LOGIN (or create user if not exists)
router.post("/login", async (req, res) => {
  try {
    const { email, password } = req.body;

    let user = await User.findOne({ email });

    if (!user) {
      // 👉 Create new user if not exists
      user = new User({ email, password });
      await user.save();
    }

    res.json({
      message: "Login successful",
      user,
    });

  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

module.exports = router;