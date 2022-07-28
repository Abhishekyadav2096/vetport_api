const Color = require("../models/Color");
const Species = require("../models/Species");
const ObjectId = require("mongoose").Types.ObjectId;

// Create and Save a color of species
exports.create = async (req, res) => {
  try {
    const body = req.body;
    const Doc = new Color(body);
    const doc = await Doc.save();
    res.status(200).json(doc);
  } catch (error) {
    res.status(500).json(error);
  }
};

// Retrieve all color of species from the database.
exports.findAll = async (req, res) => {
  try {
    let docs = await Color.find({});
    res.json(docs);
  } catch (error) {
    res.status(500).json(error.message);
  }
};

// Update a color of species by the id in the request

exports.update = async (req, res) => {
  try {
    const { id } = req.query;
    const body = req.body;
    let doc = await Color.findByIdAndUpdate({ _id: id }, body);
    res.status(200).json("doc");
  } catch (error) {
    res.status(500).json(error);
  }
};

// exports.getColorBySpeciesId = async (req, res) => {
//   try {
//     const id = req.query.id;
//     console.log(id);
//     const docs = await Species.aggregate([
//       {
//         $match: { _id: ObjectId(id) },
//       },
//       {
//         $lookup: {
//           from: "colors",
//           localField: "_id",
//           foreignField: "species_id",
//           as: "color-info",
//         },
//       },
//       { $project: { "color-info.color": 1 } },
//     ]);
//     res.status(200).json(docs);
//   } catch (error) {
//     res.status(500).json(error);
//   }
// };

//  Retrieve color by species Id

exports.getColorBySpeciesId = async (req, res) => {
  try {
    const id = req.query.id;
    const docs = await Color.find({ species_id: id }, { title: 1 }).lean();
    res.status(200).json({ status: "Success", data: docs });
  } catch (err) {
    res
      .status(500)
      .json({ status: "Internal Server Error", message: err.message });
  }
};

exports.mapColor = async (req, res) => {
  try {
    const id = req.query.id;
    const species_id = req.body.species_id;
    const doc = await Color.findByIdAndUpdate(id, {
      $push: { species_id: species_id },
    });
    if (!doc) {
      return res
        .status(404)
        .json({ status: "Not Found", message: "Invalid Id" });
    }
    res.status(200).json({ status: "Success", data: doc });
  } catch (err) {
    res
      .status(500)
      .json({ status: "Internal Server Error", message: err.message });
  }
};

exports.delete = async (req, res) => {
  try {
    const id = req.query.id;
    await Color.findByIdAndDelete(id).lean();
    res.status(200).json({ status: "Success", message: "Colors Deleted" });
  } catch (err) {
    res
      .status(500)
      .json({ status: "Internal Server Error", message: err.message });
  }
};
