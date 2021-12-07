const {Schema, model} = require('mongoose')

const schema = new Schema({
  photoUrl: {type: String, default: ''},
  firstName: {type: String, required: true},
  lastName: {type: String, required: true},
  patronymic: {type: String, required: true},
  email: {type: String, required: true, unique: true},
  password: {type: String, required: true},
  gender: {type: String, required: true},
  phoneNumber: {type: String, required: true},
  isActivated: {type: String, default: false},
  activationLink: {type: String},
})

module.exports = model('User', schema);