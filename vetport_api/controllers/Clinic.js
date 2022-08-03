const Clinic = require("../models/Clinic");

// Create and Save a new Clinic
exports.create = async (req, res) => {
  try {
    const body = req.body;
    const doc = await Clinic.create(body);
    res.status(201).json(doc);
  } catch (error) {
    res.status(500).json(error);
  }
};

// Retrieve all Clinic from the database
exports.findAll = async (req, res) => {
  try {
    const docs = await Clinic.find({}).lean();
    res.status(200).json(docs);
  } catch (error) {
    res.status(500).json(error.message);
  }
};

// Find a single clinic by id
exports.findOne = async (req, res) => {
  try {
    const id = req.params.id;
    const doc = await Clinic.findById(id).lean();
    if (doc.length === 0) {
      return res.status(404).json({ message: "Invalid Id" });
    }
    res.status(200).json(doc);
  } catch (error) {
    res.status(500).json(error);
  }
};

// update a clinic by id
exports.update = async (req, res) => {
  try {
    const id = req.params.id;
    const body = req.body;
    const doc = await Clinic.findByIdAndUpdate(id, body, {
      new: true,
      runValidators: true,
    });
    if (doc.length === 0) {
      return res.status(404).json({ message: "Invalid Id" });
    }
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

exports.getClinicByDefault = async (req, res) => {
  try {
    const doc = await Clinic.find({ default: true });
    res.status(200).json(doc);
  } catch (error) {
    res.status(500).json(error);
  }
};

// filter refferal clinic
exports.getRefferalClinic = async (req, res) => {
  try {
    const docs = await Clinic.find(
      {
        clinic_type: { $elemMatch: { $eq: "Refferal" } },
      },
      { title: 1 }
    );

    res.status(200).json(docs);
  } catch (error) {
    res.status(500).json(error.message);
  }
};
