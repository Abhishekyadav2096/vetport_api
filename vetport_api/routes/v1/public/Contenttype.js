const express = require("express");
const router = express.Router();

const contenttype = require("../../../controllers/Contenttype");

router.post("/save_contentType", contenttype.create);
router.get("/get_contentType", contenttype.findAll);
router.put("/update_contentType/:id", contenttype.update);
router.get("/get_contentTypeByName/:name?", contenttype.findByName);

module.exports = router;
