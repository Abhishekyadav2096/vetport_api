const User = require("../models/User");

exports.create = async (req, res) => {
  try {
    const body = req.body;
    const Doc = new User(body);
    const doc = await Doc.save();
    res.status(200).json(doc);
  } catch (error) {
    res.status(500).json(error);
  }
};

// Retrieve all User from the database.
exports.findAll = async (req, res) => {
  try {
    let docs = await User.find({}).lean();
    res.json(docs);
  } catch (error) {
    res.status(500).json(error.message);
  }
};

// Update a User by the id in the request

exports.update = async (req, res) => {
  try {
    const { id } = req.query;
    const body = req.body;
    let doc = await User.findByIdAndUpdate({ _id: id }, body);
    res.json("updated");
  } catch (error) {
    res.status(500).json(error);
  }
};

// Update a User password by the id in the request

exports.updatePassword = async (req, res) => {
  try {
    const { id } = req.query;
    const password = req.body.password;
    let doc = await User.findByIdAndUpdate({ _id: id }, { password: password });
    res.json("updated");
  } catch (error) {
    res.status(500).json(error);
  }
};

exports.getUserId = async (req, res) => {
  try {
    let doc = await User.find({ userId: { $eq: req.query.userId } });

    if (doc.length != 0) {
      res.status(200).json({ message: "userId already exist", isuserId: true });
    } else {
      res.status(200).json({ message: "userId Available", isuserId: false });
    }
  } catch (error) {
    res.status(500).json(error);
  }
};
