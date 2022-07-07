const express = require("express")
const router = express.Router();

const color = require("../../../controllers/Color")

router.post("/add", color.create);
router.get("/get", color.findAll);
router.put("/update", color.update);

module.exports = router