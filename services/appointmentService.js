const Appointments = require('../models/Appointments');
const Instructor = require('../models/Instructors');
const TimeTemplate = require('../models/TimeTemplate');
const dateService = require('./dateService');
const ApiError = require('../exceptions/apiError');

class AppointmentService {
  async createAppointment(date, appointments) {
    const range = dateService.dateSearchRange(date);

    const isExist = await Appointments.find({date: {$gte: range.start, $lt: range.end}});

    if(!!isExist.length) {
      throw ApiError.BadRequest('В этот день уже есть запись');
    }

    const appointment = await Appointments.create({date: date, appointments: appointments});

    return appointment;
  }

  async getInstructors() {
    const instructors = await Instructor.find();

    return instructors;
  }

  async getAppointmentsTime() {
    const time = await TimeTemplate.find();

    return time;
  }

  async getAppointments(date) {
    const range = dateService.dateSearchRange(date);

    const appointments = await Appointments.find({date: {$gte: range.start, $lt: range.end}});
    console.log('app', appointments);

    appointments.map(item => console.log(item.date))
    return appointments;
  }

  async addPatient(date, time, userId, firstName, lastName) {
    const range = dateService.dateSearchRange(date);

    const app = await Appointments.findOne({date: {$gte: range.start, $lt: range.end}});
    console.log('app', app);

    const appointment = app.appointments.find(item => item.time === time);

    const userName = `${firstName} ${lastName}`;
    appointment.patients = [...appointment.patients, {patientId: userId, patientName: userName}];

    return appointment.save();
  }
}

module.exports = new AppointmentService();