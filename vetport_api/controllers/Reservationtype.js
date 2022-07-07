const Reservationtype = require("../models/Reservationtype")


// Create and add a Reservation type
exports.create = async(req, res) => {
      try{
        const body = req.body
        const Doc = new Reservationtype(body);
        const doc = await Doc.save();
        res.status(200).json(doc)

      }catch(error){
        res.status(500).json(error)
      }
}


// Retrieve all Reservation type from the database 
exports.findAll = async (req, res) => {
    try {
      let docs = await Reservationtype.find({});
      res.json(docs);
    } catch (error) {
      res.status(500).json(error.message);
    }
  };


// Update a Reservation type by the id in the request

exports.update = async (req, res) => {
    try {
      const { id } = req.query;
      const body = req.body;
      let doc = await Reservationtype.findByIdAndUpdate({_id:id},body)
      res.json("updated");
    } catch (error) {
      res.status(500).json(error)
    }
  };