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

// Find a single plancategory with an id

exports.findOne = async (req, res) => {
  try {
    const { plancategoryId } = req.query;
    let doc = await Plancategory.findById({ _id: plancategoryId });
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

// Update Plan sub-category by query parameter
exports.update = async (req, res) => {
  try {
    const id = req.params.id;
    const body = req.body;
    const doc = await Plancategory.findByIdAndUpdate(id, body, {
      new: true,
      runValidators: true,
    });
    if (doc.length === 0) {
      return res.status(404).json({ message: "Invalid Id" });
    }
    res.status(200).json(doc);
  } catch (error) {
    res.status(500).json(error);
  }
};
