const Timezone = require("../models/Timezone");

// Create and Save a Timezone
exports.create = async (req, res) => {
  try {
    const body = req.body;
    const Doc = new Timezone(body);
    const doc = await Doc.save();
    res.status(200).json(doc);
  } catch (error) {
    res.status(500).json(error);
  }
};

// Retrieve all Timezone
exports.findAll = async (req, res) => {
  try {
    let docs = await Timezone.find({});
    res.json(docs);
  } catch (error) {
    res.status(500).json(error.message);
  }
};
