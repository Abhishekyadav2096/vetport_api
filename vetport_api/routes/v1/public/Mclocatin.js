const express = require("express");
const router = express.Router();

const mclocation = require("../../../controllers/Mclocation");

router.post("/add", mclocation.create);
router.get("/get", mclocation.findAll);
router.put("/update", mclocation.update),
  router.get("/get_by_loaction", mclocation.getByLocation);

module.exports = router;
