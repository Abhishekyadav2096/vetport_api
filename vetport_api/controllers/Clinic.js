const Clinic = require("../models/Clinic");

// Create and Save a new Clinic
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

// Retrieve all Clinic from the database
exports.findAll = async (req, res) => {
  try {
    let docs = await Clinic.find({}).lean();
    res.status(200).json(docs);
  } catch (error) {
    res.status(500).json(error.message);
  }
};

// Find a single clinic by id
exports.findOne = async (req, res) => {
  try {
    const { clinicId } = req.query;
    let doc = await Clinic.findById({ _id: clinicId });
    res.status(200).json(doc);
  } catch (error) {
    res.status(500).json(error);
  }
};

// update a clinic by id
exports.update = async (req, res) => {
  try {
    const { clinicId } = req.query;
    const body = req.body;
    let doc = await Clinic.findByIdAndUpdate({ _id: clinicId }, body);

    res.status(200).json(doc);
  } catch (error) {
    res.status(500).json(error);
  }
};

// Retrieve Clinic by type and status
exports.findByTypeAndStatus = async (req, res) => {
  try {
    let doc = await Clinic.find({
      clinic_type: { $elemMatch: { $eq: req.query.type } },
      status: { $eq: req.query.status },
    });
    res.status(200).json(doc);
  } catch (error) {
    res.status(500).json(error);
  }
};

//Retrieve Clinic by name

exports.filterByClinicName = async (req, res) => {
  try {
    docs = await Clinic.aggregate([
      {
        $project: {
          title: "$title",
        },
      },
    ]);

    res.status(200).json(docs);
  } catch (error) {
    res.status(500).json(error.message);
  }
};
