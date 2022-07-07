const mongoose = require("mongoose")
const Schema = mongoose.Schema

const vendor = new Schema ({
    Vendor : {
        type : String,
        required : true    
    },
    Vendor_type : {
        type : String,
        required : true,
    },
    Phone_type : {
        type : String,
        required : true
    },
    Fax : {
        type : Number
    },
    Email : {
        type : String,

    },
    Address : {
        type : String,
        required : true
    },
    Country : {
        type : String,
        required : true
    },
    State : {
        type : String
    },
    City : {
        type : String,
        required : true
    },
    Postal_code : {
        type : String,
        required : true
    },
    Website : {
        type : String
    },
    Account_number : {
        type : String
    },
    Note : {
        type : String
    },
    Status : {
        type : Boolean
    }
})

const VendorModel = mongoose.model("vendor",vendor)
module.exports = VendorModel