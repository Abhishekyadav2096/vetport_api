const Timezone = require("../models/Timezone");

// Create and Save a Timezone
exports.create = async (req, res) => {
  try {
    const body = req.body;
    const doc = await Timezone.create(body);
    res.status(201).json(doc);
  } catch (error) {
    res.status(500).json(error);
  }
};

// Retrieve all Timezone
exports.findAll = async (req, res) => {
  try {
    const docs = await Timezone.find({}).lean();
    res.status(200).json(docs);
  } catch (error) {
    res.status(500).json(error.message);
  }
};
