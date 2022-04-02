const Appointment = require('../../models/Appointment');
const dateService = require('../../commonPart/services/dateService');
const commonAppointmentHandlers = require('../../commonPart/handlers/commonAppointmentHandlers');
const ApiError = require('../../exceptions/apiError');
const { v4: uuidv4 } = require('uuid');

class AppointmentService {
  async getAppointments(date) {
    const range = dateService.dateSearchRange(date);

    const appointments = await Appointment.findOne({date: {$gte: range.start, $lt: range.end}});

    console.log('appointments', appointments)

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

    if (!app) {
      const appointments = await commonAppointmentHandlers.initAppointments();
      app = await Appointment.create({date, appointments, numberAllPatients: 0});
    }

    const appointment = app.appointments.find(item => new Date(item.time).getTime() === new Date(time).getTime());

    appointment.patients = [...appointment.patients, {appointmentId: uuidv4(), userId, appointmentType: appointmentType}];

    app.numberAllPatients = commonAppointmentHandlers.calcNumberAllPatients(app.appointments);

    console.log('app: ', app)

    return app.save();
  }

  async deletePatient(date, time, appointmentType, userId) {
    const range = dateService.dateSearchRange(date);

    let app = await Appointment.findOne({date: {$gte: range.start, $lt: range.end}});

    console.log('app', app)

    if (!app) {
      throw ApiError.BadRequest('Ошибка сервера');
    }

    const appointmentIndex = app.appointments.findIndex(item => new Date(item.time).getTime() === new Date(time).getTime());

    const patientIndex = app.appointments[appointmentIndex].patients.findIndex(item => String(item.id) === userId);

    app.appointments[appointmentIndex].patients.splice(patientIndex, 1);

    app.numberAllPatients = commonAppointmentHandlers.calcNumberAllPatients(app.appointments);

    return app.save();
  }
}

module.exports = new AppointmentService();
