const express = require("express")
const router = express.Router();

const visitreason = require("../../../controllers/Visitreason")

router.post("/add", visitreason.create);
router.get("/get", visitreason.findAll);
router.put("/update", visitreason.update)

module.exports = router