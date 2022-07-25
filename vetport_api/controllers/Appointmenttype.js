const Appointmenttype = require("../models/Appointmenttype");

// Create and Save a Appointmenttype
exports.create = async (req, res) => {
  try {
    const body = req.body;
    const Doc = new Appointmenttype(body);
    const doc = await Doc.save();
    res.status(201).json(doc);
  } catch (error) {
    res.status(500).json(error);
  }
};

// Retrieve all Appointmenttype from the database.
exports.findAll = async (req, res) => {
  try {
    let docs = await Appointmenttype.find({}).lean();
    res.status(200).json(docs);
  } catch (error) {
    res.status(500).json(error.message);
  }
};

// Update default Appointmenttype from the database by id.
exports.updateDefaultAppointmentType = async (req, res) => {
  try {
    const { id } = req.params;
    const defaultType = req.body;
    let doc = await Appointmenttype.findByIdAndUpdate(id, defaultType).lean();
    res.status(200).json(doc);
  } catch (error) {
    res.status(500).json(error.message);
  }
};

// Update a Appointmenttype  by the id in the request

exports.update = async (req, res) => {
  try {
    const { id } = req.query;
    const body = req.body;
    let doc = await Appointmenttype.findByIdAndUpdate({ _id: id }, body);
    res.status(200).json("doc");
  } catch (error) {
    res.status(500).json(error);
  }
};

// Delete a Appointmenttype  by the id in the request

exports.delete = async (req, res) => {
  try {
    const { id } = req.query;
    await Appointmenttype.findByIdAndDelete({ _id: id });
    res.status(200).json("document deleted successfully");
  } catch (error) {
    res.status(500).json(error);
  }
};
