const Caregiver = require("../models/Caregiver")

// Create and Save a caregiver

exports.create = async (req, res) => {
    try{
        const body = req.body
        const Doc = new Caregiver(body);
        const doc = await Doc.save();
        res.status(200).json(doc)

    }catch(error){
          res.status(500).json(error)
    }
}

// Update a Caregiver by the id in the request

exports.update = async (req, res) => {
    try {
      const { id } = req.query;
      const body = req.body;
      let doc = await Caregiver.findByIdAndUpdate({_id:id},body)
      res.json("updated");
    } catch (error) {
      res.status(500).json(error)
    }
  };