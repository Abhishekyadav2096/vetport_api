const Reference = require("../models/Reference");

// Create and Save a Reference of species
exports.create = async (req, res) => {
  try {
    const body = req.body;
    const Doc = new Reference(body);
    const doc = await Doc.save();
    res.status(200).json(doc);
  } catch (error) {
    res.status(500).json(error);
  }
};

// Retrieve all Reference from the database.
exports.findAll = async (req, res) => {
  try {
    let docs = await Reference.find({}).lean();
    res.status(200).josn(docs);
  } catch (error) {
    res.status(500).json(error.message);
  }
};

// Update a Reference by the id in the request

exports.update = async (req, res) => {
  try {
    const { id } = req.query;
    const body = req.body;
    let doc = await Reference.findByIdAndUpdate({ _id: id }, body);
    res.json("updated");
  } catch (error) {
    res.status(500).json(error);
  }
};
