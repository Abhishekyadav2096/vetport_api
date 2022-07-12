const express = require("express");
const router = express.Router();

const country = require("../../../controllers/Country");

router.post("/save_country", country.create);
router.get("/get_country", country.findAll);

module.exports = router;
