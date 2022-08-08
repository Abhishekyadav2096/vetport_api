const express = require("express");
const router = express.Router();

const historyform = require("../../../controllers/HistoryForm");

router.post("/save_historyform", historyform.create);
router.get("/get_historyform/:id", historyform.findBySpecies);
router.put("/update_historyform/:id", historyform.update);

module.exports = router;
