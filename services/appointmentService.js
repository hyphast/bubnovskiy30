const Appointments = require('../models/Appointments');
const Instructor = require('../models/Instructors');
const TimeTemplate = require('../models/TimeTemplate');
const ApiError = require('../exceptions/apiError');

class AppointmentService {
  async createAppointment(date, appointments) {

    const isExist = await Appointments.findOne({date});

    if(isExist) {
      throw ApiError.BadRequest('В этот день уже есть запись');
    }

    const appointment = await Appointments.create({date: date, appointmentsTime: appointments});

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
    const UTC4OffsetMs = 14400000;
    const UTC4OffsetHours = 4;

    const dateUTC4 = new Date(date);
    dateUTC4.setHours(dateUTC4.getHours() + UTC4OffsetHours);
    console.log(dateUTC4);

    const start = +new Date(dateUTC4.getFullYear(), dateUTC4.getMonth(), dateUTC4.getDate()) + UTC4OffsetMs;
    console.log('start: ', start, new Date(start));
    const end = +new Date(dateUTC4.getFullYear(), dateUTC4.getMonth(), dateUTC4.getDate() + 1) + UTC4OffsetMs;
    console.log('end', end, new Date(end));

    const appointments = await Appointments.find({date: {$gte: start, $lt: end}});
    console.log('app', appointments);

    // aggregate.lookup({ from: 'users', localField: 'userId', foreignField: '_id', as: 'users' });

    return appointments;
  }
}

module.exports = new AppointmentService();