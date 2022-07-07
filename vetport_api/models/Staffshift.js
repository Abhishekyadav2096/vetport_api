const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const staffshift = new Schema ({
    Shiftname : {
        type : String
    },
    Shifttime : {
        type : String
    },
    Status : {
        type : Boolean
    }
})


const StaffshiftModel = mongoose.model("staffshift",staffshift)
module.exports = StaffshiftModel