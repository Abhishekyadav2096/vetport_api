const express = require("express")
const router = express.Router();

const vendortype = require("../../../controllers/Vendortype")

router.post("/add", vendortype.create);
router.get("/get", vendortype.findAll);
router.put("/update", vendortype.update);

module.exports = router