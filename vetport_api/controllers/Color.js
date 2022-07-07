const Color = require("../models/Color")


// Create and Save a color of species
exports.create = async(req, res) => {
      try{
        const body = req.body
        const Doc = new Color(body);
        const doc = await Doc.save();
        res.status(200).json(doc)

      }catch(error){
        res.status(500).json(error)
      }
}


// Retrieve all color of species from the database.
exports.findAll = async (req, res) => {
    try {
      let docs = await Color.find({});
      res.json(docs);
    } catch (error) {
      res.status(500).json(error.message);
    }
  };


// Update a color of species by the id in the request

exports.update = async (req, res) => {
    try {
      const { id } = req.query;
      const body = req.body;
      let doc = await Color.findByIdAndUpdate({_id:id},body)
      res.json("updated");
    } catch (error) {
      res.status(500).json(error)
    }
  };