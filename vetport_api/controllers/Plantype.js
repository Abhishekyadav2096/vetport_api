const Plantype = require("../models/Plantype");

// Create and Save a Plantype
exports.create = async (req, res) => {
  try {
    const body = req.body;
    const Doc = new Plantype(body);
    const doc = await Doc.save();
    res.status(200).json(doc);
  } catch (error) {
    res.status(500).json(error);
  }
};

// Retrieve all Plantype
exports.findAll = async (req, res) => {
  try {
    let docs = await Plantype.find({}).lean();
    res.status(200).json(docs);
  } catch (error) {
    res.status(500).json(error.message);
  }
};
