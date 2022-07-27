const express = require("express");
const router = express.Router();

const plantype = require("../../../controllers/Plantype");

router.post("/save_plantype", plantype.create);
router.get("/get_plantype", plantype.findAll);

module.exports = router;
