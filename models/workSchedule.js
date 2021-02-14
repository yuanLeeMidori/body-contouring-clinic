const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const WorkScheduleSchema = new Schema({
    staffId: {
        type: Schema.Types.ObjectId,
        ref: 'staffs',
        required: true
    },
    dateId: {
        type: Schema.Types.ObjectId,
        ref: 'dates',
        required: true
    },
    times: [{
        type: Schema.Types.ObjectId,
        ref: 'times',
    }],
    description: {
        type: String,
        required: true
    }

}, { timestamps: true });

const WorkSchedule = mongoose.model('workSchedules', WorkScheduleSchema)

module.exports = WorkSchedule;
