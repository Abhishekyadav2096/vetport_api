const express = require("express")
const router = express.Router();

const stockfacility = require("../../../controllers/Stockfacility")

router.post("/add", stockfacility.create);
router.get("/get", stockfacility.findAll);
router.put("/update", stockfacility.update);

module.exports = router