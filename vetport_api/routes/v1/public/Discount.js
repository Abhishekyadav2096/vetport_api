const express = require("express");
const router = express.Router();

const discount = require("../../../controllers/Discount");

router.post("/save_discount", discount.create);
router.get("/get_discount", discount.findAll);
router.put("/update_discount", discount.update);
router.get("/get_discountbyname/:id", discount.getDiscountByName);

module.exports = router;
