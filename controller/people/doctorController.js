const doctorHelper = require('../../helper/people/doctorHelper');

module.exports = {
    createDoctor: async (req, res, next) => {
        doctorHelper.createDoctor(req.body).then(result => {
            return res.status(200).json({
                message: 'Success',
                doctor: result
            });
        });
    },

    findAllDoctors: async (req, res, next) => {
        doctorHelper.findAllDoctors().then(result => {
            return res.status(200).json(result);
        })
    },

    findDoctorById: async (req, res, next) => {

        const { id } = req.params;

        doctorHelper.findDoctor(id).then(result => {
            return res.status(200).json(result);
        })
    },

    deleteDoctor: async (req, res, next) => {
        const { id } = req.params;

        doctorHelper.deleteDoctor(id).then(result => {
            return res.status(200).json(result)
        })
    },

    updateDoctor: async (req, res, next) => {
        const data = req.body;

        // name, email, phone_number, speciality, med_id, esignature

        doctorHelper.updateDoctor(data).then(result => {
            return res.status(200).json({
                message: 'Updated', doctor: result
            });
        })
    }
}