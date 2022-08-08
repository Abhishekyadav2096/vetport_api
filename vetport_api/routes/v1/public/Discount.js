const express = require("express");
const router = express.Router();

const discount = require("../../../controllers/Discount");

router.post("/save_discount", discount.create);
router.get("/get_discount", discount.findAll);
router.put("/update_discount/:id", discount.update);
router.get("/get_getDiscountByName/:name?", discount.findByName);

module.exports = router;
