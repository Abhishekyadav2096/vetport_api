const express = require("express");
const router = express.Router();

const clinic = require("../../../controllers/Clinic");

router.post("/add", clinic.create);
router.get("/get", clinic.findAll);
router.get("/get_clinicById", clinic.findOne);
router.put("/update", clinic.update);
router.get("/get_clinicType", clinic.findByTypeAndStatus);
router.get("/get_clinicName", clinic.filterByClinicName);

module.exports = router;
