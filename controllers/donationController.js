const Donation = require("../models/Donation");

// 🔥 we will add real-time here later
exports.createDonation = async (req, res) => {
  const donation = await Donation.create(req.body);
  res.json(donation);
};