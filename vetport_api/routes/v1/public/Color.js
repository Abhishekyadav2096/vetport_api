const express = require("express");
const router = express.Router();

const color = require("../../../controllers/Color");

router.post("/save_color", color.create);
router.get("/get_color", color.findAll);
router.put("/update_color/:id", color.update);
router.get("/get_color_bySpeciesId", color.getColorBySpeciesId);
router.patch("/map_color", color.mapColor);
router.delete("/delete_color", color.delete);

module.exports = router;
