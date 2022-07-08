const express = require("express");
const router = express.Router();

const relationship = require("../../../controllers/Relationship");

router.post("/save_relationship", relationship.create);
router.get("/get_relationship", relationship.findAll);

module.exports = router;
