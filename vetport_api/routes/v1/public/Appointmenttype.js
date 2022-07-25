const express = require("express");
const router = express.Router();

const appointmenttype = require("../../../controllers/Appointmenttype");

router.post("/save_appointmenttype", appointmenttype.create);
router.get("/get_appointmenttype", appointmenttype.findAll);
router.patch(
  "/update_default_appointmenttype",
  appointmenttype.updateDefaultAppointmentType
);
router.put("/update_appointmenttype", appointmenttype.update);
router.delete("/delete_appointmenttype", appointmenttype.delete);

module.exports = router;
