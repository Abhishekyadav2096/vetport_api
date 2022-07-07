const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const clinic = new Schema ({
     Clinicname : {
         type : String
     },
     Clinictype : {
         type : String
     },
     Adr1 : {
        type : String
     },
     Adr2 : {
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
     PCode : {
        type : String
     },
    Clinic_Email : {
        type : String
    },
    Email_Copy : {
        type : String
    },
    Replyto : {
        type : String
    },
    Clinic_Emailgd : {
        type : String
    },
    Clinic_Emailad : {
        type : String
    },
    TimeZone : {
        type : String
    },
    StartTime : {
        type : String
    },
    EndTime : {
        type : String
    },
    Phone : {
        type : String
    },
    website : {
        type : String
    },
    Pricing : {
        type : String
    },
    status : {
        type : Boolean
    }
})

const ClinicModel = mongoose.model("clinic", clinic);
module.exports = ClinicModel