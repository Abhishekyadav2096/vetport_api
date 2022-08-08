const express = require("express");
const router = express.Router();

const staffshift = require("../../../controllers/Staffshift");

router.post("/save_staffShift", staffshift.create);
router.get("/get_staffShift", staffshift.findAll);
router.put("/update_staffShift/:id", staffshift.update);

module.exports = router;
