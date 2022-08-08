const express = require("express");
const router = express.Router();

const staffshift = require("../../../controllers/Staffshift");

router.post("/save_staffshift", staffshift.create);
router.get("/get_staffshift", staffshift.findAll);
router.put("/update_staffshift/:id", staffshift.update);

module.exports = router;
