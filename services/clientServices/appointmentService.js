const Appointments = require('../../models/Appointments');
const TimeTemplate = require('../../models/TimeTemplate');
const DateService = require('../dateService');
const CommonService = require('../adminServices/common/commonService');
const ApiError = require('../../exceptions/apiError');

class AppointmentService {
  async getAppointments(date) {
    const range = DateService.dateSearchRange(date);

    const appointments = await Appointments.findOne({date: {$gte: range.start, $lt: range.end}});

    if (!appointments) {
      const app = await CommonService.initAppointments();
      console.log('app', app);
      const sortedApp = app.sort((a, b) => a.time - b.time);

      return {date, appointments: sortedApp}
    }

    return appointments;
  }

  async addPatient(date, time, appointmentType, userId) {
    const range = DateService.dateSearchRange(date);

    let app = await Appointments.findOne({date: {$gte: range.start, $lt: range.end}});

    console.log('app', app)
    if (!app) {
      app = await CommonService.createAppointment(date);
    }

    const appointment = app.appointments.find(item => new Date(item.time).getTime() === new Date(time).getTime());

    appointment.patients = [...appointment.patients, {id: userId, appointmentType: appointmentType}];

    app.numberAllPatients = app.numberAllPatients + 1;

    return app.save();
  }

  async deletePatient(date, time, appointmentType, userId) {
    const range = DateService.dateSearchRange(date);

    let app = await Appointments.findOne({date: {$gte: range.start, $lt: range.end}});

    if (!app) {
      throw ApiError.BadRequest('Ошибка сервера');
    }

    //const appointment = app.appointments.find(item => new Date(item.time).getTime() === new Date(time).getTime());
    const appointmentIndex = app.appointments.findIndex(item => new Date(item.time).getTime() === new Date(time).getTime());

    //console.log('id',appointment.patients[0].id)
    const index = app.appointments[appointmentIndex].patients.findIndex(item => String(item.id) === userId);

    console.log('index', index);
    //console.log('appointmentIndex', appointmentIndex);
    //console.log('app.appointments[appointmentIndex].patients[index]', app.appointments[appointmentIndex].patients[index]);

    app.appointments[appointmentIndex].patients.splice(index, 1);

    //appointment.patients.slice(index, 1);

    app.numberAllPatients = app.numberAllPatients - 1;

    return app.save();
  }
}

module.exports = new AppointmentService();
