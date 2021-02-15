const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const AppointmentSchema = new Schema({
    contactNumber: {
        type: String,
        required: true
    },
    specialRequest: {
        type: String,
    },
    customerId: {
        type: Schema.Types.ObjectId,
        ref: 'customers',
        required: true
    },
    scheduleId: {
        type: Schema.Types.ObjectId,
        ref: 'workSchedule',
        required: true
    },
    services: {
      type: Schema.Types.ObjectId,
      ref: 'services',
      required: true
  }  

}, { timestamps: true });

const Appointment = mongoose.model('appointments', AppointmentSchema);

module.exports = Appointment;
