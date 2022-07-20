const express = require("express");
const router = express.Router();

const usergroup = require("../../../controllers/Usergroup");

router.post("/save_usergroup", usergroup.create);
router.get("/get_usergroup", usergroup.findAll);
router.put("/update_usergruop", usergroup.update);

module.exports = router;
