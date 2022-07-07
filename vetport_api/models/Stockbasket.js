const mongoose = require("mongoose")
const Schema = mongoose.Schema

const stockbasket = new Schema ({
    basket_name : {
        type : String,
        required : true,
        trim : true
    },
    re_order_qty : {
        type : Number
        
    },
    threshold_qty : {
        type : Number
        
    }
})

const StockbasketModel = mongoose.model("stockbasket",stockbasket)
module.exports = StockbasketModel