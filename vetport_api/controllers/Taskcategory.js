const Taskcategory = require("../models/Taskcategory")


// Create and Save a Task category
exports.create = async(req, res) => {
      try{
        const body = req.body
        const Doc = new Taskcategory(body);
        const doc = await Doc.save();
        res.status(200).json(doc)

      }catch(error){
        res.status(500).json(error)
      }
}

// Retrieve all Taskcategory from the database.
exports.findAll = async (req, res) => {
    try {
      let docs = await Taskcategory.find({});
      res.json(docs);
    } catch (error) {
      res.status(500).json(error.message);
    }
  };


// Update a Taskcategory by the id in the request

exports.update = async (req, res) => {
    try {
      const { id } = req.query;
      const body = req.body;
      let doc = await Taskcategory.findByIdAndUpdate({_id:id},body)
      res.json("updated");
    } catch (error) {
      res.status(500).json(error)
    }
  };