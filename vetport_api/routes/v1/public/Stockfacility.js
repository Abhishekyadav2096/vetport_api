const express = require("express");
const router = express.Router();

const stockfacility = require("../../../controllers/Stockfacility");

router.post("/save_stock_facility", stockfacility.create);
router.get("/get_stock_facility", stockfacility.findAll);
router.put("/update_stock_facility/:id", stockfacility.update);

module.exports = router;
