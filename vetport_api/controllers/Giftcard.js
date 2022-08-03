const Giftcard = require("../models/Giftcard");

// Create a new GiftCard
exports.create = async (req, res) => {
  try {
    const body = req.body;
    const doc = await GiftCard.create(body);
    res.status(201).json(doc);
  } catch (err) {
    res.status(500).send(error.message);
  }
};

// Find all GiftCard
exports.find = async (req, res) => {
  try {
    const docs = await GiftCard.find({}).lean();
    res.status(200).json(docs);
  } catch (err) {
    res.status(500).json(error.message);
  }
};

// Update an GiftCard by id
exports.update = async (req, res) => {
  try {
    const id = req.params.id;
    const body = req.body;
    const doc = await GiftCard.findByIdAndUpdate(id, body, {
      new: true,
      runValidators: true,
    });
    if (doc.length === 0) {
      return res.status(404).json({ message: "Invalid Id" });
    }
    res.status(200).json(doc);
  } catch (error) {
    res.status(500).json(error.message);
  }
};
