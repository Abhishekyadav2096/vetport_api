const Discount = require("../models/Discount");

// Create and Save a Discount
exports.create = async (req, res) => {
  try {
    const body = req.body;
    const Doc = new Discount(body);
    const doc = await Doc.save();
    res.status(200).json(doc);
  } catch (error) {
    res.status(500).json(error);
  }
};

// Retrieve all Discount from the database

exports.findAll = async (req, res) => {
  try {
    let docs = await Discount.find({});
    res.json(docs);
  } catch (error) {
    res.status(500).json(error.message);
  }
};

// filter discount by title

exports.getDiscountByName = async (req, res) => {
  try {
    docs = await Discount.aggregate([
      {
        $project: {
          title: "$title",
        },
      },
    ]);
    res.json(docs);
  } catch (error) {
    res.status(500).json(error.message);
  }
};

// Update a Discount by the id in the request

exports.update = async (req, res) => {
  try {
    const { id } = req.query;
    const body = req.body;
    let doc = await Discount.findByIdAndUpdate({ _id: id }, body);
    res.json("updated");
  } catch (error) {
    res.status(500).json(error);
  }
};
