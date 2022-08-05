const express = require("express");
const router = express.Router();

const breed = require("../../../controllers/Breed");

router.post("/save_breed", breed.create);
router.get("/get_breed", breed.findAll);
router.put("/update_breed/:id", breed.update);
router.get("/get_breed_bySpeciesId", breed.getBreedBySpeciesId);

module.exports = router;
