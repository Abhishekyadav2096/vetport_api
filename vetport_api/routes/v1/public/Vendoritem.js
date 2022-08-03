const express = require("express");
const router = express.Router();

const vendoritem = require("../../../controllers/Vendoritem");

router.post("/save_vendorItem", vendoritem.create);
router.get("/get_vendorItem", vendoritem.findAll);
router.put("/update_vendorItem/:id", vendoritem.update);
router.get("/get_vendorItemByName/:name?", vendoritem.findByName);
router.get("/filter_vendorItemByQuery", vendoritem.filterByQuery);

module.exports = router;
