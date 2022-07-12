const express = require("express");
const router = express.Router();

const clinic = require("../../../controllers/Clinic");

router.post("/add", clinic.create);
router.get("/get", clinic.findAll);
router.get("/get1", clinic.findOne);
router.put("/update", clinic.update);
router.get("/getByClinicType", clinic.findByTypeAndStatus);

module.exports = router;
