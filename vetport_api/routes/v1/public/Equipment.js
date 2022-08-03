const express = require("express");
const router = express.Router();

const equipment = require("../../../controllers/Equipment");

router.post("/save_equipment", equipment.create);
router.get("/get_equipment", equipment.find);
router.put("/update_equipment/:id", equipment.update);

module.exports = router;
