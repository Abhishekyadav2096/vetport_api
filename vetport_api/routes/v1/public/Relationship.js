const express = require("express");
const router = express.Router();

const relationship = require("../../../controllers/Relationship");

router.post("/add", relationship.create);
router.get("/get", relationship.findAll);

module.exports = router;
