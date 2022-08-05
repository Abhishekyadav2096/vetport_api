const express = require("express");
const router = express.Router();

const staffshift = require("../../../controllers/Staffshift");

router.post("/add", staffshift.create);
router.get("/get", staffshift.findAll);
router.put("/update_staffShift/:id", staffshift.update);

module.exports = router;
