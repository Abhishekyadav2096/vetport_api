const Equipment = require("../models/Equipment");

// Create a new Equipment
exports.create = async (req, res) => {
  try {
    const body = req.body;
    const doc = await Equipment.create(body);
    res.status(201).json(doc);
  } catch (err) {
    res.status(500).send(error.message);
  }
};

// Find all Equipment
exports.find = async (req, res) => {
  try {
    const docs = await Equipment.find({}).lean();
    res.status(200).json(docs);
  } catch (err) {
    res.status(500).json(error.message);
  }
};

// Update an Equipment by id
exports.update = async (req, res) => {
  try {
    const id = req.params.id;
    const body = req.body;
    const doc = await Equipment.findByIdAndUpdate(id, body, {
      new: true,
      runValidators: true,
    });
    if (doc.length === 0) {
      return res.status(404).json({ message: "Invalid Id" });
    }
    res.status(200).json(doc);
  } catch (error) {
    res.status(500).json(error.message);
  }
};
