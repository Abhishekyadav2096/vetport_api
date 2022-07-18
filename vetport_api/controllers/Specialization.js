const Specialization = require("../models/Specialization");

// Create and Save a Specialization
exports.create = async (req, res) => {
  try {
    const body = req.body;
    const Doc = new Specialization(body);
    const doc = await Doc.save();
    res.status(200).json(doc);
  } catch (error) {
    res.status(500).json(error);
  }
};

// Retrieve all Specialization
exports.findAll = async (req, res) => {
  try {
    let docs = await Specialization.find({}).lean();
    res.status(200).json(docs);
  } catch (error) {
    res.status(500).json(error.message);
  }
};
