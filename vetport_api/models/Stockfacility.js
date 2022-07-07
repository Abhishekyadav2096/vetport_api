const mongoose = require("mongoose")
const Schema = mongoose.Schema

const stockfacility = new Schema ({
    Facility_name : {
        type : String,
        required : true  
    },
    Registration_Number : {
        type : String,
        required : true
    },
    Virtual_Facility : {
        type : Boolean

    },
    Address_1 : {
        type : String,
        required : true
    },
    Address_2 : {
        type : String

    },
    Country : {
        type : String,
        required : true
    },
    State : {
        type : String,
        required : true
    },
    City : {
        type : String,
        required : true
    },
    Postal_Code : {
        type : String,
        required : true
    },
    Facility_Email : {
        type : String,
        required : true
    },
    Phone : {
        type : String,
        required : true
    },
    website : {
        type : String
    },
    Status : {
        type : Boolean
    }
})

const StockfacilityModel = mongoose.model("stockfacility",stockfacility)
module.exports = StockfacilityModel