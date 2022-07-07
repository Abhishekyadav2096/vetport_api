const express = require("express")
const router = express.Router();

const reference = require("../../../controllers/Reference")

router.post("/add", reference.create);
router.get("/get", reference.findAll);
router.put("/update", reference.update);

module.exports = router