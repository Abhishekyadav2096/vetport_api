const Stockbasket = require("../models/Stockbasket");

// Create and Save a Stock basket
exports.create = async (req, res) => {
  try {
    const body = req.body;
    const doc = await Stockbasket.create(body);
    res.status(201).json(doc);
  } catch (error) {
    res.status(500).json(error);
  }
};

// Retrieve all Stock basket from the database.
exports.findAll = async (req, res) => {
  try {
    let docs = await Stockbasket.find({}).lean();
    res.json(docs);
  } catch (error) {
    res.status(500).json(error.message);
  }
};

// Update a Stock basket by the id in the request

exports.update = async (req, res) => {
  try {
    const id = req.params.id;
    const body = req.body;
    const doc = await Stockbasket.findByIdAndUpdate(id, body, {
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

// Retrieve stockBasket from the database by name.
exports.findByName = async (req, res) => {
  try {
    const name = req.params.name === undefined ? "" : req.params.name;
    const doc = await Stockbasket.find({
      title: { $regex: name, $options: "i" },
    }).lean();
    res.status(200).json(doc);
  } catch (error) {
    res.status(500).json(error);
  }
};

// Retrieve stockbasket from the database by query
exports.filterByQuery = async (req, res) => {
  try {
    const query = req.query;
    const docs = await Stockbasket.find(query).lean();
    res.status(200).json(docs);
  } catch (error) {
    res.status(500).json(error.message);
  }
};
