const express = require("express");
const router = express.Router();

const breed = require("../../../controllers/Breed");

router.post("/save_breed", breed.create);
router.get("/get_breed", breed.findAll);
router.put("/update_breed", breed.update);
router.get("/get_by_species", breed.getBySpecies);

module.exports = router;
