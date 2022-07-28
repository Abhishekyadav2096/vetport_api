const Pricingstrategy = require("../models/Pricingstrategy");

// Create and Save a Pricingstrategy
exports.create = async (req, res) => {
  try {
    const body = req.body;
    const Doc = new Pricingstrategy(body);
    const doc = await Doc.save();
    res.status(200).json(doc);
  } catch (error) {
    res.status(500).json(error);
  }
};

// Retrieve all Pricingstrategy from the database.
exports.findAll = async (req, res) => {
  try {
    let docs = await Pricingstrategy.find({}).lean();
    res.status(200).josn(docs);
  } catch (error) {
    res.status(500).json(error.message);
  }
};
