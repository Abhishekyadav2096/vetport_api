const express = require("express");
const router = express.Router();

const clientregistration = require("../../../controllers/Clientregistration")

router.post("/add", clientregistration.create);
//router.get("/get", clientregistration.findAll);
router.get("/get1", clientregistration.findOne);
router.put("/update", clientregistration.update);
router.get("/getpatient/:_id", clientregistration.getPatient)
module.exports = router;