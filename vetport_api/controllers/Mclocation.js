const Mclocation = require("../models/Mclocation")

// Create and Save a mobile clinic location
exports.create = async (req, res) => {
    try{
        const body = req.body
        const Doc = new Mclocation(body);
        const doc = await Doc.save();
        res.status(200).json(doc)

    }catch(error){
          res.status(500).json(error)
    }
}

// Retrieve all mobile clinic location from the database.
exports.findAll = async (req, res) => {
    try {
      let docs = await Mclocation.find({});
      res.json(docs);
    } catch (error) {
      res.status(500).json(error.message);
    }
  };



// Update a mobile clinic location by the id in the request

exports.update = async (req, res) => {
    try {
      const { id } = req.query;
      const body = req.body;
      let doc = await Mclocation.findByIdAndUpdate({_id:id},body)
      res.json("updated");
    } catch (error) {
      res.status(500).json(error)
    }
  };


  
