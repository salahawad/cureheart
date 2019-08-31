const specialityHelper = require('../../helper/category/speciality');

module.exports = {
    getAllSpeciality: async (req, res, next) => {
        specialityHelper.findAllSpecialities().then(result => {
            return res.status(200).json(result);
        })
    },

    getSpecialityById: async (req, res, next) => {
        const { id } = req.body;

        specialityHelper.findSpeciality(id).then(result => {
            return res.status(200).json(result);
        })

    },
    addSpeciality:async (req, res, next) => {
        specialityHelper.createSpeciality(req.body).then(result => {
            return res.status(200).json(result);
        })
    },

    modifySpeciality: async (req, res, next) => {
        specialityHelper.modifySpeciality(req.body).then(result => {
            return res.status(200).json(result);
        })
    },

    removeSpeciality: async (req, res, next) => {
        const { id } = req.body;

        specialityHelper.deleteSpeciality(id).then(result => {
            return res.status(200).json(result);
        })
    }

}