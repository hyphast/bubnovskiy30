const Appointment = require('../../../models/Appointment');
const appointmentHandlers = require('./AppointmentHandlers');
const commonHandlers = require('../commonHandlers');
const commonAppointmentHandlers = require('../../../commonPart/handlers/commonAppointmentHandlers');

class AppointmentService {
  async getAppointments(filter, range, sort) {
    console.time('test');
    const {start, end} = await appointmentHandlers.handlePagination(range);

    const sortBy = commonHandlers.handleSort(sort);

    const appointments = await Appointment.find({date: {$gte: start, $lt: end}}).sort(sortBy);

    const apps = commonHandlers.withIdField(appointments);

    const countDocuments = 180; // 6 month

    console.timeEnd('test');
    return {appointments: apps, countDocuments}
  }

  async getOneAppointment(id) {
    const appointment = await Appointment.findOne({_id: id});

    let appointmentWithId = {id: appointment._id, ...appointment._doc}

    // for (let obj of appointmentWithId) {
    //   for(let key in obj.appointment) {
    //     id: appointment._id,
    //   }
    // }

    appointmentWithId.appointments = appointmentWithId.appointments.map(app => ({id: app._id, ...app._doc})); //todo refactor

    appointmentWithId.appointments.forEach(app => {
      app.treatment = app.patients.filter( item => item.appointmentType === 'Лечебные занятия');
      app.physicalTraining = app.patients.filter( item => item.appointmentType === 'Физкультурно-оздоровительные занятия');
    });

    //console.log('appointmentWithId', appointmentWithId.treatment);

    return appointmentWithId;
  }

  async updateOneAppointment(id, appointments, date) {
    // appointment = appointment.map(item => item.patients.map(i => i.numberPatients + 1))

    const numberAllPatients = commonAppointmentHandlers.calcNumberAllPatients(appointments); //TODO переделать!
    console.log('numberAllPatients', numberAllPatients);
    const appointment = await Appointment.updateOne({_id: id}, {appointments: appointments, numberAllPatients});

    console.log('appointment', appointment)

    appointment['date'] = date; //todo refactor
    appointment['id'] = id; //todo refactor

    return appointment;
  }
}

module.exports = new AppointmentService();