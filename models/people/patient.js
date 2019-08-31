const mongoose = require('mongoose');

const Patient = mongoose.Schema({
    name: String,
    email: String,
    phone_number: Number,
    digital_id: String
}, {
    timestamps: true
});

module.exports = mongoose.model('patient', Patient);