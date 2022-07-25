const express = require("express");
const router = express.Router();

const clinic = require("../../../controllers/Clinic");

router.post("/save_clinic", clinic.create);
router.get("/get_clinic", clinic.findAll);
router.get("/get_clinicById", clinic.findOne);
router.put("/update_clinicById", clinic.update);
router.get("/get_clinicType", clinic.findByTypeAndStatus);
router.get("/get_clinicName", clinic.filterByClinicName);
router.get("/get_clinicByDefault", clinic.getClinicByDefault);
router.get("/get_refferalClinic", clinic.getRefferalClinic);

module.exports = router;
