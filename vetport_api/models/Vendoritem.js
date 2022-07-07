const mongoose = require("mongoose")
const Schema = mongoose.Schema

const vendoritem = new Schema ({
    Vendor : {
        type : String,
        required : true    
    },
    Vendor_item : {
        type : String,
        required : true
    },
    Vendor_item_nu : {
        type : String
    },
    Manufacturer : {
        type : String,
        required : true
    },
    Manufacturer_item_code : {
        type : String
    },
    UPC_code : {
        type : String
    },
    Din : {
        type : String
    },
    HSN_code : {
        type : String
    },
    Vendor_package : {
        type : String,
        required : true
    },
    Clinic_selling_unit : {
        type : String,
        required : true
    },
    Clinic_selling_unit_per_vendor_package : {
        type : String,
        required : true
    },
    Purchase_price_per_package : {
        type : Number,
        required : true
    },
    Minimum_threshold_quantity : {
        type : Number,
        required : true
    },
    package_to_re_order : {
        type : Number,
        required : true
    },
    Is_manufacturer_required : {
        type : Boolean
    },
    Vetcove : {
        type : Boolean,
        required : true
    },
    Tracking : {
        type : Array
    },
    Copy_vendor_item_to_other_facilities : {
        type : Array
    },
    Status : {
        type : Boolean
    }
})

const VendoritemModel = mongoose.model("vendoritem",vendoritem)
module.exports = VendoritemModel