const ExamForm = require("../models/Examform");

// Create a new ExamForm
exports.create = async (req, res) => {
  try {
    const body = req.body;
    const doc = await ExamForm.create(body);

    res.status(201).json(doc);
  } catch (err) {
    res.status(500).json(err);
  }
};

// Filter exam forms by species
exports.findBySpecies = async (req, res) => {
  try {
    const speciesId = req.params.species;
    const doc = await ExamForm.find({ species: speciesId }).lean();

    if (doc.length === 0) {
      return res.status(404).json({ message: "Invalid Id" });
    }

    res.status(200).json(doc);
  } catch (err) {
    res.status(500).json(err);
  }
};

// Update exam form
exports.update = async (req, res) => {
  try {
    const id = req.params.id;
    const body = req.body;
    const doc = await ExamForm.findByIdAndUpdate(id, body, {
      new: true,
      runValidators: true,
    }).lean();

    if (doc.length === 0) {
      return res.status(404).json({ message: "Invalid Id" });
    }

    res.status(200).json(doc);
  } catch (err) {
    res.status(500).json(err);
  }
};
