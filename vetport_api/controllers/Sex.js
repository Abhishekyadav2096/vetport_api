const Sex = require("../models/Sex")


// Create and add a Sex of species
exports.create = async(req, res) => {
      try{
        const body = req.body
        const Doc = new Sex(body);
        const doc = await Doc.save();
        res.status(200).json(doc)

      }catch(error){
        res.status(500).json(error)
      }
}


// Retrieve all Sex from the database of species
exports.findAll = async (req, res) => {
    try {
      let docs = await Sex.find({});
      res.json(docs);
    } catch (error) {
      res.status(500).json(error.message);
    }
  };


// Update a Sex od species by the id in the request

exports.update = async (req, res) => {
    try {
      const { id } = req.query;
      const body = req.body;
      let doc = await Sex.findByIdAndUpdate({_id:id},body)
      res.json("updated");
    } catch (error) {
      res.status(500).json(error)
    }
  };