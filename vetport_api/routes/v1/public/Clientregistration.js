const express = require("express");
const router = express.Router();

const clientregistration = require("../../../controllers/Clientregistration");

router.post("/save_client", clientregistration.create);
//router.get("/get", clientregistration.findAll);
router.get("/get_clientById/:id", clientregistration.findOne);
router.put("/update_client/:id", clientregistration.update);
// router.get("/getpatient/:_id", clientregistration.getPatient);
router.get("/verify_clientemail/:email", clientregistration.verifyClientEmail);
router.get(
  "/verify_clientpnumber/:pnumber",
  clientregistration.verifyClientPnumber
);

module.exports = router;
