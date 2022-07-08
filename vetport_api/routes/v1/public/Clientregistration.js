const express = require("express");
const router = express.Router();

const clientregistration = require("../../../controllers/Clientregistration");

router.post("/save_client", clientregistration.create);
//router.get("/get", clientregistration.findAll);
router.get("/get_client_by_id", clientregistration.findOne);
router.put("/update_client", clientregistration.update);
router.get("/getpatient/:_id", clientregistration.getPatient);
router.get("/get_email/:email", clientregistration.getEmail);
router.get("/get_phone/:phone", clientregistration.getPhone);
module.exports = router;
