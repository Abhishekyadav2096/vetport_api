const express = require("express");
const router = express.Router();

const appointment = require("../../../controllers/Appointment");

router.post("/save_appointment", appointment.create);
router.get("/get_appointment", appointment.findAll);
router.get("/get_appointmentByDate/:from/:to", appointment.findByDate);
router.get("/get_appointmentByStaff/:date/:staff?", appointment.findByStaff);
router.put("/update_appointment/:id", appointment.update);

// router.get("/get_appointmentByWeek/:from/:to", appointment.findByWeek);
// router.get("/get_appointmentByMonth/:year/:month", appointment.findByMonth);

module.exports = router;
