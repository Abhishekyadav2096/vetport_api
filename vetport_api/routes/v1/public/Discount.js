const express = require("express");
const router = express.Router();

const discount = require("../../../controllers/Discount")

router.post("/add", discount.create);
router.get("/get", discount.findAll)
router.put("/update", discount.update)

module.exports = router;