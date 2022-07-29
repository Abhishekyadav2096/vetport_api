const express = require("express");
const router = express.Router();

const patientregistration = require("../../../controllers/Patientregistration");

router.post("/save_patient", patientregistration.create);
//router.get("/getpatient", patientregistration.findAll);
router.get("/get_patient", patientregistration.findPatient);
router.put("/update_patient", patientregistration.update);
router.get("/verify_patientname", patientregistration.verifyPatientName);

module.exports = router;
