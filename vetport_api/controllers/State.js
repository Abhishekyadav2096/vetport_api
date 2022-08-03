const State = require("../models/State");

// Create and Save a State
exports.create = async (req, res) => {
  try {
    const body = req.body;
    const doc = await State.create(body);
    res.status(201).json(doc);
  } catch (error) {
    res.status(500).json(error);
  }
};

// Retrieve all State
exports.findAll = async (req, res) => {
  try {
    const docs = await State.find({}).lean();
    res.status(200).json(docs);
  } catch (error) {
    res.status(500).json(error.message);
  }
};

// Retrieve by country
exports.findByCountry = async (req, res) => {
  try {
    const countryId = req.params.countryId;
    console.log(countryId);
    const docs = await State.find({ country: countryId }).lean();
    res.status(200).json(docs);
  } catch (error) {
    res.status(500).json(error.message);
  }
};
