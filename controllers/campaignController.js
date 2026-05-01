const Campaign = require("../models/Campaign");

exports.createCampaign = async (req, res) => {
  const campaign = await Campaign.create(req.body);
  res.json(campaign);
};

exports.getCampaigns = async (req, res) => {
  const campaigns = await Campaign.find();
  res.json(campaigns);
};