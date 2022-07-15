const Appointment = require("../models/Appointment");

// Create and Save a Appointment
exports.create = async (req, res) => {
  try {
    const body = req.body;
    const Doc = new Appointment(body);
    const doc = await Doc.save();
    res.status(200).json(doc);
  } catch (error) {
    res.status(500).json(error);
  }
};

// Retrieve all Appointment from the database.
exports.findAll = async (req, res) => {
  try {
    let docs = await Appointment.find({}).lean();
    res.status(200).json(docs);
  } catch (error) {
    res.status(500).json(error.message);
  }
};
