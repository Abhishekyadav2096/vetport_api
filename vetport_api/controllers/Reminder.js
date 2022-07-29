const Reminder = require("../models/Reminder");

//Create a new Reminder
exports.create = async (req, res) => {
  try {
    const body = req.body;
    const doc = await Reminder.create(body);

    res.status(201).json(doc);
  } catch (err) {
    res.status(500).json(err);
  }
};

//Find all Reminders or find reminder by id
exports.find = async (req, res) => {
  try {
    const query = req.params._id === undefined ? {} : req.params;
    const doc = await Reminder.find(query).lean();
    console.log(doc);

    if (doc.length === 0) {
      res.status(404).json({ message: "Invalid Id" });
    }
    res.status(200).json(doc);
  } catch (err) {
    res.status(500).json(err);
  }
};

//Filter Reminders by title
exports.findByTitle = async (req, res) => {
  try {
    const title = req.query.title;
    const doc = await Reminder.find({
      title: { $regex: title, $options: "i" },
    }).lean();

    res.status(200).json(doc);
  } catch (err) {
    res.status(500).json(err);
  }
};

//Find Reminders by planitem, reminder, status
exports.findByQuery = async (req, res) => {
  try {
    const query = req.query;
    const doc = await Reminder.find(query).lean();

    res.status(200).json(doc);
  } catch (err) {
    res.status(500).json(err);
  }
};

//Update the Reminder by id
exports.update = async (req, res) => {
  try {
    const id = req.params._id;
    const body = req.body;
    const doc = await Reminder.findByIdAndUpdate(id, body, {
      new: true,
      runValidators: true,
    });

    if (doc.length === 0) {
      res.status(404).json({ message: "Invalid Id" });
    }
    res.status(200).json(doc);
  } catch (err) {
    res.status(500).json(err);
  }
};
