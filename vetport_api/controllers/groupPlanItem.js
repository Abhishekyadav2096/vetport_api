const GroupPlanItem = require("../models/groupPlanItem");

// Create and Save a GroupPlanItem
exports.create = async (req, res) => {
  try {
    const body = req.body;
    const doc = await GroupPlanItem.create(body);
    res.status(201).json(doc);
  } catch (error) {
    res.status(500).json(error);
  }
};

// Retrieve all GroupPlanItems
exports.findAll = async (req, res) => {
  try {
    const docs = await GroupPlanItem.find({}).lean();
    res.status(200).json(docs);
  } catch (error) {
    res.status(500).json(error.message);
  }
};

// Retrieve GroupPlanItem by id
exports.findById = async (req, res) => {
  try {
    const id = req.params.id;
    const doc = await GroupPlanItem.findById(id)
      .populate({
        path: "groupPlanItem",
        select: "planItem",
        populate: {
          path: "planItem",
          populate: { path: "planItemId", select: "title" },
        },
      })
      .populate({
        path: "planItem",
        populate: { path: "planItemId", select: "title" },
      })
      .lean();
    if (doc.length === 0) {
      return res.status(404).json({ message: "Invalid id" });
    }
    res.status(200).json(doc);
  } catch (error) {
    res.status(500).json(error.message);
  }
};

// Retrieve GroupPlanitem from the database by plan iem and species
exports.filterByQuery = async (req, res) => {
  try {
    const query = req.query;
    const docs = await GroupPlanItem.find(query).lean();
    res.status(200).json(docs);
  } catch (error) {
    res.status(500).json(error.message);
  }
};

// Update GroupPlanitem by id
exports.update = async (req, res) => {
  try {
    const id = req.params.id;
    const body = req.body;
    const doc = await GroupPlanItem.findByIdAndUpdate(id, body, {
      new: true,
      runValidators: true,
    }).lean();
    if (doc.length === 0) {
      return res.status(404).json({ message: "Invalid id" });
    }
    res.status(200).json(doc);
  } catch (error) {
    res.status(500).json(error.message);
  }
};

// Retrieve GroupPlanitem from the database by name.
// exports.filterByName = async (req, res) => {
//   try {
//     const name = req.params.name;
//     const docs = await GroupPlanItem.find(
//       {
//         title: { $regex: name, $options: "i" },
//       },
//       { title: 1 }
//     ).lean();
//     res.status(200).json(docs);
//   } catch (error) {
//     res.status(500).json(error.message);
//   }
// };
