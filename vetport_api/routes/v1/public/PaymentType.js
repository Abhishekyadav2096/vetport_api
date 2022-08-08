const express = require("express");
const router = express.Router();

const paymenttype = require("../../../controllers/PaymentType");

router.post("/save_paymentType", paymenttype.create);
router.get("/get_paymentType", paymenttype.findAll);
router.put("/update_paymentType/:id", paymenttype.update);
// //router.patch(
//   "/update_default_paymentType",
//   paymenttype.updateDefaultPaymentType
// );
module.exports = router;
