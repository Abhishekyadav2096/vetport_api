const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const complaint = new Schema ({

    Description : {
          type  : String

    }
})

const ComplaintModel = mongoose.model("complaint",complaint)
module.exports = ComplaintModel