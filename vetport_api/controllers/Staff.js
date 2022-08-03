const mongoose = require("mongoose");
const objectId = mongoose.Types.ObjectId;

const Staff = require("../models/Staff");
const User = require("../models/User");

// Create and Save a Staff
exports.create = async (req, res) => {
  try {
    const { userId, userGroup, ...body } = req.body;
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
exports.find = async (req, res) => {
  try {
    const query = req.params.id === undefined ? {} : req.params;
    const docs = await Staff.find(query).lean();
    if (docs.length === 0) {
      return res.status(404).json({ message: "Invalid Id" });
    }
    res.status(200).json(docs);
  } catch (error) {
    res.status(500).json(error);
  }
};

// Find a single Staff with an id

// exports.findOne = async (req, res) => {
//   try {
//     const { staffId } = req.query;
//     let doc = await Staff.findById({ _id: staffId });
//     res.status(200).json(doc);
//   } catch (error) {
//     res.status(500).json(error);
//   }
// };

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
    const docs = await Staff.aggregate([
      {
        $match: {
          isProvider: true,
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
    const id = req.params.id;
    const body = req.body;
    const doc = await Staff.findByIdAndUpdate(id, body, {
      new: true,
      runValidators: true,
    });
    if (doc.length === 0) {
      res.status(404).json({ message: "Invalid Id" });
    }
    res.status(200).json(doc);
  } catch (error) {
    res.status(500).json(error);
  }
};

// filter provide by referral clinic

// exports.filterReferralProvider = async (req, res) => {
//   try {
//     const clinicId = req.params.clinicId;
//     const doc = await Staff.aggregate([
//       { $match: { clinic: clinicId, isProvider: true } },
//       {
//         $project: {
//           title: {
//             $concat: ["$firstName", " ", "$lastName"],
//           },
//         },
//       },
//     ]);
//     res.status(200).json(doc);
//   } catch (error) {
//     res.status(500).json(error);
//   }
// };

// // filter provide by referral clinic

exports.filterByClinic = async (req, res) => {
  try {
    const query = {};

    query["clinic"] = objectId(req.params.clinic);
    query["status"] = req.params.status == "true";

    if (req.params["isProvider"] !== undefined) {
      query["isProvider"] = req.params.isProvider == "true";
    }

    const doc = await Staff.aggregate([
      { $match: query },
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
