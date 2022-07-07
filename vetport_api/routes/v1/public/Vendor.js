const express = require("express")
const router = express.Router();

const vendor = require("../../../controllers/Vendor")

router.post("/add", vendor.create);
router.get("/get", vendor.findAll);
router.put("/update", vendor.update);
//router.get("/searchvendor", vendor.findAll)

module.exports = router