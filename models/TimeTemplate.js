const {Schema, model} = require('mongoose');

const schema = new Schema({
  time: Date,
});

module.exports = model('TimeTemplate', schema, 'timetemplate');