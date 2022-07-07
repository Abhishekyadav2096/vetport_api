const express = require("express")
const router = express.Router();

const stockbasket = require("../../../controllers/Stockbasket")

router.post("/add", stockbasket.create);
router.get("/get", stockbasket.findAll);
router.put("/update", stockbasket.update);

module.exports = router