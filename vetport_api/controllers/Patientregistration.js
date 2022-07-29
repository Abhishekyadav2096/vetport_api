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

// Find  Patient

exports.findPatient = async (req, res) => {
  try {
    const query = req.query;
    let doc = await Patientregistration.find(query);
    res.status(200).json(doc);
  } catch (error) {
    res.status(500).json(error);
  }
};

// Update a Patient by the id in the request

exports.update = async (req, res) => {
  try {
    const { patientId } = req.query;
    const body = req.body;
    let doc = await Patientregistration.findByIdAndUpdate(
      { _id: patientId },
      body,
      { new: true, runValidators: true }
    );
    res.json(doc);
  } catch (error) {
    res.status(500).json(error);
  }
};

// Find  Patient Name according to client Id
exports.verifyPatientName = async (req, res) => {
  try {
    const query = req.query;
    let doc = await Patientregistration.find(query);
    if (doc.length === 0) {
      return res.status(200).json({ patientNameExists: false });
    }
    res.status(200).json({ patientNameExists: true });
  } catch (error) {
    res.status(500).json(error);
  }
};
