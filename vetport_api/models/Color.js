const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const color = new Schema ({
    Color : {
        type : String
    },
    Status : {
        type : Boolean
    }
})

const ColorModel = mongoose.model("color",color)
module.exports = ColorModel