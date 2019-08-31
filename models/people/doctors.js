const mongoose = require('mongoose');

const Doctors = mongoose.Schema({
    name: String,
    email: String,
    phone_number: Number,
    speciality: { type: Schema.Types.ObjectId, ref: 'speciality' },
    med_id: String,
    esignature: String
});

module.exports = mongoose.model('doctor', Doctors);