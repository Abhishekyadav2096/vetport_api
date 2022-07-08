const State = require("../models/State");

// Create and Save a State
exports.create = async (req, res) => {
  try {
    const body = req.body;
    const Doc = new State(body);
    const doc = await Doc.save();
    res.status(200).json(doc);
  } catch (error) {
    res.status(500).json(error);
  }
};

// Retrieve all Relationship
exports.findAll = async (req, res) => {
  try {
    let docs = await State.find({});
    res.json(docs);
  } catch (error) {
    res.status(500).json(error.message);
  }
};
