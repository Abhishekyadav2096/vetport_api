const express = require("express");
const router = express.Router();

const patientgroupcategory = require("../../../controllers/Patientgroupcategory");

router.post("/save_patientgroupcategory", patientgroupcategory.create);
router.get("/get_patientgroupcategory", patientgroupcategory.findAll);

module.exports = router;
