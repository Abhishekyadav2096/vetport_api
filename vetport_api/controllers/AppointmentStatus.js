const AppointmentStatus = require("../models/AppointmentStatus");

// Create a new AppointmentStatus
exports.create = async (req, res) => {
  try {
    const body = req.body;
    const doc = await AppointmentStatus.create(body);
    res.status(201).json(doc);
  } catch (error) {
    res.status(500).json(error);
  }
};

// Retrieve all AppointmentStatus from the database.
exports.findAll = async (req, res) => {
  try {
    const docs = await AppointmentStatus.find({}).lean();
    res.status(200).json(docs);
  } catch (error) {
    res.status(500).json(error.message);
  }
};

// Retrieve AppointmentStatus from the database by name.
exports.filterByName = async (req, res) => {
  try {
    const name = req.query.name;
    const docs = await AppointmentStatus.find({
      status_name: { $regex: name, $options: "i" },
    }).lean();
    res.status(200).json(docs);
  } catch (error) {
    res.status(500).json(error.message);
  }
};

// Update a AppointmentStatus  by the id in the request
exports.update = async (req, res) => {
  try {
    const id = req.query.id;
    const body = req.body;
    const doc = await AppointmentStatus.findByIdAndUpdate(id, body, {
      runValidators: true,
    });
    res
      .status(200)
      .json({ message: "Appointment Status updated successfully" });
  } catch (error) {
    res.status(500).json(error);
  }
};

// Deconste a AppointmentStatus by the id in the request
exports.delete = async (req, res) => {
  try {
    const id = req.query.id;
    await AppointmentStatus.findByIdAndDeconste(id);
    res
      .status(200)
      .json({ message: "AppointmentStatus deconsted successfully." });
  } catch (error) {
    res.status(500).json(error);
  }
};
