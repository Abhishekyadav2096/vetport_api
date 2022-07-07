const Stockfacility = require("../models/Stockfacility")


// Create and Save a Stock facility
exports.create = async(req, res) => {
      try{
        const body = req.body
        const Doc = new Stockfacility(body);
        const doc = await Doc.save();
        res.status(200).json(doc)

      }catch(error){
        res.status(500).json(error)
      }
}


// Retrieve all Stock facility from the database.
exports.findAll = async (req, res) => {
    try {
      let docs = await Stockfacility.find({});
      res.json(docs);
    } catch (error) {
      res.status(500).json(error.message);
    }
  };


// Update a Stock facility by the id in the request

exports.update = async (req, res) => {
    try {
      const { id } = req.query;
      const body = req.body;
      let doc = await Stockfacility.findByIdAndUpdate({_id:id},body)
      res.json("updated");
    } catch (error) {
      res.status(500).json(error)
    }
  };