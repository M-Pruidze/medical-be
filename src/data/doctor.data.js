const Doctor = require('../models/doctor.model');

// module.exports.allDoctors = async (user) => {
//   const userIdToString = user._id.toString();
//   const Doctors = await Doctor.find({userId: userIdToString});
//   return Doctors;
// };

module.exports.allDoctors = async () => {
    const Doctors = await Doctor.find({});
    return Doctors;
  };

module.exports.newDoctor = async (req, res) => {
  const doctor = new Doctor({
    doctorName: req.body.doctorName,
    specialty: req.body.specialty,
    // userId: req.body.userId,
  });
  const newDoctor = await doctor.save();
  return newDoctor;
};
