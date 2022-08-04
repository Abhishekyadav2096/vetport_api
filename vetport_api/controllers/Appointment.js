const Appointment = require("../models/Appointment");

// Create and Save a Appointment
exports.create = async (req, res) => {
  try {
    const body = req.body;
    const doc = await Appointment.create(body);
    res.status(201).json(doc);
  } catch (error) {
    res.status(500).json(error);
  }
};

// Retrieve all Appointment from the database.
exports.findAll = async (req, res) => {
  try {
    const docs = await Appointment.find({}).lean();
    res.status(200).json(docs);
  } catch (error) {
    res.status(500).json(error.message);
  }
};

// Retrieve Appointments by day/month/week
// pass fromdate and todate in route params
// Add clinic id to route params
exports.findByDate = async (req, res) => {
  try {
    const fromDate = new Date(req.params.from);
    const toDate = new Date(req.params.to);
    // const clinic = req.params.clinicId;

    fromDate.setHours(0, 0, 0, 0);
    toDate.setHours(23, 59, 59, 0);

    const docs = await Appointment.find({
      startTime: { $gte: fromDate, $lte: toDate },
    }).lean();
    res.status(200).json(docs);
  } catch (error) {
    res.status(500).json(error);
  }
};

// Retrieve Appointments by day/month/week
// pass fromdate and todate in route params
// Add clinic id to route params
exports.findByStaff = async (req, res) => {
  try {
    const fromDate = new Date(req.params.date);
    const toDate = new Date(req.params.date);
    // const clinic = req.params.clinicId;

    const staff =
      req.params.staff !== undefined ? { staff: req.params.staff } : {};

    fromDate.setHours(0, 0, 0, 0);
    toDate.setHours(23, 59, 59, 0);

    const docs = await Appointment.find({
      ...staff,
      startTime: { $gte: fromDate, $lte: toDate },
    }).lean();
    res.status(200).json(docs);
  } catch (error) {
    res.status(500).json(error);
  }
};

// Retrieve Appointments by month
// exports.findByWeek = (req, res) => {
//   const fromDate = new Date(req.params.from);
//   const toDate = new Date(req.params.to);
//   fromDate.setHours(0, 0, 0, 0);
//   toDate.setHours(24, 0, 0, 0);

//   console.log(toDate.toLocaleString());
//   console.log(fromDate.toLocaleString());

//   Appointment.find().exec((err, result) => {
//     if (err) {
//       return res.status(500).json(error.message);
//     }

//     const docs = result.filter((doc) => {
//       return (
//         doc.startTime >= fromDate ||
//         doc.startTime <= toDate ||
//       );
//     });
//     res.status(200).json(docs);
//   });
// };

// // Retrieve Appointments by month
// exports.findByMonth = (req, res) => {
//   const date = new Date(req.params.year, req.params.month);

//   Appointment.find().exec((err, result) => {
//     if (err) {
//       return res.status(500).json(error.message);
//     }

//     const docs = result.filter((doc) => {
//       if (
//         doc.startTime.getFullYear() === date.getFullYear() ||
//         doc.endTime.getFullYear() === date.getFullYear()
//       ) {
//         return (
//           doc.startTime.getMonth() === date.getMonth() ||
//           doc.endTime.getMonth() === date.getMonth()
//         );
//       }
//     });
//     res.status(200).json(docs);
//   });
// };

// Update appointment by id
exports.update = async (req, res) => {
  try {
    const id = req.params.id;
    const body = req.body;
    const doc = await Appointment.findByIdAndUpdate(id, body, {
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
