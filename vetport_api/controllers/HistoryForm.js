const HistoryForm = require("../models/HistoryForm");

// Create and Save a History form
exports.create = async (req, res) => {
  try {
    const body = req.body;
    const doc = await HistoryForm.create(body);
    res.status(200).json(doc);
  } catch (error) {
    res.status(500).json(error);
  }
};

// Update a history form by the id in the request

exports.update = async (req, res) => {
  try {
    const id = req.params.id;
    const body = req.body;
    const doc = await HistoryForm.findByIdAndUpdate(id, body, {
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

// get history form by species
exports.findBySpecies = async (req, res) => {
  try {
    const id = req.params.id;
    const docs = await HistoryForm.find({ speciesId: id }).lean();
    res.status(200).json(docs);
  } catch (err) {
    res.status(500).json(err);
  }
};
