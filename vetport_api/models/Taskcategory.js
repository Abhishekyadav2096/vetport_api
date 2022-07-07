const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const taskcategory = new Schema ({
    Categoryname : {
        type : String
    },
    Status : {
        type : Boolean
    }
})

const TaskcategoryModel = mongoose.model("taskcategory",taskcategory)
module.exports = TaskcategoryModel