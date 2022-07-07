const express = require("express");
const router = express.Router();

const mclocation = require("../../../controllers/Mclocation")

router.post("/add", mclocation.create);
router.get("/get", mclocation.findAll);
router.put("/update", mclocation.update)

module.exports = router;