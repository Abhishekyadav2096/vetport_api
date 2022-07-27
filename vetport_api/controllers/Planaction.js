const Planaction = require("../models/Planaction");

// Create and Save a Planaction
exports.create = async (req, res) => {
  try {
    const body = req.body;
    const Doc = new Planaction(body);
    const doc = await Doc.save();
    res.status(200).json(doc);
  } catch (error) {
    res.status(500).json(error);
  }
};

// Retrieve all Planaction
exports.findAll = async (req, res) => {
  try {
    let docs = await Planaction.find({}).lean();
    res.status(200).json(docs);
  } catch (error) {
    res.status(500).json(error.message);
  }
};
