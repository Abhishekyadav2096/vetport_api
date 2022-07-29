const GroupPlanItem = require("../models/groupPlanItem");

// Create and Save a GroupPlanItem
exports.create = async (req, res) => {
  try {
    const body = req.body;
    const Doc = new GroupPlanItem(body);
    const doc = await Doc.save();
    res.status(200).json(doc);
  } catch (error) {
    res.status(500).json(error);
  }
};

// Retrieve all GroupPlanItem
exports.findAll = async (req, res) => {
  try {
    let docs = await GroupPlanItem.find({}).lean();
    res.status(200).json(docs);
  } catch (error) {
    res.status(500).json(error.message);
  }
};

// Find a single GroupPlanitem with an id

exports.findOne = async (req, res) => {
  try {
    const { planitemId } = req.query;
    let doc = await GroupPlanItem.findById({ _id: planitemId });
    res.status(200).json(doc);
  } catch (error) {
    res.status(500).json(error);
  }
};

// Update GroupPlanitem by query parameter
exports.update = async (req, res) => {
  try {
    const id = req.query.id;
    const body = req.body;
    const doc = await GroupPlanItem.findByIdAndUpdate(id, body).lean();
    res.status(200).json(doc);
  } catch (error) {
    res.status(500).json(error.message);
  }
};

// Retrieve GroupPlanitem from the database by name.
exports.filterGroupPlanItemByName = async (req, res) => {
  try {
    const name = req.query.name;
    const docs = await GroupPlanItem.find({
      title: { $regex: name, $options: "i" },
    }).lean();
    res.status(200).json(docs);
  } catch (error) {
    res.status(500).json(error.message);
  }
};
