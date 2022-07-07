const express = require("express")
const router = express.Router();

const sex = require("../../../controllers/Sex")

router.post("/add", sex.create);
router.get("/get", sex.findAll);
router.put("/update", sex.update);

module.exports = router