const express = require("express");
const router = express.Router();

const subcategorytax = require("../../../controllers/SubCategoryTax");

router.post("/save_subCategoryTax", subcategorytax.create);
router.get("/get_subCategoryTax", subcategorytax.findAll);
//router.get("/get_categoryTaxById", categorytax.findOne);
router.put("/update_subCategoryTax/:id", subcategorytax.update);
module.exports = router;
