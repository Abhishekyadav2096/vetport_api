const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const Patient = require("./Patientregistration");
const Appointmenttype = require("./Appointmenttype");
const Staff = require("./Staff");
const Visitreason = require("./Visitreason");

const appointment = new Schema(
  {
    patient: {
      type: Schema.Types.ObjectId,
      ref: Patient.modelName,
      required: true,
    },
    appointmentType: {
      type: Schema.Types.ObjectId,
      ref: Appointmenttype.modelName,
    },
    reason: {
      type: Schema.Types.ObjectId,
      ref: Visitreason.modelName,
    },
    staff: {
      type: Schema.Types.ObjectId,
      ref: Staff.modelName,
      required: true,
    },
    startTime: {
      type: Date,
      required: true,
    },
    endTime: {
      type: Date,
      required: true,
    },
    // comments: {
    //   type: String,
    //   trim: true,
    // },
    // equipment: {
    //   type: Schema.Types.ObjectId,
    //   ref: Equipment.modelName,
    // },
    // dropOff: {
    //   type: Boolean,
    //   default: false,
    // },
    // recurringAppointment: {
    //   type: Boolean,
    //   default: false,
    // },
    // emailToClient: {
    //   type: Boolean,
    //   default: false,
    // },
    // smsToClient: {
    //   type: Boolean,
    //   default: false,
    // },
    // clientRequirements: {
    //   type: String,
    //   trim: true,
    // },
  },
  { timestamps: true, strict: false }
);

const AppointmentModel = mongoose.model("appt", appointment);
module.exports = AppointmentModel;
