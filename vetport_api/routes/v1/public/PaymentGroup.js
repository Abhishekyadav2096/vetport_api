const express = require("express");
const router = express.Router();

const paymentgroup = require("../../../controllers/PaymentGroup");

router.post("/save_paymentGroup", paymentgroup.create);
router.get("/get_paymentGroup", paymentgroup.findAll);
router.get("/get_paymentGroupByName/:name?", paymentgroup.findByName);

module.exports = router;
