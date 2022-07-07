const express = require("express");
const router = express.Router();

const vital = require ("../../../controllers/Vital")


router.post("/add", vital.create);
router.get("/get", vital.findOne);
router.delete("/delete", vital.delete)

module.exports = router;