const patientHelper = require('../../helper/people/pateintHelper');

module.exports = {
    createPatient: async (req,res,next) => {
        patientHelper.createPatient(req.body).then(result => {
            return res.status(200).json({
                message: 'Success',
                doctor: result
            })
        })
    },
    findAllPatients: async (req,res,next) => {
        patientHelper.findAllPatients().then(result => {
            return res.status(200).json(result)
        })
    },
    findPatientById: async (req,res,next) => {
        const { id } = req.params;
        patientHelper.findPatientById(id).then(result => {
            return res.json(200).json(result);
        })
    },
    deletePatient: async (req,res,next) => {
        const { id } = req.params;
        patientHelper.deletePatient(id).then(result => {
            return res.status(200).json(result);
        })
    },
    updatePatient: async (req,res,next) => {
        const data = req.body;
        patientHelper.updatePatient(data).then(result => {
            return res.status(200).json({
                message: 'Updated', patient: result
            })
        })
    }
}