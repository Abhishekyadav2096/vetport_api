const Followup = require("../models/Followup");

// Create and Save a Followup
exports.create = async (req, res) => {
  try {
    const body = req.body;
    const Doc = new Followup(body);
    const doc = await Doc.save();
    res.status(200).json(doc);
  } catch (error) {
    res.status(500).json(error);
  }
};

// Update a Followup by the id in the request

exports.update = async (req, res) => {
  try {
    const id = req.params.id;
    const body = req.body;
    const doc = await Followup.findByIdAndUpdate(id, body, {
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

// Delete a Followup by the id in the request

exports.delete = async (req, res) => {
  try {
    const { id } = req.query;
    let doc = await Soapnote.findByIdAndDelete({ _id: id });
    res.json("Deleted");
  } catch (error) {
    res.status(500).json(error.message);
  }
};
