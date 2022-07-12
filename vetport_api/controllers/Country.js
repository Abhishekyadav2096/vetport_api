const Country = require("../models/Country");

// Create and Save a Country
exports.create = async (req, res) => {
  try {
    const body = req.body;
    const Doc = new Country(body);
    const doc = await Doc.save();
    res.status(200).json(doc);
  } catch (error) {
    res.status(500).json(error);
  }
};

// Retrieve all Country
exports.findAll = async (req, res) => {
  try {
    let docs = await Country.find({});
    res.json(docs);
  } catch (error) {
    res.status(500).json(error.message);
  }
};
