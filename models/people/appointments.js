const mongoose = require('mongoose');

const Appointments = mongoose.Schema({
    doctor: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'doctor',
        index : true
    },
    patient: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'patient',
        index : true
    },
    day: {
        type: Date,
        index : true
    },
    starttime: Date,
    center: String,
    status: String,
}, {
    timestamps: true
});

module.exports = mongoose.model('Appointment', Appointments);