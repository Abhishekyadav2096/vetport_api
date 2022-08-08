const Reference = require("../models/Reference");

// Create and Save a Reference of species
exports.create = async (req, res) => {
  try {
    const body = req.body;
    const doc = await Reference.create(body);

    res.status(201).json(doc);
  } catch (error) {
    res.status(500).json(error);
  }
};

// Retrieve all Reference from the database.
exports.findAll = async (req, res) => {
  try {
    const docs = await Reference.find({}).lean();
    res.status(200).josn(docs);
  } catch (error) {
    res.status(500).json(error.message);
  }
};

// Update a Reference by the id in the request

exports.update = async (req, res) => {
  try {
    const id = req.params.id;
    const body = req.body;
    const doc = await Reference.findByIdAndUpdate(id, body, {
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
