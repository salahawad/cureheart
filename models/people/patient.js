const mongoose = require('mongoose');

const Patient = mongoose.Schema({
    name: String,
    email: String,
    phone_number: Number,
    digital_id: String
});

module.exports = mongoose.model('patient', Patient);