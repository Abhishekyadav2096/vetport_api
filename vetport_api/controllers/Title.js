const Title = require("../models/Title");

// Create and Save a Title
exports.create = async (req, res) => {
  try {
    const body = req.body;
    const Doc = new Title(body);
    const doc = await Doc.save();
    res.status(200).json(doc);
  } catch (error) {
    res.status(500).json(error);
  }
};

// Retrieve all Title
exports.findAll = async (req, res) => {
  try {
    let docs = await Title.find({}).lean();
    res.status(200).json(docs);
  } catch (error) {
    res.status(500).json(error.message);
  }
};
