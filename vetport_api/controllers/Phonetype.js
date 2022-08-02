const Phonetype = require("../models/Phonetype");

// Create and Save a new Phone type
exports.create = async (req, res) => {
  try {
    const body = req.body;
    const doc = await Phonetype.create(body);
    res.status(201).json(doc);
  } catch (error) {
    res.status(500).json(error);
  }
};

// Retrieve all Phonetype from the database.
exports.findAll = async (req, res) => {
  try {
    const docs = await Phonetype.find({}).lean();
    res.status(200).json(docs);
  } catch (error) {
    res.status(500).json(error.message);
  }
};

// Update a Phonetype from the database.
exports.update = async (req, res) => {
  try {
    const id = req.params.id;
    const body = req.body;
    const doc = await Phonetype.findByIdAndUpdate(id, body, {
      new: true,
      runValidators: true,
    }).lean();
    if (doc.length === 0) {
      return res.status(404).json({ message: "Invalid Id" });
    }
    res.status(200).json(doc);
  } catch (error) {
    res.status(500).json(error.message);
  }
};
