const express = require("express");
const router = express.Router();

const patientregistration = require("../../../controllers/Patientregistration")

router.post("/addpatient", patientregistration.create);
//router.get("/getpatient", patientregistration.findAll);
router.get("/get1patient", patientregistration.findOne);
router.put("/update1", patientregistration.update)


module.exports = router;