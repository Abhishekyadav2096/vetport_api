const Staff = require("../models/Staff");

// Create and Save a Staff
exports.create = async (req, res) => {
  try {
    const body = req.body;
    const Doc = new Staff(body);
    const doc = await Doc.save();
    res.status(200).json(doc);
  } catch (error) {
    res.status(500).json(error);
  }
};

// Retrieve all Staff from the database.
exports.findAll = async (req, res) => {
  try {
    let docs = await Staff.find({}).lean();
    res.json(docs);
  } catch (error) {
    res.status(500).json(error.message);
  }
};

// filter provider by name

// exports.filterProviderByName = async (req, res) => {
//   try {
//     docs = await Staff.aggregate([
//       {
//         $project: {
//           title: {
//             $concat: ["$firstName", " ", "$lastName"],
//           },
//         },
//       },
//     ]);

//     res.json(docs);
//   } catch (error) {
//     res.status(500).json(error.message);
//   }
// };
//SomeValue.find({}).select("name-_id")

exports.filterProviderByName = async (req, res) => {
  try {
    let docs = await Staff.find({}).select("firstName lastName -_id").lean();
    res.json(docs);
  } catch (error) {
    res.status(500).json(error.message);
  }
};

// Update a Staff by the id in the request

exports.update = async (req, res) => {
  try {
    const { id } = req.query;
    const body = req.body;
    let doc = await Staff.findByIdAndUpdate({ _id: id }, body);
    res.json("updated");
  } catch (error) {
    res.status(500).json(error);
  }
};

exports.getUserId = async (req, res) => {
  try {
    let doc = await Staff.find({ userId: { $eq: req.query.userid } });

    if (doc.length != 0) {
      res.status(200).json({ message: "userId already exist" });
    } else {
      res.status(200).json({ message: "userId Available" });
    }
  } catch (error) {
    res.status(500).json(error);
  }
};
