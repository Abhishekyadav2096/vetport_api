const Clientregistration = require("../models/Clientregistration");
const Patientregistration = require("../models/Patientregistration");
const ObjectId = require("mongoose").Types.ObjectId;
// Create and Save a new Client

exports.create = async (req, res) => {
  try {
    const body = req.body;
    const Doc = new Clientregistration(body);
    const doc = await Doc.save();
    res.status(200).json(doc);
  } catch (error) {
    res.status(500).json(error);
  }
};

// verify client email

exports.verifyClientEmail = async (req, res) => {
  try {
    let doc = await Clientregistration.find(
      { email: { $eq: req.query.email } },
      { email: 1 }
    );

    if (doc.length != 0) {
      res.status(200).json({ message: "email already exist" });
    }
  } catch (error) {
    res.status(500).json(error);
  }
};

// verify client pnumber

exports.verifyClientPnumber = async (req, res) => {
  try {
    let doc = await Clientregistration.find({
      "phonetypes.pnumber": { $eq: req.query.phone },
    });

    if (doc.length != 0) {
      res.status(200).json({ message: "phone number already exist" });
    }
  } catch (error) {
    res.status(500).json(error);
  }
};

// Retrieve all Client from the database.

exports.getPatient = async (req, res) => {
  console.log(req.params);
  try {
    const { _id } = req.params;
    //const docs = await Clientregistration.aggregate(pipeline)
    let pipeline = [
      {
        $match: {
          _id: ObjectId(_id),
        },
      },
      {
        $lookup: {
          from: "patientregistrSations",

          as: "patient_info",
          let: {
            id: "$_id",
          },
          pipeline: [
            {
              $match: {
                $expr: {
                  $eq: ["$client_Id", "$$id"],
                },
              },
            },
          ],
        },
      },
      {
        $unwind: "$patient_info",
        //preserveNullAndEmptyArrays : true
      },
      {
        $project: {
          firstname: 1,
          lastname: 1,
          patient_info: 1,
          result: {
            $and: [
              { $gt: ["$patient_info.age", 4] },
              { $lt: ["$patient_info.age", 7] },
            ],
          },
        },
      },
    ];
    const docs = await Clientregistration.aggregate(pipeline);
    console.log(docs);
    res.json(docs);
  } catch (error) {
    console.log(error);
  }
};

// Find a single Client with an id

exports.findOne = async (req, res) => {
  try {
    const { id } = req.query;
    let doc = await Clientregistration.findById({ _id: id });
    res.status(200).json(doc);
  } catch (error) {
    res.status(500).json(error);
  }
};

// Update a Client by the id in the request

exports.update = async (req, res) => {
  try {
    const { id } = req.query;
    const body = req.body;
    let doc = await Clientregistration.findByIdAndUpdate({ _id: id }, body);
    res.json("updated");
  } catch (error) {
    res.status(500).json(error);
  }
};
