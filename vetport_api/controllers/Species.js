const Species = require("../models/Species")


// Create and Save a Species
exports.create = async(req, res) => {
      try{
        const body = req.body
        const Doc = new Species(body);
        const doc = await Doc.save();
        res.status(200).json(doc)

      }catch(error){
        res.status(500).json(error)
      }
}


// Retrieve all Species from the database.
exports.findAll = async (req, res) => {
    try {
      let docs = await Species.find({});
      res.json(docs);
    } catch (error) {
      res.status(500).json(error.message);
    }
  };


// Update a Species by the id in the request

exports.update = async (req, res) => {
    try {
      const { id } = req.query;
      const body = req.body;
      let doc = await Species.findByIdAndUpdate({_id:id},body)
      res.json("updated");
    } catch (error) {
      res.status(500).json(error)
    }
  };