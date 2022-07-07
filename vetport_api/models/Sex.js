const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const sex = new Schema ({
    Species : {
        type : String
    },
    Sex : {
        type : String
    },
    IsNeutered : {
       type : Boolean
    },
    NeuteredSex : {
        type : String
    },
    Icon : {
        type : String
    },
    Status : {
        type : Boolean
    }
})

const SexModel = mongoose.model("sex",sex)
module.exports = SexModel