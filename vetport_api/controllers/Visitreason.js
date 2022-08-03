const Visitreason = require("../models/Visitreason");

// Create and Save a Reason for visit
exports.create = async (req, res) => {
  try {
    const body = req.body;
    const doc = await Visitreason.create(body);
    res.status(201).json(doc);
  } catch (error) {
    res.status(500).json(error);
  }
};

// Retrieve all Reason for visit from the database.
exports.findAll = async (req, res) => {
  try {
    const docs = await Visitreason.find({}).lean();
    res.status(200).json(docs);
  } catch (error) {
    res.status(500).json(error.message);
  }
};

// Update a Reason for visit by the id in the request

exports.update = async (req, res) => {
  try {
    const id = req.params.id;
    const body = req.body;
    const doc = await Visitreason.findByIdAndUpdate(id, body, {
      new: true,
      runValidators: true,
    });
    if (doc.length === 0) {
      return res.status(404).json({ message: "Invalid id" });
    }
    res.status(200).json(doc);
  } catch (error) {
    res.status(500).json(error);
  }
};
