const express = require("express")
const router = express.Router();

const species = require("../../../controllers/Species")

router.post("/add", species.create);
router.get("/get", species.findAll);
router.put("/update", species.update);

module.exports = router