const Taginfo = require("../models/Taginfo");

// Create and Save a Taginfo
exports.create = async (req, res) => {
  try {
    const body = req.body;
    const Doc = new Taginfo(body);
    const doc = await Doc.save();
    res.status(200).json(doc);
  } catch (error) {
    res.status(500).json(error);
  }
};

// Retrieve all Taginfo
exports.findAll = async (req, res) => {
  try {
    let docs = await Taginfo.find({}).lean();
    res.status(200).josn(docs);
  } catch (error) {
    res.status(500).json(error.message);
  }
};
