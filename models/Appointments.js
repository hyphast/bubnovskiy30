const {Schema, model, Types} = require('mongoose');

const timeSchema = new Schema({
  time: { type : Date},
  free: { type : Number},
});

const cellSchema = new Schema({
  instructor: {type: Types.ObjectId, ref: 'Instructors'},
  times: [timeSchema],
});

const schema = new Schema({
  date: { type : Date},
  // createdBy: {type: Types.ObjectId, required: true},
  appointmentsTime: [cellSchema]
})

module.exports = model('Appointments', schema, 'appointments');