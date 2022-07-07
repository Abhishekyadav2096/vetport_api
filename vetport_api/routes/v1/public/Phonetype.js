const express = require("express");
const router = express.Router();

const phonetype = require("../../../controllers/Phonetype")

router.post("/add", phonetype.create);
router.get("/get", phonetype.findAll);

module.exports = router;