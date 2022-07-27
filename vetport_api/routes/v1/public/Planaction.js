const express = require("express");
const router = express.Router();

const planaction = require("../../../controllers/Planaction");

router.post("/save_planaction", planaction.create);
router.get("/get_planaction", planaction.findAll);

module.exports = router;
