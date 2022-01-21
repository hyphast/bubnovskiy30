const AppointmentService = require('../services/appointment/appointmentService');

class AppointmentController {
  async getAppointments(req, res, next) {
    try {
      const filter = req.query.filter ? JSON.parse(req.query.filter) : null;
      const range = req.query.range ? JSON.parse(req.query.range) : null;
      const sort = req.query.sort ? JSON.parse(req.query.sort) : null;

      const appointments = await AppointmentService.getAppointments(filter, range, sort);

      return res.set('Content-Range', appointments.countDocuments.toString()).json(appointments.appointments);
    } catch (e) {
      next(e);
    }
  }

  async getOneAppointment(req, res, next) {
    try {
      const id = req.params.id;

      const appointment = await AppointmentService.getOneAppointment(id);

      return res.json(appointment);
    } catch (e) {
      next(e);
    }
  }

  async updateOneAppointment(req, res, next) {
    try {
      const id = req.params.id;
      const {appointments, date} = req.body;
      console.log('appointments', appointments)


      const appointment = await AppointmentService.updateOneAppointment(id, appointments, date);
      //await RecordsService.addRecord(date, time, appointmentType, userId);

      res.json(appointment);
    } catch (e) {
      next(e)
    }
  }
}

module.exports = new AppointmentController();