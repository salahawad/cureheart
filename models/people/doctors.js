const mongoose = require('mongoose');

const Doctors = mongoose.Schema({
    name: String,
    email: String,
    phone_number: Number,
    speciality: { type: mongoose.Schema.Types.ObjectId, ref: 'speciality' },
    med_id: String,
    esignature: String,
    session_time:Number,
    availability : [{        
        dateallocated:[Date],
        starttime:Date ,
        endtime:Date,
        recur: Boolean,
        frequency:String, //WMY
        center:String
      }],
      address:{street:String, region:String}
}, {
    timestamps: true
});

module.exports = mongoose.model('doctor', Doctors);