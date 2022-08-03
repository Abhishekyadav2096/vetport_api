const EquipmentCategory = require("../models/EquipmentCategory");

// Create a new EquipmentCategory
exports.create = async (req, res) => {
  try {
    const body = req.body;
    const doc = await EquipmentCategory.create(body);
    res.status(201).json(doc);
  } catch (err) {
    res.status(500).send(error.message);
  }
};

// Find all EquipmentCategories
exports.find = async (req, res) => {
  try {
    const docs = await EquipmentCategory.find({}).lean();
    res.status(200).json(docs);
  } catch (err) {
    res.status(500).json(error.message);
  }
};

// Update an EquipmentCategory by id
exports.update = async (req, res) => {
  try {
    const id = req.params.id;
    const body = req.body;
    const doc = await EquipmentCategory.findByIdAndUpdate(id, body, {
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
