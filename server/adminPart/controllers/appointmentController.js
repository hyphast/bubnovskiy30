const appointmentService = require('../services/appointment/appointmentService');
const recordService = require('../services/recordService');

class AppointmentController {
  async getAppointments(req, res, next) {
    try {
      const filter = req.query.filter ? JSON.parse(req.query.filter) : null;
      const range = req.query.range ? JSON.parse(req.query.range) : null;
      const sort = req.query.sort ? JSON.parse(req.query.sort) : null;

      const appointments = await appointmentService.getAppointments(filter, range, sort);

      return res.set('Content-Range', appointments.countDocuments.toString()).json(appointments.appointments);
    } catch (e) {
      next(e);
    }
  }

  async getOneAppointment(req, res, next) {
    try {
      const id = req.params.id;

      const appointment = await appointmentService.getOneAppointment(id);

      return res.json(appointment);
    } catch (e) {
      next(e);
    }
  }

  async updateOneAppointment(req, res, next) {
    try {
      const id = req.params.id;
      const {appointments, date} = req.body;

      await recordService.addRecord(id, appointments, date);
      const appointment = await appointmentService.updateOneAppointment(id, appointments, date);

      res.json(appointment);
    } catch (e) {
      next(e)
    }
  }
}

module.exports = new AppointmentController();