const doctorModel = require('../../models/people/doctors');

module.exports = {
    createDoctor: async (doctorData) => {
        return await doctorModel.create(doctorData);
    },

    findAllDoctors: async () => {
        return await doctorModel.find();
    },

    findDoctor: async (id) => {
        return await doctorModel.findById(id);
    },
    deleteDoctor: async (id) => {
        return await doctorModel.findByIdAndDelete(id);
    },

    updateDoctor: async (data) => {
        const { id, name, email, phone_number, speciality, med_id, esignature } = data;
        
        return await doctorModel.findOneAndUpdate({ _id: id }, {
            $set: {
                name, email, phone_number, speciality, med_id, esignature
            }
        }, {
                new: true
            });
    }



}