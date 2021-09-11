const Appointments = require('../../models/Appointments');
const TimeTemplate = require('../../models/TimeTemplate');
const DateService = require('../DateService');

class AppointmentService {
  async getAppointments(date) {
    const range = DateService.dateSearchRange(date);

    const appointments = await Appointments.findOne({date: {$gte: range.start, $lt: range.end}});

    if (!appointments) {
      const time = await TimeTemplate.find();
      const app = time.map(t => ({time: t.time, patients: [], numberPatients: 0}));
      const sortedApp = app.sort((a, b) => a.time - b.time);

      return {date, appointments: sortedApp}
    }

    return appointments;
  }

  async addPatient(date, time, userId, firstName, lastName, free) {
    const range = DateService.dateSearchRange(date);

    console.log('free', free);
    const app = await Appointments.findOne({date: {$gte: range.start, $lt: range.end}});

    const appointment = app.appointments.find(item => +new Date(item.time) === +new Date(time));

    const userName = `${firstName} ${lastName}`;
    appointment.patients = [...appointment.patients, {patientId: userId, patientName: userName}];

    appointment.numberPatients = appointment.patients.length;
    appointment.free = appointment.free - free;

    return app.save();
  }
}

module.exports = new AppointmentService();