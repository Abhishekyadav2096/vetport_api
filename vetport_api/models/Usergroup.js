const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const usergroup = new Schema ({
    Groupname : {
        type : String
    },
    Status : {
        type : Boolean
    }
})

const UsergroupModel = mongoose.model("usergroup",usergroup)
module.exports = UsergroupModel