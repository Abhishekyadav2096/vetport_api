const Usergroup = require("../models/Usergroup");

// Create and Save a User group
exports.create = async (req, res) => {
  try {
    const body = req.body;
    const Doc = new Usergroup(body);
    const doc = await Doc.save();
    res.status(200).json(doc);
  } catch (error) {
    res.status(500).json(error);
  }
};

// Retrieve all Usergroup from the database.
exports.findAll = async (req, res) => {
  try {
    let docs = await Usergroup.find({}).lean();
    res.status(200).json(docs);
  } catch (error) {
    res.status(500).json(error.message);
  }
};

// Update a Usergroup by the id in the request

exports.update = async (req, res) => {
  try {
    const { id } = req.query;
    const body = req.body;
    let doc = await Usergroup.findByIdAndUpdate({ _id: id }, body);
    res.status(200).json("updated");
  } catch (error) {
    res.status(500).json(error);
  }
};
