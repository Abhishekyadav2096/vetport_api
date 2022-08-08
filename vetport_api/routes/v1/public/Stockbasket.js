const express = require("express");
const router = express.Router();

const stockbasket = require("../../../controllers/Stockbasket");

router.post("/save_stockBasket", stockbasket.create);
router.get("/get_stockBasket", stockbasket.findAll);
router.put("/update_stockBasket/:id", stockbasket.update);
router.get("/get_stockBasketByName/:name?", stockbasket.findByName);
router.get("/filter_stockBasketByQuery", stockbasket.filterByQuery);

module.exports = router;
