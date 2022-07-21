const express = require("express");
const router = express.Router();

const color = require("../../../controllers/Color");

router.post("/save_color", color.create);
router.get("/get_color", color.findAll);
router.put("/update_color", color.update);

module.exports = router;
