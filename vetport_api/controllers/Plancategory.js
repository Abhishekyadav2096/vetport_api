const Plancategory = require("../models/Plancategory");

// Create and Save a Plancategory
exports.create = async (req, res) => {
  try {
    const body = req.body;
    const Doc = new Plancategory(body);
    const doc = await Doc.save();
    res.status(200).json(doc);
  } catch (error) {
    res.status(500).json(error);
  }
};

// Retrieve all Plancategory
exports.findAll = async (req, res) => {
  try {
    let docs = await Plancategory.find({}).lean();
    res.status(200).json(docs);
  } catch (error) {
    res.status(500).json(error.message);
  }
};
