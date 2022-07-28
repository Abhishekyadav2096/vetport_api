const PlanSubCategory = require("../models/PlanSubCategory");

// Create and Save a Plan sub-category
exports.create = async (req, res) => {
  try {
    const body = req.body;
    const doc = await PlanSubCategory.create(body);
    res.status(201).json(doc);
  } catch (error) {
    res.status(500).json(error.message);
  }
};

// Retrieve all Plan sub-category
exports.findAll = async (req, res) => {
  try {
    const docs = await PlanSubCategory.find({}).lean();
    res.status(200).json(docs);
  } catch (error) {
    res.status(500).json(error.message);
  }
};

// Retrieve Plan sub-category by query parameter
exports.findByQuery = async (req, res) => {
  try {
    const query = req.query;
    const docs = await PlanSubCategory.find(query).lean();
    res.status(200).json(docs);
  } catch (error) {
    res.status(500).json(error.message);
  }
};

// Update Plan sub-category by query parameter
exports.update = async (req, res) => {
  try {
    const id = req.query.id;
    const body = req.body;
    const doc = await PlanSubCategory.findByIdAndUpdate(id, body).lean();
    res.status(200).json(doc);
  } catch (error) {
    res.status(500).json(error.message);
  }
};
