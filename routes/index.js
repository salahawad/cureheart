var express = require('express');
var router = express.Router();

var doctors = require('./v1/doctors');
var patients = require('./v1/patient');

router.use('/doctors', doctors);
router.use('/patients', patients);

module.exports = router;
