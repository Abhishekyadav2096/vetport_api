const express = require("express");
const router = express.Router();

const staff = require("../../../controllers/Staff");

router.post("/save_staff", staff.create);
router.get("/get_staff", staff.findAll);
router.put("/update_staff", staff.update);
router.get("/get_preferredProvider", staff.filterProviderByName);
router.get("/get_user_id", staff.getUserId);

module.exports = router;
