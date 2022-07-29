const express = require("express");
const router = express.Router();

const reminder = require("../../../controllers/Reminder");

router.post("/save_reminder", reminder.create);
router.get("/get_reminder/:_id?", reminder.find);
router.get("/filter_reminderbyname", reminder.findByTitle);
router.get("/get_reminderbyquery", reminder.findByQuery);
router.put("/update_reminder/:_id", reminder.update);

module.exports = router;
