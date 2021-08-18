const Appointments = require('../models/Appointments');
const Instructors = require('../models/Instructors');
const ApiError = require('../exceptions/apiError');

class AppointmentService {
  async createAppointment(date, id, appointments) {
    const isExist = await Appointments.findOne({date});

    if(isExist) {
      throw ApiError.BadRequest('В этот день уже есть запись');
    }

    const appointment = await Appointments.create({date, id, appointments});

    return appointment;
  }

  async getInstructors() {
    const instructors = await Instructors.find();

    return instructors;
  }
}

module.exports = new AppointmentService();