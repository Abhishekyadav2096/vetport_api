const Patientregistration = require("../models/Patientregistration");
//const Clientregistration = require("../models/Clientregistration")

// Create and Save a new Patient

exports.create = async (req, res) => {
  try {
    const body = req.body;
    const Doc = new Patientregistration(body);
    const doc = await Doc.save();
    console.log(req.body);
    res.status(200).json(doc);
  } catch (error) {
    res.status(500).json(error);
  }
};

// Find a single Patient with an id

exports.findOne = async (req, res) => {
  try {
    const { id } = req.query;
    let doc = await Patientregistration.findById({ _id: id });
    res.status(200).json(doc);
  } catch (error) {
    res.status(500).json(error);
  }
};

// Update a Patient by the id in the request

exports.update = async (req, res) => {
  try {
    const { id } = req.query;
    const body = req.body;
    let doc = await Patientregistration.findByIdAndUpdate({ _id: id }, body);
    res.json("updated");
  } catch (error) {
    res.status(500).json(error);
  }
};
