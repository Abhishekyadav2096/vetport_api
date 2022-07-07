const Manufacturer = require("../models/Manufacturer")


// Create and Save a Manufacturer
exports.create = async(req, res) => {
      try{
        const body = req.body
        const Doc = new Manufacturer(body);
        const doc = await Doc.save();
        res.status(200).json(doc)

      }catch(error){
        res.status(500).json(error)
      }
}

// Retrieve all Manufacturer from the database.
exports.findAll = async (req, res) => {
    try {
      let docs = await Manufacturer.find({});
      res.json(docs);
    } catch (error) {
      res.status(500).json(error.message);
    }
  };


// Update a Manufacturer by the id in the request

exports.update = async (req, res) => {
    try {
      const { id } = req.query;
      const body = req.body;
      let doc = await Manufacturer.findByIdAndUpdate({_id:id},body)
      res.json("updated");
    } catch (error) {
      res.status(500).json(error)
    }
  };