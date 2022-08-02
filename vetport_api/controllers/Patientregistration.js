const Patientregistration = require("../models/Patientregistration");

// Create and Save a new Patient
exports.create = async (req, res) => {
  try {
    const body = req.body;
    const doc = await Patientregistration.create(body);
    res.status(201).json(doc);
  } catch (error) {
    res.status(500).json(error);
  }
};

// Find all Patient
exports.findAll = async (req, res) => {
  try {
    const doc = await Patientregistration.find({}).lean();
    res.status(200).json(doc);
  } catch (error) {
    res.status(500).json(error);
  }
};

// Find  Patient
exports.findOne = async (req, res) => {
  try {
    const id = req.params.id;
    const doc = await Patientregistration.findById(id).lean();
    if (doc.length === 0) {
      return res.status(404).json({ message: "Invalid id" });
    }
    res.status(200).json(doc);
  } catch (error) {
    res.status(500).json(error);
  }
};

// Update a Patient by the id in the request
exports.update = async (req, res) => {
  try {
    const id = req.params.id;
    const body = req.body;
    const doc = await Patientregistration.findByIdAndUpdate(id, body, {
      new: true,
      runValidators: true,
    });
    res.status(200).json(doc);
  } catch (error) {
    res.status(500).json(error);
  }
};

// Find  Patient Name according to client Id
exports.verifyPatientName = async (req, res) => {
  try {
    const query = req.params;
    const doc = await Patientregistration.find(query).lean();
    if (doc.length === 0) {
      return res.status(200).json({ patientNameExists: false });
    }
    res.status(200).json({ patientNameExists: true });
  } catch (error) {
    res.status(500).json(error);
  }
};
