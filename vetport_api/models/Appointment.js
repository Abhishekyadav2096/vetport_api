const mongoose = require("mongoose");
const schema = mongoose.Schema;

const appointment = new schema(
  {
    // name: {
    //   type: String,
    //   trim: true,
    //   required: true,
    // },
    appointmentType: {
      type: String,
      trim: true,
    },
    reason: {
      type: String,
      trim: true,
    },
    comments: {
      type: String,
      trim: true,
    },
    staff: {
      type: String,
      required: true,
      trim: true,
    },
    equipment: {
      type: String,
      trim: true,
    },
    startTime: {
      type: Date,
    },
    endTime: {
      type: Date,
    },
    dropOff: {
      type: Boolean,
      default: false,
    },
    recurringAppointment: {
      type: Boolean,
      default: false,
    },
    emailToClient: {
      type: Boolean,
      default: false,
    },
    smsToClient: {
      type: Boolean,
      default: false,
    },
    clientRequirements: {
      type: String,
      trim: true,
    },
  },
  { timestamps: true }
);

const AppointmentModel = mongoose.model("appointment", appointment);
module.exports = AppointmentModel;
