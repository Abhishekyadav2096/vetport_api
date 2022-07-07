const express = require("express");
const router = express.Router();

const staff = require("../../../controllers/Staff");

router.post("/add", staff.create);
router.get("/get", staff.findAll);
router.put("/update", staff.update);
router.get("/getlistofprovidernames", staff.filterProviderByName);

module.exports = router;
