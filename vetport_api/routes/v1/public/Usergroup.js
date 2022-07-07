const express = require("express")
const router = express.Router();

const usergroup = require("../../../controllers/Usergroup")

router.post("/add", usergroup.create);
router.get("/get", usergroup.findAll);
router.put("/update", usergroup.update)

module.exports = router