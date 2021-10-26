const mongoose = require('mongoose');
const {Schema} = mongoose;

const visitSchema = new Schema({
    username: {
        type: String,
        required: true
      },
    doctorId: {
        type: String,
        required: true
      },
    date: {
        type: Date,
        required: true
      },
    complaints: {
        type: String,
        required: true
      },
    userId: {
        type: String,
        required: true,
      },
});

visitSchema.set('timestamps', true);
const Visit = mongoose.model('visits', visitSchema);

module.exports = Visit;
