const express = require("express");
const router = express.Router();

const timezone = require("../../../controllers/Timezone");

router.post("/save_timezone", timezone.create);
router.get("/get_timezone", timezone.findAll);

module.exports = router;
