const BreedModel = require("../models/Breed");
const Breed = require("../models/Breed");
const Species = require("../models/Species");
const ObjectId = require("mongoose").Types.ObjectId;

// Create and Save a Breed
exports.create = async (req, res) => {
  try {
    const body = req.body;
    const doc = await Breed.create(body);
    res.status(200).json(doc);
  } catch (error) {
    res.status(500).json(error);
  }
};

// Retrieve all Breed from the database.
exports.findAll = async (req, res) => {
  try {
    const docs = await Breed.find({});
    res.status(200).json(docs);
  } catch (error) {
    res.status(500).json(error.message);
  }
};

// Update a Breed  by the id in the request
exports.update = async (req, res) => {
  try {
    const id = req.params.id;
    const body = req.body;
    const doc = await Breed.findByIdAndUpdate(id, body, {
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

// exports.getBreedBySpeciesId = async (req, res) => {
//   try {
//     const id = req.query.id;
//     const docs = await Species.aggregate([
//       {
//         $match: { _id: ObjectId(id) },
//       },
//       {
//         $lookup: {
//           from: "breeds",
//           localField: "_id",
//           foreignField: "species_id",
//           as: "breed-info",
//         },
//       },
//       { $project: { "breed-info.breed": 1 } },
//     ]);
//     res.status(200).json(docs);
//   } catch (error) {
//     res.status(500).json(error);
//   }
// };

exports.getBreedBySpeciesId = async (req, res) => {
  try {
    const id = req.query.id;
    const docs = await Breed.find({ species_id: id }, { title: 1 }).lean();
    res.status(200).json({ status: "Success", data: docs });
  } catch (err) {
    res
      .status(500)
      .json({ status: "Internal Server Error", message: err.message });
  }
};
