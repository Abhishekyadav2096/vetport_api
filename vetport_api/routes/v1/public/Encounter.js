const express = require("express");
const router = express.Router();

const encounter = require("../../../controllers/Encounter")

router.post("/add", encounter.create);
router.get("/get", encounter.findAll);
router.put("/update", encounter.update);
router.use("/delete", encounter.delete)


module.exports = router;