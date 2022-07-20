const express = require("express");
const router = express.Router();

const user = require("../../../controllers/User");

router.post("/save_user", user.create);
router.get("/get_user", user.findAll);
router.put("/update_user", user.update);
router.get("/get_user_id", user.getUserId);
router.patch("/update_password", user.updatePassword);

module.exports = router;
