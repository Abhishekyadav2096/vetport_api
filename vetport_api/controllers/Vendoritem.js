const Vendoritem = require("../models/Vendoritem")


// Create and Save a Vendor item
exports.create = async(req, res) => {
      try{
        const body = req.body
        const Doc = new Vendoritem(body);
        const doc = await Doc.save();
        res.status(200).json(doc)

      }catch(error){
        res.status(500).json(error)
      }
}

// Retrieve all Vendor item from the database.
exports.findAll = async (req, res) => {
    try {
      let docs = await Vendoritem.find({});
      res.json(docs);
    } catch (error) {
      res.status(500).json(error.message);
    }
  };


// Update a Vendor item by the id in the request

exports.update = async (req, res) => {
    try {
      const { id } = req.query;
      const body = req.body;
      let doc = await Vendoritem.findByIdAndUpdate({_id:id},body)
      res.json("updated");
    } catch (error) {
      res.status(500).json(error)
    }
  };