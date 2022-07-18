const express = require("express");
const router = express.Router();

const specialization = require("../../../controllers/Specialization");

router.post("/save_specialization", specialization.create);
router.get("/get_specialization", specialization.findAll);

module.exports = router;
