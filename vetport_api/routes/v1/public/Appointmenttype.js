const express = require("express");
const router = express.Router();

const appointmenttype = require("../../../controllers/Appointmenttype");

router.post("/save_appointmenttype", appointmenttype.create);
router.get("/get_appointmenttype", appointmenttype.findAll);
router.get("/get_appointmenttype_by_query", appointmenttype.findByQuery);
router.patch(
  "/update_default_appointmenttype",
  appointmenttype.updateDefaultAppointmentType
);
router.put("/update_appointmenttype/:id", appointmenttype.update);
router.delete("/delete_appointmenttype", appointmenttype.delete);
router.get("/get_appointmenttype_by_type", appointmenttype.filterByType);

module.exports = router;
