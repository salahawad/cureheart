const patientModel = require('../../models/people/patient');


module.exports = {
    createPatient: async (patientData) => {
        return await patientModel.create(patientData);
    },
    findAllPatients: async () => {
        return await patientModel.find();
    },
    findPatient: async (id) => {
        return await patientModel.findById(id);
    },
    deletePatient: async (id) => {
        return await patientModel.findByIdAndDelete(id);
    },
    updatePatient: async (data) => {
        const { name, email, phone_number, digital_id} = data;
        return await patientModel.findOneAndUpdate({_id: id}, {
            $set : {
                name, email, phone_number, digital_id
            }
        }, {
            new : true
        });
    }
}