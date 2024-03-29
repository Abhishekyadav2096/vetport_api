const Vendor = require("../models/Vendor");

// Create and Save a Vendor
exports.create = async (req, res) => {
  try {
    const body = req.body;
    const doc = await Vendor.create(body);
    res.status(201).json(doc);
  } catch (error) {
    res.status(500).json(error);
  }
};

// Retrieve all Vendor  from the database.
exports.findAll = async (req, res) => {
  try {
    let docs = await Vendor.find({}).lean();
    res.status(200).json(docs);
  } catch (error) {
    res.status(500).json(error.message);
  }
};

// Update a Vendor by the id in the request

exports.update = async (req, res) => {
  try {
    const id = req.params.id;
    const body = req.body;
    const doc = await Vendor.findByIdAndUpdate(id, body, {
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

// Retrieve vendor from the database by name.
exports.findByName = async (req, res) => {
  try {
    const name = req.params.name === undefined ? "" : req.params.name;
    const doc = await Vendor.find({
      title: { $regex: name, $options: "i" },
    }).lean();
    res.status(200).json(doc);
  } catch (error) {
    res.status(500).json(error);
  }
};

exports.findByStatus = async (req, res) => {
  try {
    const status = req.params.status;
    const doc = await Vendor.find({
      status: { $eq: req.params.status },
    });
    res.status(200).json(doc);
  } catch (error) {
    res.status(500).json(error);
  }
};
