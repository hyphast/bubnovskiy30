const AppointmentService = require('../../services/clientServices/appointmentService');
const RecordsService = require('../../services/clientServices/recordsService');

class AppointmentController {
  async getAppointments(req, res, next) {
    try {
      const {date} = req.query;
      const parseDate = parseInt(date, 10);

      const appointments = await AppointmentService.getAppointments(parseDate);

      return res.json(appointments);
    } catch (e) {
      next(e);
    }
  }

  async addPatient(req, res, next) {
    try {
      const {date, time, appointmentType, userId} = req.body;

      const appointments = await AppointmentService.addPatient(date, time, appointmentType, userId);

      const records = await RecordsService.addRecord(date, time, appointmentType, userId);

      console.log(appointments);
      return res.status(201).json({message: 'Запись была выполнена'});
    } catch (e) {
      next(e);
    }
  }
}

module.exports = new AppointmentController();