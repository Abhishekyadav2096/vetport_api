const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const visitreason = new Schema ({
    Reason_for_visit : {
        type : String
    },
    Duration : {
        type : String
    },
    Note : {
        type : String
    },
    Status : {
        type : Boolean
    }
})

const VisitreasonModel = mongoose.model("visitreason",visitreason)
module.exports = VisitreasonModel