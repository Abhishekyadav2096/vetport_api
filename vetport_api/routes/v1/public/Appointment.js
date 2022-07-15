const express = require("express");
const router = express.Router();

const appointment = require("../../../controllers/Appointment");

router.post("/save_appointment", appointment.create);
router.get("/get_appointment", appointment.findAll);

module.exports = router;
