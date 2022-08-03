const CategoryTax = require("../models/CategoryTax");

// Create and Save a new CategoryTax
exports.create = async (req, res) => {
  try {
    const body = req.body;
    const doc = await CategoryTax.create(body);
    res.status(201).json(doc);
  } catch (error) {
    res.status(500).json(error);
  }
};

// Retrieve all CategoryTax from the database.
exports.findAll = async (req, res) => {
  try {
    let docs = await CategoryTax.find({}).lean();
    res.status(200).json(docs);
  } catch (error) {
    res.status(500).json(error.message);
  }
};

// Update a CategoryTax by the id in the request
exports.update = async (req, res) => {
  try {
    const id = req.params.id;
    const body = req.body;
    const doc = await CategoryTax.findByIdAndUpdate(id, body, {
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
