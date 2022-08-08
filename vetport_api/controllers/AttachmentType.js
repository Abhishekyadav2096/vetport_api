const AttachType = require("../models/AttachmentType");

exports.create = async (req, res) => {
  try {
    const body = req.body;
    const Doc = new AttachType(body);
    const doc = await Doc.save();
    res.status(200).json(doc);
  } catch (error) {
    res.status(500).json(error);
  }
};

// Retrieve all User from the database.
exports.findAll = async (req, res) => {
  try {
    let docs = await AttachType.find({}).lean();
    res.json(docs);
  } catch (error) {
    res.status(500).json(error.message);
  }
};

// Update a User by the id in the request

exports.update = async (req, res) => {
  try {
    const id = req.params.id;
    const body = req.body;
    const doc = await AttachType.findByIdAndUpdate(id, body, {
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
