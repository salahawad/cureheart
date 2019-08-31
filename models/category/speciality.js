const mongoose = require('mongoose');

const speciality = mongoose.Schema({
    name: String
});

module.exports = mongoose.model('speciality', speciality);