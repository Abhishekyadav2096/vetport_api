const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const vital = new Schema ({

     Weight : {

         type : String
     },
     Tem : {
         type : String
     },
     HR : {
         type : String
     },
    Res : {
        type : String
    },
    BP : {
        type : String
    },
    CRT : {
        type : String,
    },
    MM : {
        type : String
    }

})

const VitalModel = mongoose.model("vital",vital)
module.exports = VitalModel