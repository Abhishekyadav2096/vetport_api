const express = require("express");
const router = express.Router();

const attachtype = require("../../../controllers/AttachmentType");

router.post("/save_attachType", attachtype.create);
router.get("/get_attachType", attachtype.findAll);
router.put("/update_attachType/:id", attachtype.update);

module.exports = router;
