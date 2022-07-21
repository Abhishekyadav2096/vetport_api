const Patientgroupcategory = require("../models/Patientgroupcategory");

// Create and Save a Patientgroupcategory
exports.create = async (req, res) => {
  try {
    const body = req.body;
    const Doc = new Patientgroupcategory(body);
    const doc = await Doc.save();
    res.status(200).json(doc);
  } catch (error) {
    res.status(500).json(error);
  }
};

// Retrieve all Patientgroupcategory
exports.findAll = async (req, res) => {
  try {
    let docs = await Patientgroupcategory.find({}).lean();
    res.status(200).josn(docs);
  } catch (error) {
    res.status(500).json(error.message);
  }
};
