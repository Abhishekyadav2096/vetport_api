const express = require("express");
const router = express.Router();

const plancategory = require("../../../controllers/Plancategory");

router.post("/save_plancategory", plancategory.create);
router.get("/get_plancategory", plancategory.findAll);
router.get("/get_plancategoryById", plancategory.findOne);
router.put("/update_plancategory/:id", plancategory.update);
module.exports = router;
