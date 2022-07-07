const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const mapcolor = new Schema ({
    Species : {
        type : String
    },
    Color : {
        type : String
    },
    Checkbox : {
        type : Boolean
    },
    Status : {
        type : Boolean
    }
})

const MapcolorModel = mongoose.model("mapcolor",mapcolor)
module.exports = MapcolorModel