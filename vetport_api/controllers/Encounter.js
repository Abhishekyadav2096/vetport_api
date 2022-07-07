const Encounter = require("../models/Encounter")

// Create and Save a Encounter
exports.create = async (req, res) => {
    try{
        const body = req.body
        const Doc = new Encounter(body);
        const doc = await Doc.save();
        res.status(200).json(doc)

    }catch(error){
          res.status(500).json(error)
    }
}

// Retrieve all Encounter from the database.
exports.findAll = async (req, res) => {
    try {
      let docs = await Encounter.find({});
      res.json(docs);
    } catch (error) {
      res.status(500).json(error.message);
    }
  };


  // Update a Encounter by the id in the request

  exports.update = async (req, res) => {
    try {
      const { id } = req.query;
      const body = req.body;
      let doc = await Encounter.findByIdAndUpdate({_id:id},body)
      res.json("updated");
    } catch (error) {
      res.status(500).json(error)
    }
  };

  // Delete a Encounter by the id in the request

  exports.delete = async (req, res) => {
    try {
      const { id } = req.query;
      let doc = await Encounter.findByIdAndDelete({_id:id});
      res.json("Deleted");
    } catch (error) {
      res.status(500).json(error.message);
    }
  };