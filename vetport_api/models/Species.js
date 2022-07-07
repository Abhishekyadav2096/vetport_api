const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const species = new Schema ({
    Name : {
        type : String
    },
    Description : {
        type : String
    },
    Status : {
        type : Boolean
    }
})

const SpeciesModel = mongoose.model("species",species)
module.exports = SpeciesModel