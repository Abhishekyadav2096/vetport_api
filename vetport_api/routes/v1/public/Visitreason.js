const express = require("express");
const router = express.Router();

const visitreason = require("../../../controllers/Visitreason");

router.post("/save_visitReason", visitreason.create);
router.get("/get_visitReason", visitreason.findAll);
router.put("/update_visitReason/:id", visitreason.update);

module.exports = router;
