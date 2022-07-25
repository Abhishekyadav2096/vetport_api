const express = require("express");
const router = express.Router();

const appointmentStatus = require("../../../controllers/AppointmentStatus");

router.post("/save_appointmentstatus", appointmentStatus.create);
router.get("/get_appointmentstatus", appointmentStatus.findAll);
router.get("/get_appointmentstatus_by_name", appointmentStatus.filterByName);
router.put("/update_appointmentstatus", appointmentStatus.update);
router.delete("/delete_appointmentstatus", appointmentStatus.delete);

module.exports = router;
