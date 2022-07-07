const Visitreason = require("../models/Visitreason")


// Create and Save a Reason for visit
exports.create = async(req, res) => {
      try{
        const body = req.body
        const Doc = new Visitreason(body);
        const doc = await Doc.save();
        res.status(200).json(doc)

      }catch(error){
        res.status(500).json(error)
      }
}

// Retrieve all Reason for visit from the database.
exports.findAll = async (req, res) => {
    try {
      let docs = await Visitreason.find({});
      res.json(docs);
    } catch (error) {
      res.status(500).json(error.message);
    }
  };


// Update a Reason for visit by the id in the request

exports.update = async (req, res) => {
    try {
      const { id } = req.query;
      const body = req.body;
      let doc = await Visitreason.findByIdAndUpdate({_id:id},body)
      res.json("updated");
    } catch (error) {
      res.status(500).json(error)
    }
  };