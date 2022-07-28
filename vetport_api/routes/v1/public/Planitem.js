const express = require("express");
const router = express.Router();

const planitem = require("../../../controllers/Planitem");

router.post("/save_planitem", planitem.create);
router.get("/get_planitem", planitem.findAll);
router.get("/get_planitemById", planitem.findOne);
router.put("/update_planitem", planitem.update);
module.exports = router;
