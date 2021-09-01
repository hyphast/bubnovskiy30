const {Schema, model} = require('mongoose');

const schema = new Schema({
  time: Date,
  free: {type: Number},
});

module.exports = model('TimeTemplate', schema, 'timetemplate');