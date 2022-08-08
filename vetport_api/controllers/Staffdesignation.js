const Staffdesignation = require("../models/Staffdesignation");

// Create and Save a Staffdesignation
exports.create = async (req, res) => {
  try {
    const body = req.body;
    const doc = await Staffdesignation.create(body);

    res.status(201).json(doc);
  } catch (error) {
    res.status(500).json(error);
  }
};

// Retrieve all Staffdesignation
exports.findAll = async (req, res) => {
  try {
    const docs = await Staffdesignation.find({}).lean();
    res.status(200).json(docs);
  } catch (error) {
    res.status(500).json(error.message);
  }
};
