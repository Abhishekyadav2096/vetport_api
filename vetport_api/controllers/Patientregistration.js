const EventEmitter = require("events");
const eventEmitter = new EventEmitter();

const Patientregistration = require("../models/Patientregistration");
const patientEmitter = require("../events/Patientemitter");

eventEmitter.on("updatePatientInfo", patientEmitter.updatePatientInfo);

// Create and Save a new Patient
exports.create = async (req, res) => {
  try {
    const body = req.body;
    const doc = new Patientregistration(body);
    await doc.populate("clientId");
    const client = doc.clientId;

    doc.patientInfo = [
      ...client.firstName.split(" "),
      ...client.lastName.split(" "),
      ...client.address1.split(" "),
      ...client.address2.split(" "),
      client.email,
      client.phoneNumber[0].pnumber,
      ...doc.patientName.split(" "),
    ].join(" ");

    await doc.save();

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
    let startTimer = new Date().getTime();
    const id = req.params.id;
    const body = req.body;
    console.log(id);
    const doc = await Patientregistration.findByIdAndUpdate(id, body, {
      new: true,
      runValidators: true,
    });
    if (doc.length === 0) {
      return res.status(404).json({ message: "Invalid Id" });
    }

    eventEmitter.emit("updatePatientInfo", Patientregistration, doc);

    let endTimer = new Date().getTime();
    let time = (endTimer - startTimer) / 1000;
    console.log(time);

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
