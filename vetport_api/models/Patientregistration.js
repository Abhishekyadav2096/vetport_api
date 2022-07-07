const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const Client = require("./Clientregistration")

const patientregistration = new Schema ({

    patientname : {
        type: String,
         required: true,
         trim : true
    },
    age : {
        type: Number,
    },
    weight : {
        type : String,
    },
    species : {
        type : String,
        trim : true
    },
    identification_Marking : {
        type : String
    },
    preffer_Provider : {
        type : String
    },
    clinic : {
        type : String
    },
    taxable : {
        type : Boolean
    },
    microchip_ID : {
        type : String
    },
    microchipped_Date : {
        type : String
    },
    rabiesTagID : {
        type : String
    },
    tattooID : {
        type : String
    },
    animal_Control_Number : {
        type : String
    },
    apply_Discount : {
        type : Boolean
    },
    patient_Group_Category : {
        type : String
    },
    remark : {
        type : String
    },
    alert : {
        type : String
    },
    client_Id : {
        type : Schema.Types.ObjectId,
        ref: Client.modelName,
    },
})

const PatientModel = mongoose.model("patientregistration", patientregistration);
module.exports = PatientModel