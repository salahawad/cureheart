var express = require('express');
var router = express.Router();

var doctorController = require('../../controller/people/doctorController')
var myClass = require('../../models/people/class');

// Get all doctors
router.get('/', doctorController.findAllDoctors);

// Get a doctor by id
router.get('/:id', doctorController.findDoctorById)

// Add a doctor
router.post('/', doctorController.createDoctor);

// delete doctor
router.delete('/:id', doctorController.deleteDoctor);

// update a doctor
router.put('/', doctorController.updateDoctor);

router.put('/test',(req,res) => {
    myClass.test();
})

module.exports = router;
