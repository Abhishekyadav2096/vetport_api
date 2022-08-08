const express = require("express");
const router = express.Router();

const manufacturer = require("../../../controllers/Manufacturer");

router.post("/save_manufacturer", manufacturer.create);
router.get("/get_manufacturer", manufacturer.findAll);
router.put("/update_manufacturer/:id", manufacturer.update);
router.get("/get_manufacturerByName/:name?", manufacturer.findByName);

module.exports = router;
