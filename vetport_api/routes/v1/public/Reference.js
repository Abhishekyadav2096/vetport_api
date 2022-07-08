const express = require("express");
const router = express.Router();

const reference = require("../../../controllers/Reference");

router.post("/save_reference", reference.create);
router.get("/get_reference", reference.findAll);
router.put("/update_reference", reference.update);

module.exports = router;
