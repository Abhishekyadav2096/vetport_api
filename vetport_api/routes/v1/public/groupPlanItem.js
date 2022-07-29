const express = require("express");
const router = express.Router();

const group_plan_item = require("../../../controllers/groupPlanItem");

router.post("/save_group_plan_item", group_plan_item.create);
router.get("/get_group_plan_item", group_plan_item.findAll);
router.get("/get_group_plan_item", group_plan_item.findOne);
router.put("/update_group_plan_item", group_plan_item.update);
router.get("/get_group_plan_item", group_plan_item.filterGroupPlanItemByName);
module.exports = router;
