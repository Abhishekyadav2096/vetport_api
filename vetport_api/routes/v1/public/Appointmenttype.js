const express = require("express");
const router = express.Router();

const appointmenttype = require("../../../controllers/Appointmenttype");

router.post("/save_appointmenttype", appointmenttype.create);
router.get("/get_appointmenttype", appointmenttype.findAll);
router.put("/update_appointmenttype", appointmenttype.update);

module.exports = router;
