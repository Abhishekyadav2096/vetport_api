const Manufacturer = require("../models/Manufacturer");

// Create and Save a Manufacturer
exports.create = async (req, res) => {
  try {
    const body = req.body;
    const Doc = new Manufacturer(body);
    const doc = await Doc.save();
    res.status(201).json(doc);
  } catch (error) {
    res.status(500).json(error);
  }
};

// Retrieve all Manufacturer from the database.
exports.findAll = async (req, res) => {
  try {
    let docs = await Manufacturer.find({});
    res.status(200).json(docs);
  } catch (error) {
    res.status(500).json(error.message);
  }
};

// Update a Manufacturer by the id in the request

exports.update = async (req, res) => {
  try {
    const id = req.params.id;
    const body = req.body;
    const doc = await Manufacturer.findByIdAndUpdate(id, body, {
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

// Retrieve Manufacturer from the database by name.
exports.findByName = async (req, res) => {
  try {
    const name = req.params.name === undefined ? "" : req.params.name;
    const doc = await Manufacturer.find({
      title: { $regex: name, $options: "i" },
    }).lean();
    res.status(200).json(doc);
  } catch (error) {
    res.status(500).json(error);
  }
};
