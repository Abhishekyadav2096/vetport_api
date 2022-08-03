const express = require("express");
const router = express.Router();

const phonetype = require("../../../controllers/Phonetype");

router.post("/save_phonetype", phonetype.create);
router.get("/get_phonetype", phonetype.findAll);
router.put("/update_phonetype/:id", phonetype.update);

module.exports = router;
