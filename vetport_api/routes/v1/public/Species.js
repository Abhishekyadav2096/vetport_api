const express = require("express");
const router = express.Router();

const species = require("../../../controllers/Species");

router.post("/save_species", species.create);
router.get("/get_species", species.findAll);
router.put("/update_species/:id", species.update);

module.exports = router;
