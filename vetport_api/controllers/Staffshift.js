const Staffshift = require("../models/Staffshift")


// Create and Save a Staff shift
exports.create = async(req, res) => {
      try{
        const body = req.body
        const Doc = new Staffshift(body);
        const doc = await Doc.save();
        res.status(200).json(doc)

      }catch(error){
        res.status(500).json(error)
      }
}


// Retrieve all Staff shift from the database.
exports.findAll = async (req, res) => {
    try {
      let docs = await Staffshift.find({});
      res.json(docs);
    } catch (error) {
      res.status(500).json(error.message);
    }
  };


// Update a Staff shift by the id in the request

exports.update = async (req, res) => {
    try {
      const { id } = req.query;
      const body = req.body;
      let doc = await Staffshift.findByIdAndUpdate({_id:id},body)
      res.json("updated");
    } catch (error) {
      res.status(500).json(error)
    }
  };