const Country = require("../models/Country");

// Create and Save a Country
exports.create = async (req, res) => {
  try {
    const body = req.body;
    const doc = await Country.create(body);
    res.status(201).json(doc);
  } catch (error) {
    res.status(500).json(error);
  }
};

// Retrieve all Country
exports.findAll = async (req, res) => {
  try {
    const docs = await Country.find({}).lean();
    res.status(200).json(docs);
  } catch (error) {
    res.status(500).json(error);
  }
};
