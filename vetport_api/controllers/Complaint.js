const Complaint = require("../models/Complaint")

// Create and Save a Complaint
exports.create = async (req, res) => {
    try{
        const body = req.body
        const Doc = new Complaint(body);
        const doc = await Doc.save();
        res.status(200).json(doc)

    }catch(error){
          res.status(500).json(error)
    }
}

// Update a Complaint by the id in the request

exports.update = async (req, res) => {
    try {
      const { id } = req.query;
      const body = req.body;
      let doc = await Complaint.findByIdAndUpdate({_id:id},body)
      res.json("updated");
    } catch (error) {
      res.status(500).json(error)
    }
  };

// Delete a Complaint by the id in the request

  exports.delete = async (req, res) => {
    try {
      const { id } = req.query;
      let doc = await Complaint.findByIdAndDelete({_id:id});
      res.json("Deleted");
    } catch (error) {
      res.status(500).json(error.message);
    }
  };