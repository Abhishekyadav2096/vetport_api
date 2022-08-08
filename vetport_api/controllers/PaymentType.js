const Paymenttype = require("../models/PaymentType");

// Create and Save a Payment type
exports.create = async (req, res) => {
  try {
    const body = req.body;
    const doc = await Paymenttype.create(body);
    res.status(201).json(doc);
  } catch (error) {
    res.status(500).json(error);
  }
};

// Retrieve all Payment type from the database.
exports.findAll = async (req, res) => {
  try {
    let docs = await Paymenttype.find({}).lean();
    res.status(200).json(docs);
  } catch (error) {
    res.status(500).json(error.message);
  }
};

// Update a Payment type by the id in the request

exports.update = async (req, res) => {
  try {
    const id = req.params.id;
    const body = req.body;
    const doc = await Paymenttype.findByIdAndUpdate(id, body, {
      new: true,
      runValidators: true,
    });
    if (doc.length === 0) {
      return res.status(404).json({ message: "Invalid Id" });
    }
    res.status(200).json(doc);
  } catch (error) {
    res.status(500).json(error);
  }
};

// // Update default Paymenttype from the database by id.
// exports.updateDefaultPaymentType = async (req, res) => {
//   try {
//     const id = req.query.id;
//     const body = req.body;
//     let doc = await Paymenttype.findByIdAndUpdate(id, defaultType).lean();
//     res.status(200).json(doc);
//   } catch (error) {
//     res.status(500).json(error.message);
//   }
// };
