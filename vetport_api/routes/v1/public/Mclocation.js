const express = require("express");
const router = express.Router();

const mclocation = require("../../../controllers/Mclocation");

router.post("/add", mclocation.create);
router.get("/get", mclocation.findAll);
router.put("/update/:id", mclocation.update);
// router.get("/get_by_loaction", mclocation.getByLocation);

module.exports = router;
