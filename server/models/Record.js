const {Schema, model, Types} = require('mongoose');

const upcomingSchema = new Schema({
  appointmentId: {type: String},
  date: { type : Date},
  time: { type : Date},
  appointmentType: {type: String},
});

const finishedSchema = new Schema({
  appointmentId: {type: String},
  date: { type : Date},
  time: { type : Date},
  appointmentType: {type: String},
  status: {type: String},
});

const schema = new Schema({
  user: {type: Types.ObjectId, ref: 'User'},
  upcomingRecords: [upcomingSchema],
  finishedRecords: [finishedSchema],
})

module.exports = model('Records', schema);