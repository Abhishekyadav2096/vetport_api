const Staffdesignation = require("../models/Staffdesignation");

// Create and Save a Staffdesignation
exports.create = async (req, res) => {
  try {
    const body = req.body;
    const Doc = new Staffdesignation(body);
    const doc = await Doc.save();
    res.status(200).json(doc);
  } catch (error) {
    res.status(500).json(error);
  }
};

// Retrieve all Staffdesignation
exports.findAll = async (req, res) => {
  try {
    let docs = await Staffdesignation.find({}).lean();
    res.json(docs);
  } catch (error) {
    res.status(500).json(error.message);
  }
};
