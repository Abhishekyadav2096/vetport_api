const express = require("express");
const router = express.Router();

const examform = require("../../../controllers/examform");

router.post("/save_examform", examform.create);
router.get("/get_examform/:species", examform.findBySpecies);
router.put("/update_examform/:id", examform.update);

module.exports = router;
