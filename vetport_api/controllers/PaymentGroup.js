const Paymentgroup = require("../models/PaymentGroup");

// Create and Save a Payment group
exports.create = async (req, res) => {
  try {
    const body = req.body;
    const doc = await Paymentgroup.create(body);
    res.status(201).json(doc);
  } catch (error) {
    res.status(500).json(error);
  }
};

// Retrieve all Payment group from the database.
exports.findAll = async (req, res) => {
  try {
    let docs = await Paymentgroup.find({}).lean();
    res.status(200).json(docs);
  } catch (error) {
    res.status(500).json(error.message);
  }
};

// Retrieve payment group from the database by name.
exports.findByName = async (req, res) => {
  try {
    const name = req.params.name === undefined ? "" : req.params.name;
    const doc = await Paymentgroup.find({
      title: { $regex: name, $options: "i" },
    }).lean();
    res.status(200).json(doc);
  } catch (error) {
    res.status(500).json(error);
  }
};
