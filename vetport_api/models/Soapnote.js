const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const soapnote = new Schema ({

    Subjective : {
          type : String,
    },
    Objective  : {
          type : String,  
    },
    Assessment : {
          type : String
    },
    Plan : {
        type : String
    }

})

const SoapnoteModel = mongoose.model("soapnote",soapnote)
module.exports = SoapnoteModel