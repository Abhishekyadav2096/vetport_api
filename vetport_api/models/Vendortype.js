const mongoose = require("mongoose")
const Schema = mongoose.Schema

const vendortype = new Schema ({
    Vendor_type : {
        type : String    
    },
    Description : {
        type : String
    },
    Status : {
        type : Boolean
    }
})

const VendortypeModel = mongoose.model("vendortype",vendortype)
module.exports = VendortypeModel