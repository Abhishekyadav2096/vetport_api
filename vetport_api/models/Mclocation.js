const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const mclocation = new Schema ({
    LocName : {
        type : String
    },
    Loc_address : {
        type : String
    },
    Country : {
        type : String
    },
    State : {
        type : String
    },
    City : {
        type : String
    },
    Pscode : {
        type : String
    },
    status : {
        type : Boolean
    }
})

const MclocationModel = mongoose.model("mclocation",mclocation)
module.exports = MclocationModel