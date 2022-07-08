const Clinic = require("../models/Clinic");

exports.create = async (req, res) => {
  try {
    const body = req.body;
    const Doc = new Clinic(body);
    const doc = await Doc.save();
    res.status(200).json(doc);
  } catch (error) {
    res.status(500).json(error);
  }
};

exports.findAll = async (req, res) => {
  try {
    let docs = await await await Clinic.find({});
    res.json(docs);
  } catch (error) {
    res.status(500).json(error.message);
  }
};

exports.findOne = async (req, res) => {
  try {
    const { id } = req.query;
    let doc = await Clinic.findById({ _id: id });
    res.status(200).json(doc);
  } catch (error) {
    res.status(500).json(error);
  }
};

exports.update = async (req, res) => {
  try {
    const { id } = req.query;
    const body = req.body;
    let doc = await Clinic.findByIdAndUpdate({ _id: id }, body);
    res.json("updated");
  } catch (error) {
    res.status(500).json(error);
  }
};
