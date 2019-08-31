const mongoose = require('mongoose');

const Doctors = mongoose.Schema({
    name: String,
    email: String,
    phone_number: Number,
    speciality: String,
    med_id: String,
    esignature: String
});

module.exports = mongoose.model('doctor', Doctors);