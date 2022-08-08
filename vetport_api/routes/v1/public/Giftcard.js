const express = require("express");
const router = express.Router();

const giftcard = require("../../../controllers/Giftcard");

router.post("/save_giftcard", giftcard.create);
router.get("/get_giftcard", giftcard.find);
router.put("/update_giftcard/:id", giftcard.update);

module.exports = router;
