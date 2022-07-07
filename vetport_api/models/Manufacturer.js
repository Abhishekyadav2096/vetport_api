const mongoose = require("mongoose")
const Schema = mongoose.Schema

const manufacturer = new Schema ({
    Manufacturer : {
        type : String    
    },
    Website : {
        type : String
    },
    Status : {
        type : Boolean
    }
})

const ManufacturerModel = mongoose.model("manufacturer",manufacturer)
module.exports = ManufacturerModel