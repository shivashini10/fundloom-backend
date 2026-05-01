const express = require("express");
const router = express.Router();
const Campaign = require("../models/Campaign"); // adjust path if needed

// 🔹 GET all campaigns
router.get("/", async (req, res) => {
  const campaigns = await Campaign.find();
  res.json(campaigns);
});

// 🔹 POST (ADD THIS HERE 👇)
router.post("/", async (req, res) => {
  try {
    const { title, amount, story, beneficiary } = req.body;

    if (!title || !amount || !story || !beneficiary) {
      return res.status(400).json({ message: "All fields are required" });
    }

    const campaign = new Campaign(req.body);
    await campaign.save();

    res.status(201).json(campaign);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

module.exports = router;