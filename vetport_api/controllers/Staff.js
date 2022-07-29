const mongoose = require("mongoose");
const Staff = require("../models/Staff");
const User = require("../models/User");
const objectId = mongoose.Types.ObjectId;
// Create and Save a Staff
exports.create = async (req, res) => {
  try {
    const body = req.body;
    const { userId, userGroup } = req.body;
    const staff_doc = await Staff.create(body);
    // saving user credentials
    const staff_credentials_doc = await User.create({ userId, userGroup });
    res.status(201).json({
      Staff: staff_doc,
      Staff_credentials: staff_credentials_doc,
    });
  } catch (error) {
    res.status(500).json(error);
  }
};

// Retrieve all Staff from the database.
exports.findAll = async (req, res) => {
  try {
    let docs = await Staff.find({}).lean();
    res.status(200).json(docs);
  } catch (error) {
    res.status(500).json(error.message);
  }
};

// Find a single Staff with an id

exports.findOne = async (req, res) => {
  try {
    const { staffId } = req.query;
    let doc = await Staff.findById({ _id: staffId });
    res.status(200).json(doc);
  } catch (error) {
    res.status(500).json(error);
  }
};

//filter provider by name

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

//     res.status(200).json(docs);
//   } catch (error) {
//     res.status(500).json(error.message);
//   }
// };

// // filter provider by name

// exports.filterProviderByName = async (req, res) => {
//   try {
//     let docs = await Staff.find({}).select("firstName lastName -_id").lean();
//     console.log(docs);
//     res.json({ title: `${docs[0].firstName} ${docs[0].lastName}` });
//   } catch (error) {
//     res.status(500).json(error.message);
//   }
// };

// filter provider by name

exports.filterProviderByName = async (req, res) => {
  try {
    docs = await Staff.aggregate([
      {
        $match: {
          is_Provider: true,
        },
      },
      {
        $project: {
          title: {
            $concat: ["$firstName", " ", "$lastName"],
          },
        },
      },
    ]);

    res.status(200).json(docs);
  } catch (error) {
    res.status(500).json(error.message);
  }
};

// Update a Staff by the id in the request

exports.update = async (req, res) => {
  try {
    const { staffId } = req.query;
    const body = req.body;
    let doc = await Staff.findByIdAndUpdate({ _id: staffId }, body, {
      new: true,
      runValidators: true,
    });
    res.json(doc);
  } catch (error) {
    res.status(500).json(error);
  }
};

// filter provide by referral clinic

exports.filterReferralProvider = async (req, res) => {
  try {
    const clinicId = req.query.id;
    let doc = await Staff.aggregate([
      { $match: { "clinicName._id": clinicId, isProvider: true } },
      {
        $project: {
          title: {
            $concat: ["$firstName", " ", "$lastName"],
          },
        },
      },
    ]);
    res.status(200).json(doc);
  } catch (error) {
    res.status(500).json(error);
  }
};
