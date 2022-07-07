const express = require("express");
const router = express.Router();

const soapnote = require("../../../controllers/Soapnote")

router.post("/add", soapnote.create);
router.put("/update", soapnote.update)
router.delete("/delete", soapnote.delete)

module.exports = router;