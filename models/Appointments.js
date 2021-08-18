const {Schema, model, Types} = require('mongoose');

const schema = new Schema({
  date: Date,
  createdBy: {type: Types.ObjectId, required: true},
  appointmentsTime: [{
    instructor: {type: Types.ObjectId, ref: 'Instructors'},
    time: {}
  }],
})

module.exports = model('Appointments', schema);