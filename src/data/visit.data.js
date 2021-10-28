const Visit = require('../models/visit.model');

module.exports.allVisits = async (user) => {
  const userIdToString = user._id.toString();
  const Visits = await Visit.find({userId: userIdToString});
  return Visits;
};

module.exports.newVisit = async (req, res) => {
  const visit = new Visit({
    username: req.body.username,
    doctorId: req.body.doctorId,
    date: req.body.date,
    complaints: req.body.complaints,
    userId: req.body.userId,
  });
  console.log(`req.body-new visit`, req.body)
  const newVisit = await visit.save();
  return newVisit;
};

module.exports.updatedVisit = async (req, res) => {
  const updatedVisit = await Visit.findOneAndUpdate({_id: req.params.id},{
    username: req.body.username,
    doctorId: req.body.doctorId,
    date: req.body.date,
    complaints: req.body.complaints,
  }, {new: true});
  return updatedVisit;
};

module.exports.deletedVisit = async (req, res) => {
  const deletedVisit = await Visit.findByIdAndRemove({_id: req.params.id});
  return deletedVisit;
};

// module.exports.deleteAllVisits = async () => {
//   const deleteAllVisits = await Visit.deleteMany({});
//   return deleteAllVisits;
// };
