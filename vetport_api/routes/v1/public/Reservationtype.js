const express = require("express")
const router = express.Router();

const reservationtype = require("../../../controllers/Reservationtype")

router.post("/add", reservationtype.create);
router.get("/get", reservationtype.findAll);
router.put("/update", reservationtype.update);

module.exports = router