const express = require("express");
const router = express.Router();

const searchClientPatient = require("../../../controllers/Searchclientpatient");

router.get("/", searchClientPatient.findByQuery);
// router.post("/", searchClientPatient.findByQuery);

module.exports = router;
