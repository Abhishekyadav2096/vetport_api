const Vital = require("../models/Vital")


// Create and Save a Vital
exports.create = async (req, res) => {
    try{
        const body = req.body
        const Doc = new Vital(body);
        const doc = await Doc.save();
        res.status(200).json(doc)

    }catch(error){
          res.status(500).json(error)
    }
}

//Find a vital with an id
exports.findOne = async (req, res) => {
    try {
      const { id } = req.query;
      let doc = await Vital.findById({_id:id})
      res.status(200).json(doc)

    }catch(error){
          res.status(500).json(error)
    }
  };

  //Delete a Vital by the id in the request
  exports.delete = async (req, res) => {
    try {
      const { id } = req.query;
      let doc = await Vital.findByIdAndDelete({_id:id});
      res.json("Deleted");
    } catch (error) {
      res.status(500).json(error.message);
    }
  };