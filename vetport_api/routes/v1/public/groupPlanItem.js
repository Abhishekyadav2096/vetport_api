const express = require("express");
const router = express.Router();

const groupPlanItem = require("../../../controllers/groupPlanItem");

router.post("/save_groupPlanitem", groupPlanItem.create);
router.get("/get_groupPlanItem", groupPlanItem.findAll);
router.get("/get_groupPlanItemById/:id", groupPlanItem.findById);
router.put("/update_groupPlanItem/:id", groupPlanItem.update);
router.get("/filter_groupPlanItemByName/:name", groupPlanItem.filterByName);
router.get("/filter_groupPlanItemByQuery", groupPlanItem.filterByQuery);

module.exports = router;
