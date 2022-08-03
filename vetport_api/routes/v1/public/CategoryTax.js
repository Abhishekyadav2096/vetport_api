const express = require("express");
const router = express.Router();

const categorytax = require("../../../controllers/CategoryTax");

router.post("/save_categoryTax", categorytax.create);
router.get("/get_categoryTax", categorytax.findAll);
//router.get("/get_categoryTaxById", categorytax.findOne);
router.put("/update_categoryTax/:id", categorytax.update);
module.exports = router;
