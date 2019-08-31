const specialityModel = require('../../models/category/specialty');

module.exports = {
    createSpeciality: async (doctorData) => {
        return await specialityModel.create(doctorData);
    },

    findAllSpecialities: async () => {
        return await specialityModel.find();
    },

    findSpeciality: async (id) => {
        return await specialityModel.findById(id);
    },
    deleteSpeciality: async (id) => {
        return await specialityModel.findByIdAndDelete(id);
    },

    updateSpeciality: async (data) => {
        const { id, name } = data;
        
        return await specialityModel.findOneAndUpdate({ _id: id }, {
            $set: {
                name
            }
        }, {
                new: true
            });
    }



}