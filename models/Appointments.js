const {Schema, model, Types} = require('mongoose');

const patientsSchema = new Schema({
  patientId: {type: Types.ObjectId, ref: 'User'},
  //patientType: ...,
  patientName: {type: String},
});

const cellSchema = new Schema({
  time: { type : Date},
  patients: [patientsSchema],
  numberPatients: {type: Number},
  //free: {type: Number},
});

const schema = new Schema({
  date: { type : Date},
  appointments: [cellSchema]
})

module.exports = model('Appointments', schema, 'appointments');