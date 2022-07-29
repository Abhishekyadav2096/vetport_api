const express = require("express");
const router = express.Router();

const planitem = require("../../../controllers/Planitem");

router.post("/save_planitem", planitem.create);
router.get("/get_planitem", planitem.findAll);
router.get("/get_planitemById", planitem.findOne);
router.put("/update_planitem", planitem.update);
router.get("/get_planitemByName", planitem.findByName);
router.get("/get_planitemByQuery", planitem.findByQuery);
router.get("/get_planitemByPlanaction", planitem.findByPlanaction);

module.exports = router;
