const express = require("express");
const router = express.Router();

const planSubCategory = require("../../../controllers/PlanSubCategory");

router.post("/save_plansubcategory", planSubCategory.create);
router.get("/get_plansubcategory", planSubCategory.findAll);
router.get("/get_plansubcategory_byquery", planSubCategory.findByQuery);
router.put("/update_plansubcategory", planSubCategory.update);

module.exports = router;
