const Planitem = require("../models/Planitem");

// Create and Save a Planitem
exports.create = async (req, res) => {
  try {
    const body = req.body;
    const Doc = new Planitem(body);
    const doc = await Doc.save();
    res.status(200).json(doc);
  } catch (error) {
    res.status(500).json(error);
  }
};

// Retrieve all Planitem
exports.findAll = async (req, res) => {
  try {
    let docs = await Planitem.find({}).lean();
    res.status(200).json(docs);
  } catch (error) {
    res.status(500).json(error.message);
  }
};

// Find a single planitem with an id

exports.findOne = async (req, res) => {
  try {
    const { planitemId } = req.query;
    let doc = await Planitem.findById({ _id: planitemId });
    res.status(200).json(doc);
  } catch (error) {
    res.status(500).json(error);
  }
};

// Update Planitem by query parameter
exports.update = async (req, res) => {
  try {
    const id = req.query.id;
    const body = req.body;
    const doc = await Planitem.findByIdAndUpdate(id, body).lean();
    res.status(200).json(doc);
  } catch (error) {
    res.status(500).json(error.message);
  }
};
