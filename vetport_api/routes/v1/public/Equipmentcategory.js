const express = require("express");
const router = express.Router();

const equipmentCategory = require("../../../controllers/Equipmentcategory");

router.post("/save_equipmentcategory", equipmentCategory.create);
router.get("/get_equipmentcategory", equipmentCategory.find);
router.put("/update_equipmentcategory/:id", equipmentCategory.update);

module.exports = router;
