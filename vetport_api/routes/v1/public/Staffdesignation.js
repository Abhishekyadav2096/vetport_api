const express = require("express");
const router = express.Router();

const staffdesignation = require("../../../controllers/Staffdesignation");

router.post("/save_staffDesignation", staffdesignation.create);
router.get("/get_staffDesignation", staffdesignation.findAll);

module.exports = router;
