const Appointment = require('../../models/Appointment');
const dateService = require('../../commonPart/services/dateService');
const commonAppointmentHandlers = require('../../commonPart/handlers/commonAppointmentHandlers');
const ApiError = require('../../exceptions/apiError');

class AppointmentService {
  async getAppointments(date) {
    const range = dateService.dateSearchRange(date);

    const appointments = await Appointment.findOne({date: {$gte: range.start, $lt: range.end}});

    if (!appointments) {
      const app = await commonAppointmentHandlers.initAppointments();
      console.log('app', app);
      const sortedApp = app.sort((a, b) => a.time - b.time);

      return {date, appointments: sortedApp}
    }

    return appointments;
  }

  async addPatient(date, time, appointmentType, userId) {
    const range = dateService.dateSearchRange(date);

    let app = await Appointment.findOne({date: {$gte: range.start, $lt: range.end}});

    console.log('app', app)
    if (!app) {
      const appointments = await commonAppointmentHandlers.initAppointments();
      app = await Appointment.create({date, appointments, numberAllPatients: 0});
    }

    const appointment = app.appointments.find(item => new Date(item.time).getTime() === new Date(time).getTime());

    appointment.patients = [...appointment.patients, {id: userId, appointmentType: appointmentType}];

    // app.numberAllPatients = app.appointment ?
    //   app.appointment.reduce((acc, cur) => cur?.patients?.length ? acc + cur.patients.length : acc + 0, 0) : null;

    app.numberAllPatients = commonAppointmentHandlers.calcNumberAllPatients(app.appointments);

    return app.save();
  }

  async deletePatient(date, time, appointmentType, userId) {
    const range = dateService.dateSearchRange(date);

    let app = await Appointment.findOne({date: {$gte: range.start, $lt: range.end}});

    if (!app) {
      throw ApiError.BadRequest('Ошибка сервера');
    }

    //const appointment = app.appointment.find(item => new Date(item.time).getTime() === new Date(time).getTime());
    const appointmentIndex = app.appointments.findIndex(item => new Date(item.time).getTime() === new Date(time).getTime());

    //console.log('id',appointment.patients[0].id)
    const index = app.appointments[appointmentIndex].patients.findIndex(item => String(item.id) === userId);

    console.log('index', index);
    //console.log('appointmentIndex', appointmentIndex);
    //console.log('app.appointment[appointmentIndex].patients[index]', app.appointment[appointmentIndex].patients[index]);

    app.appointments[appointmentIndex].patients.splice(index, 1);

    //appointment.patients.slice(index, 1);

    //app.numberAllPatients = app.numberAllPatients - 1;

    // app.numberAllPatients = app.appointment ?
    //   app.appointment.reduce((acc, cur) => cur?.patients?.length ? acc + cur.patients.length : acc + 0, 0) : null;

    app.numberAllPatients = commonAppointmentHandlers.calcNumberAllPatients(app.appointments);

    return app.save();
  }
}

module.exports = new AppointmentService();
