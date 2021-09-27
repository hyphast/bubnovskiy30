const AppointmentService = require('../../services/appointmentService');

class AppointmentController {
  async createAppointment(req, res, next) {
    try {
      const {date, appointments} = req.body;
      // const {user} = req.user; //todo user or admin?
      console.log('new: ', new Date(date), new Date(appointments[0].time))

      const data = await AppointmentService.createAppointment(date, appointments);

      return res.status(201).json({message: 'Запись была добавлена'});
    } catch (e) {
      next(e);
    }
  }

  async getInstructors(req, res, next) {
    try {
      const instructors = await AppointmentService.getInstructors();

      return res.json(instructors);
    } catch (e) {
      next(e);
    }
  }

  async getAppointmentsTime(req, res, next) {
    try {
      const time = await AppointmentService.getAppointmentsTime();

      return res.json(time);
    } catch (e) {
      next(e);
    }
  }

  async getCreatedAppointments(req, res, next) {
    try {
      const appointments = await AppointmentService.getCreatedAppointments();

      return res.json(appointments);
    } catch (e) {
      next(e);
    }
  }
}

module.exports = new AppointmentController();