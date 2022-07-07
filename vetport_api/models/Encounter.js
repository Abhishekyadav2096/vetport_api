const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const encounter = new Schema ({
      
    Encname : {
        type : String
    },

    Des : {
        type  : String

  },

   Provider : {
       type : String
   },
   status : {
       type : Boolean
   }
})

const EncounterModel = mongoose.model("encounter",encounter)
module.exports = EncounterModel