const express = require("express");
const router = express.Router();

const title = require("../../../controllers/Title");

router.post("/save_title", title.create);
router.get("/get_title", title.findAll);

module.exports = router;
