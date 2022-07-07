const express = require("express")
const router = express.Router();

const vendoritem = require("../../../controllers/Vendoritem")

router.post("/add", vendoritem.create);
router.get("/get", vendoritem.findAll);
router.put("/update", vendoritem.update);

module.exports = router