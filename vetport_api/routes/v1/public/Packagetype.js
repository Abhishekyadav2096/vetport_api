const express = require("express");
const router = express.Router();

const packagetype = require("../../../controllers/Packagetype");

router.post("/save_packageType", packagetype.create);
router.get("/get_packageType", packagetype.findAll);
router.put("/update_packageType/:id", packagetype.update);
router.get("/get_packageTypeByName/:name?", packagetype.findByName);
//router.get("/searchvendor", vendor.findAll)

module.exports = router;
