var express = require('express');
var router = express.Router();

var specialityController = require('../../controller/category/specialtyController');

router.post('/', specialityController.addSpeciality);

router.get('/', specialityController.getAllSpeciality);

router.get('/findSpeciality/:id', specialityController.getSpecialityById);

router.delete('/', specialityController.removeSpeciality);



module.exports = router;