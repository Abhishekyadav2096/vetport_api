const Phonetype = require("../models/Phonetype");

// Create and Save a new Phone type

exports.create = async (req, res) => {
  try {
    const body = req.body;
    const Doc = new Phonetype(body);
    const doc = await Doc.save();
    console.log(req.body);
    res.status(200).json(doc);
  } catch (error) {
    res.status(500).json(error);
  }
};

// Retrieve all Phonetype from the database.

exports.findAll = async (req, res) => {
  try {
    let docs = await Phonetype.find({}).lean();
    res.status(200).josn(docs);
  } catch (error) {
    res.status(500).json(error.message);
  }
};
