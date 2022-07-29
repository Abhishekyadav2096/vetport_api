const Planitem = require("../models/Planitem");

// Create and Save a Planitem
exports.create = async (req, res) => {
  try {
    const body = req.body;
    const Doc = new Planitem(body);
    const doc = await Doc.save();
    res.status(200).json(doc);
  } catch (error) {
    res.status(500).json(error);
  }
};

// Retrieve all Planitem
exports.findAll = async (req, res) => {
  try {
    let docs = await Planitem.find({}).lean();
    res.status(200).json(docs);
  } catch (error) {
    res.status(500).json(error.message);
  }
};

// Find a single planitem with an id

exports.findOne = async (req, res) => {
  try {
    const { planitemId } = req.query;
    let doc = await Planitem.findById({ _id: planitemId });
    res.status(200).json(doc);
  } catch (error) {
    res.status(500).json(error);
  }
};

// Update Planitem by query parameter
exports.update = async (req, res) => {
  try {
    const id = req.query.id;
    const body = req.body;
    const doc = await Planitem.findByIdAndUpdate(id, body).lean();
    res.status(200).json(doc);
  } catch (error) {
    res.status(500).json(error.message);
  }
};

// Retrieve planitem from the database by name.
exports.findByName = async (req, res) => {
  try {
    const name = req.query.name;
    const doc = await Planitem.find({
      title: { $regex: name, $options: "i" },
    }).lean();
    res.status(200).json(doc);
  } catch (error) {
    res.status(500).json(error);
  }
};

// Find planitems with an query
exports.findByQuery = async (req, res) => {
  try {
    const query = req.query;
    const doc = await Planitem.find(query).lean();
    res.status(200).json(doc);
  } catch (error) {
    res.status(500).json(error);
  }
};

// Find planitems with planaction
exports.findByPlanaction = async (req, res) => {
  try {
    const query = req.query.id;
    console.log(query);
    const doc = await Planitem.find({})
      .populate("planCategory_id planSubCategory_id")
      .exec((err, result) => {
        const test = result.filter(
          (item) =>
            item.planCategory_id.planaction_id == query ||
            item.planSubCategory_id.planaction_id == query
        );
        res.status(200).json(test);
      });
  } catch (error) {
    res.status(500).json(error);
  }
};
