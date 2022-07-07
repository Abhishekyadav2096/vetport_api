const express = require("express");
const router = express.Router();

const caregiver = require("../../../controllers/Caregiver")

router.post("/add", caregiver.create);
//router.get("/get", caregiver.findAll)
router.put("/update", caregiver.update)

module.exports = router;