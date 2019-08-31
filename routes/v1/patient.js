var express = require('express');
var router = express.Router();
var patientController = require('../../controller/people/patientController');

router.get('/',patientController.findAllPatients);

router.get(':id', patientController.findPatientById);

router.post('/', patientController.createPatient);

router.delete('/:id', patientController.deletePatient);

router.put('/', patientController.updatePatient);

module.exports = router;