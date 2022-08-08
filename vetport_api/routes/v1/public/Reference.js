const express = require("express");
const router = express.Router();

const reference = require("../../../controllers/Reference");

router.post("/save_referredby", reference.create);
router.get("/get_referredby", reference.findAll);
router.put("/update_referredby/:id", reference.update);

module.exports = router;
