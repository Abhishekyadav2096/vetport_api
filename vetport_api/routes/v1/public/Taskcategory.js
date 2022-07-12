const express = require("express");
const router = express.Router();

const taskcategory = require("../../../controllers/Taskcategory");

router.post("/add", taskcategory.create);
router.get("/get", taskcategory.findAll);
router.put("/update", taskcategory.update);

module.exports = router;
