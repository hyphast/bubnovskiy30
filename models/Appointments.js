const {Schema, model, Types} = require('mongoose');

const instructorsSchema = new Schema({
  instructorId: {type: Types.ObjectId, ref: 'Instructors'},
  instructorName: {type: String},
});

const patientsSchema = new Schema({
  patientId: {type: Types.ObjectId, ref: 'User'},
  patientName: {type: String},
});

const cellSchema = new Schema({
  time: { type : Date},
  instructors: [instructorsSchema],
  patients: [patientsSchema],
  numberPatients: {type: Number},
  free: {type: Number},
});

const schema = new Schema({
  date: { type : Date},
  // createdBy: {type: Types.ObjectId, required: true},
  appointments: [cellSchema]
})

module.exports = model('Appointments', schema, 'appointments');