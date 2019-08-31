var express = require('express');
var router = express.Router();

var doctors = require('./v1/doctors');
var patients = require('./v1/patient');
var assign = require('./v1/assign');
var speciality = require('./v1/speciality')

router.use('/doctors', doctors);
router.use('/patients', patients);
router.use('/assign', assign);
router.use('/speciality', speciality);

module.exports = router;
