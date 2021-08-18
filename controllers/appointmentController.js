const AppointmentService = require('../services/appointmentService');

class AppointmentController {
  async createAppointment(req, res, next) {
    try {
      const {date, appointments} = req.body; // appointment is array of objects [{fullname: ref: 'Insctrucotrs', time:{...}, ...}]
      const {user} = req.user; //todo user or admin?

      const data = await AppointmentService.createAppointment(date, user.id, appointments);

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
}

module.exports = new AppointmentController();