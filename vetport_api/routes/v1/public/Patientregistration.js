const express = require("express");
const router = express.Router();

const patientregistration = require("../../../controllers/Patientregistration");

router.post("/save_patient", patientregistration.create);
router.get("/get_patient", patientregistration.findAll);
router.get("/get_patientById/:id", patientregistration.findOne);
router.put("/update_patient/:id", patientregistration.update);
router.get("/verify_patientname/:name", patientregistration.verifyPatientName);

module.exports = router;
