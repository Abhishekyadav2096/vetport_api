const express = require("express");
const router = express.Router();

const taginfo = require("../../../controllers/Taginfo");

router.post("/save_tag_info", taginfo.create);
router.get("/get_tag_info", taginfo.findAll);

module.exports = router;
