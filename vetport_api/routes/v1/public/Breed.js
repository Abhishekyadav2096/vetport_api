const express = require("express")
const router = express.Router();

const breed = require("../../../controllers/Breed")

router.post("/add", breed.create);
router.get("/get", breed.findAll);
router.put("/update", breed.update);

module.exports = router