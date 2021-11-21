const {Schema, model, Types} = require('mongoose');

const patientsSchema = new Schema({
  id: {type: Types.ObjectId, ref: 'User'},
  appointmentType: {type: String},
});

const cellSchema = new Schema({
  time: { type : Date},
  patients: [patientsSchema],
  maxNumberPatients: {type: Number},
});

const schema = new Schema({
  date: { type : Date},
  appointments: [cellSchema],
  numberAllPatients: {type: Number},
})

module.exports = model('appointments', schema, 'appointments');