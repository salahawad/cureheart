var express = require('express');
var router = express.Router();

var doctors = require('./v1/doctors');
var patients = require('./v1/patient');
var assign = require('./v1/assign');

router.use('/doctors', doctors);
router.use('/patients', patients);
router.use('/assign', assign);

module.exports = router;
