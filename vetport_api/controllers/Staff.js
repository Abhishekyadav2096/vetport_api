const Staff = require("../models/Staff");

// Create and Save a Staff
exports.create = async (req, res) => {
  try {
    const body = req.body;
    const Doc = new Staff(body);
    const doc = await Doc.save();
    res.status(200).json(doc);
  } catch (error) {
    res.status(500).json(error);
  }
};

// Retrieve all Staff from the database.
exports.findAll = async (req, res) => {
  try {
    let docs = await Staff.find({});
    res.json(docs);
  } catch (error) {
    res.status(500).json(error.message);
  }
};

exports.filterProviderByName = async (req, res) => {
  try {
    let docs = await Staff.find({}, { _id: 1, firstName: 1, lastName: 1 });

    res.json(docs);
  } catch (error) {
    res.status(500).json(error.message);
  }
};

// Update a Staff by the id in the request

exports.update = async (req, res) => {
  try {
    const { id } = req.query;
    const body = req.body;
    let doc = await Staff.findByIdAndUpdate({ _id: id }, body);
    res.json("updated");
  } catch (error) {
    res.status(500).json(error);
  }
};
