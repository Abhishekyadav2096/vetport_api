const express = require("express");
const router = express.Router();

const encounter = require("../../../controllers/Encounter");

router.post("/save_encounter", encounter.create);
router.get("/get_encounter", encounter.findAll);
router.patch("/update", encounter.update);
router.use("/delete", encounter.delete);

module.exports = router;
