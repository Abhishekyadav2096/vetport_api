const Mapcolor = require("../models/Mapcolor")


// Create and Save a Mapcolor of species
exports.create = async(req, res) => {
      try{
        const body = req.body
        const Doc = new Mapcolor(body);
        const doc = await Doc.save();
        res.status(200).json(doc)

      }catch(error){
        res.status(500).json(error)
      }
}


// Retrieve all Mapcolor of species from the database.
exports.findAll = async (req, res) => {
    try {
      let docs = await Mapcolor.find({});
      res.json(docs);
    } catch (error) {
      res.status(500).json(error.message);
    }
  };


// Update a Mapcolor of species by the id in the request

exports.update = async (req, res) => {
    try {
      const { id } = req.query;
      const body = req.body;
      let doc = await Mapcolor.findByIdAndUpdate({_id:id},body)
      res.json("updated");
    } catch (error) {
      res.status(500).json(error)
    }
  };