const express = require("express");
const router = express.Router();

const mapcolor = require("../../../controllers/Mapcolor")

router.post("/add", mapcolor.create);
router.get("/get", mapcolor.findAll);
router.put("/update", mapcolor.update)

module.exports = router;