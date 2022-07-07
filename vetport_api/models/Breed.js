const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const breed = new Schema ({
    Species : {
        type : String
    },
    Breed : {
        type : String
    },
    Description : {
       type : String
    },
    Status : {
        type : Boolean
    }
})

const BreedModel = mongoose.model("breed",breed)
module.exports = BreedModel