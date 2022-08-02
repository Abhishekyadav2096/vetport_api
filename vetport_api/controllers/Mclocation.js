const Mclocation = require("../models/Mclocation");

// Create and Save a mobile clinic location
exports.create = async (req, res) => {
  try {
    const body = req.body;
    const doc = await Mclocation.create(body);
    res.status(201).json(doc);
  } catch (error) {
    res.status(500).json(error);
  }
};

// Retrieve all mobile clinic location from the database.
exports.findAll = async (req, res) => {
  try {
    const docs = await Mclocation.find({}).lean();
    res.status(200).json(docs);
  } catch (error) {
    res.status(500).json(error.message);
  }
};

// Update a mobile clinic location by the id in the request
exports.update = async (req, res) => {
  try {
    const id = req.params.id;
    const body = req.body;
    const doc = await Mclocation.findByIdAndUpdate(id, body, {
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

// get location name and id
// exports.getByLocation = async (req, res) => {
//   try {
//     let docs = await Mclocation.find({}, { location_name: 1 });
//     res.status(200).json(docs);
//   } catch (error) {
//     res.status(500).json(error.message);
//   }
// };
