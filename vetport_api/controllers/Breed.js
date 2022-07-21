const Breed = require("../models/Breed");
const Species = require("../models/Species");
const ObjectId = require("mongoose").Types.ObjectId;

// Create and Save a Breed
exports.create = async (req, res) => {
  try {
    const body = req.body;
    const Doc = new Breed(body);
    const doc = await Doc.save();
    res.status(200).json(doc);
  } catch (error) {
    res.status(500).json(error);
  }
};

// Retrieve all Breed from the database.
exports.findAll = async (req, res) => {
  try {
    let docs = await Breed.find({});
    res.json(docs);
  } catch (error) {
    res.status(500).json(error.message);
  }
};

// Update a Breed  by the id in the request

exports.update = async (req, res) => {
  try {
    const { id } = req.query;
    const body = req.body;
    let doc = await Breed.findByIdAndUpdate({ _id: id }, body);
    res.json("updated");
  } catch (error) {
    res.status(500).json(error);
  }
};

exports.getBreedBySpeciesId = async (req, res) => {
  try {
    const id = req.query.id;
    const docs = await Species.aggregate([
      {
        $match: { _id: ObjectId(id) },
      },
      {
        $lookup: {
          from: "breeds",
          localField: "_id",
          foreignField: "species_id",
          as: "breed-info",
        },
      },
      { $project: { "breed-info.breed": 1 } },
    ]);
    res.status(200).json(docs);
  } catch (error) {
    res.status(500).json(error);
  }
};
