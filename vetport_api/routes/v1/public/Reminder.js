const express = require("express");
const router = express.Router();

const reminder = require("../../../controllers/Reminder");

router.post("/save_reminder", reminder.create);
router.get("/get_reminder/:_id?", reminder.find);
router.get("/filter_reminderbyname", reminder.findByTitle);
router.get("/get_reminderbyquery", reminder.findByQuery);
router.put("/update_reminder/:id", reminder.update);

// router.route("/").get(reminder.find).post(reminder.create);
// router.route("/:id").get(reminder.find).put(reminder.update);
// router.route("/filter/:_id?/:planItemId?/:status?").get(reminder.findByQuery);

module.exports = router;
