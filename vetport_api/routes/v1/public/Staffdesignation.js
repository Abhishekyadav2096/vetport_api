const express = require("express");
const router = express.Router();

const staffdesignation = require("../../../controllers/Staffdesignation");

router.post("/save_staffdesignation", staffdesignation.create);
router.get("/get_staffdesignation", staffdesignation.findAll);

module.exports = router;
