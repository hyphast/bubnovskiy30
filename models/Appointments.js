const {Schema, model, Types} = require('mongoose');

const timeSchema = new Schema({
  time: { type : Date},
  free: { type : Number},
});

const cellSchema = new Schema({
  instructorId: {type: Types.ObjectId, ref: 'Instructors'},
  instructorName: {type: String},
  times: [timeSchema],
});

const schema = new Schema({
  date: { type : Date},
  // createdBy: {type: Types.ObjectId, required: true},
  appointments: [cellSchema]
})

module.exports = model('Appointments', schema, 'appointments');