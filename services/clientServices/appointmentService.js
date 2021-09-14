const Appointments = require('../../models/Appointments');
const TimeTemplate = require('../../models/TimeTemplate');
const DateService = require('../DateService');
const CommonService = require('../adminServices/common/commonService');

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

  async addPatient(date, time, userId, firstName, lastName) {
    const range = DateService.dateSearchRange(date);
    // console.log('date', new Date(date))
    // const utcDate = DateService.dateToUtc(date);

    let app = await Appointments.findOne({date: {$gte: range.start, $lt: range.end}});
    // let app = await appointments.findOne({date: utcDate});

    console.log('app', app)
    if (!app) {
      app = await CommonService.createAppointment(date);
    }

    const appointment = app.appointments.find(item => new Date(item.time).getTime() === new Date(time).getTime());

    const userName = `${firstName} ${lastName}`;
    appointment.patients = [...appointment.patients, {patientId: userId, patientName: userName}];

    appointment.numberPatients = appointment.patients.length;

    return app.save();
  }
}

module.exports = new AppointmentService();