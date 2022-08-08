const Discount = require("../models/Discount");

// Create and Save a Discount
exports.create = async (req, res) => {
  try {
    const body = req.body;
    const doc = await Discount.create(body);
    res.status(201).json(doc);
  } catch (error) {
    res.status(500).json(error);
  }
};

// Retrieve all Discount from the database

exports.findAll = async (req, res) => {
  try {
    const docs = await Discount.find({}).lean();
    res.status(200).json(docs);
  } catch (error) {
    res.status(500).json(error.message);
  }
};

// filter discount by title

// exports.getDiscountByName = async (req, res) => {
//   try {
//     docs = await Discount.aggregate([
//       {
//         $project: {
//           title: "$title",
//         },
//       },
//     ]);
//     res.status(200).json(docs);
//   } catch (error) {
//     res.status(500).json(error.message);
//   }
// };

// Update a Discount by the id in the request

exports.update = async (req, res) => {
  try {
    const id = req.params.id;
    const body = req.body;
    const doc = await Discount.findByIdAndUpdate(id, body, {
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

// filter discount by title
exports.findByName = async (req, res) => {
  try {
    const name = req.params.name === undefined ? "" : req.params.name;
    const doc = await Discount.find({
      title: { $regex: name, $options: "i" },
    }).lean();
    res.status(200).json(doc);
  } catch (error) {
    res.status(500).json(error);
  }
};
