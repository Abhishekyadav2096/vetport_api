const express = require("express");
const router = express.Router();

const vendortype = require("../../../controllers/Vendortype");

router.post("/save_vendorType", vendortype.create);
router.get("/get_vendorType/:id", vendortype.findAll);
router.put("/update_vendorType", vendortype.update);

module.exports = router;
