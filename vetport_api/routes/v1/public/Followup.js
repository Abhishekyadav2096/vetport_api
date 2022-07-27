const express = require("express");
const router = express.Router();

const followup = require("../../../controllers/Followup");

router.post("/save_followup", followup.create);
//router.get("/get_followup", followup.findAll);
router.put("/update_followup", followup.update);
router.use("/delete_followup", followup.delete);

module.exports = router;
