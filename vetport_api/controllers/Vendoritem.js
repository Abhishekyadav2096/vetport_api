const Vendoritem = require("../models/Vendoritem");

// Create and Save a Vendor item
exports.create = async (req, res) => {
  try {
    const body = req.body;
    const doc = await Vendoritem.create(body);
    res.status(201).json(doc);
  } catch (error) {
    res.status(500).json(error);
  }
};

// Retrieve all Vendor item from the database.
exports.findAll = async (req, res) => {
  try {
    let docs = await Vendoritem.find({}).lean();
    res.status(200).json(docs);
  } catch (error) {
    res.status(500).json(error.message);
  }
};

// Update a Vendor item by the id in the request

exports.update = async (req, res) => {
  try {
    const id = req.params.id;
    const body = req.body;
    const doc = await Vendoritem.findByIdAndUpdate(id, body, {
      new: true,
      runValidators: true,
    });
    res.status(200).json(doc);
  } catch (error) {
    res.status(500).json(error);
  }
};

// Retrieve vendor from the database by name.
exports.findByName = async (req, res) => {
  try {
    const name = req.params.name === undefined ? "" : req.params.name;
    const doc = await Vendoritem.find({
      title: { $regex: name, $options: "i" },
    }).lean();
    res.status(200).json(doc);
  } catch (error) {
    res.status(500).json(error);
  }
};

// Retrieve Vendoritem from the database by query
exports.filterByQuery = async (req, res) => {
  try {
    const query = req.query;
    const docs = await Vendoritem.find(query).lean();
    res.status(200).json(docs);
  } catch (error) {
    res.status(500).json(error.message);
  }
};
