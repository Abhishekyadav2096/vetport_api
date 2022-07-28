const express = require("express");
const router = express.Router();

const pricingstrategy = require("../../../controllers/Pricingstrategy");

router.post("/save_pricing_strategy", pricingstrategy.create);
router.get("/get_pricing_strategy", pricingstrategy.findAll);

module.exports = router;
