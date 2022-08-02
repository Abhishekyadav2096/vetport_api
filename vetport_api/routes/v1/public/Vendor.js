const express = require("express");
const router = express.Router();

const vendor = require("../../../controllers/Vendor");

router.post("/save_vendor", vendor.create);
router.get("/get_vendor", vendor.findAll);
router.put("/update_vendor/:id", vendor.update);
router.get("/get_vendorByName/:name?", vendor.findByName);
//router.get("/searchvendor", vendor.findAll)

module.exports = router;
