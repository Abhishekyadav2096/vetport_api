const express = require("express");
const router = express.Router();

const complaint = require("../../../controllers/Complaint")

router.post("/add", complaint.create);
router.put("/update", complaint.update);
router.delete("/delete", complaint.delete)

module.exports = router;