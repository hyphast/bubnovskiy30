const {Schema, model} = require('mongoose');

const schema = new Schema({
  fullName: {type: String, required: true},
});

module.exports = model('Instructors', schema)

// db.instructors.insertMany([
//   {fullName: 'Иванов Иван Иванович'},
//   {fullName: 'Петров Петр Петрович'},
//   {fullName: 'Никитин Владимир Викторович'},
//   {fullName: 'Максимов Максим Максимович'},
//   {fullName: 'Володин Илья Кириллович'},
//   {fullName: 'Кириллов Андрей Степанович'},
//   {fullName: 'Глушков Роман Андеевич'},
//   {fullName: 'Демидов Сергей Геннадьевич'},
// ])