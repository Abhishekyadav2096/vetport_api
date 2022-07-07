const express = require("express")
const router = express.Router();

const manufacturer = require("../../../controllers/Manufacturer")

router.post("/add", manufacturer.create);
router.get("/get", manufacturer.findAll);
router.put("/update", manufacturer.update);

module.exports = router