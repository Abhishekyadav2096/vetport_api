const express = require("express");
const router = express.Router();

const sex = require("../../../controllers/Sex");

router.post("/save_sex", sex.create);
router.get("/get_sex", sex.findAll);
router.put("/update_sex", sex.update);
router.get("/get_byspecies", sex.getBySpecies);

module.exports = router;
