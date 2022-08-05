const express = require("express");
const router = express.Router();

const usergroup = require("../../../controllers/Usergroup");

router.post("/save_userGroup", usergroup.create);
router.get("/get_userGroup", usergroup.findAll);
router.put("/update_userGroup/:id", usergroup.update);

module.exports = router;
