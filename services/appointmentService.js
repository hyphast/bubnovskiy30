const Appointments = require('../models/Appointments');
const Instructor = require('../models/Instructors');
const TimeTemplate = require('../models/TimeTemplate');
const dateService = require('./dateService');
const ApiError = require('../exceptions/apiError');

class AppointmentService {
  async createAppointment(date, appointments) {
    const range = dateService.timestampOffsetUTC4(date);

    const isExist = await Appointments.find({date: {$gte: range.start, $lt: range.end}});

    if(!!isExist.length) {
      throw ApiError.BadRequest('В этот день уже есть запись');
    }

    const appointment = await Appointments.create({date: range.dateUTC4, appointments: appointments});

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
    const range = dateService.timestampOffsetUTC4(date);

    const appointments = await Appointments.find({date: {$gte: range.start, $lt: range.end}});
    console.log('app', appointments);

    appointments.map(item => console.log(item.date));
    // const UTC4OffsetMs = 14400000;
    // appointments.map(item => +new Date(item.date) - UTC4OffsetMs);

    // aggregate.lookup({ from: 'users', localField: 'userId', foreignField: '_id', as: 'users' });

    return appointments;
  }
}

module.exports = new AppointmentService();