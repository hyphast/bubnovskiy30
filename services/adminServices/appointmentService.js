const Appointments = require('../../models/Appointments');
const Instructor = require('../../models/Instructors');
const TimeTemplate = require('../../models/TimeTemplate');
const DateService = require('../DateService');
const CommonService = require('./common/commonService');
const ApiError = require('../../exceptions/apiError');
const User = require('../../models/User');

class AppointmentService {
  async createAppointment(date, appointments) {
    const range = DateService.dateSearchRange(date);

    const isExist = await Appointments.find({date: {$gte: range.start, $lt: range.end}});

    if(!!isExist.length) {
      throw ApiError.BadRequest('В этот день уже есть запись');
    }

    const appointment = await Appointments.create({date, appointments});

    return appointment;
  }

  async getInstructors() {
    const instructors = await Instructor.find();

    return instructors;
  }

  async getAppointmentsTime() {
    const time = await TimeTemplate.find();

    return time;
  }

  async getAppointments(range) {
    const {itemsList, _, amountOnePortion} = await CommonService.getPortion(range, Appointments);

    const dateOffset = range[0];

    const date = new Date();
    date.setDate(date.getDate() + dateOffset);

    let appointmentsList = [];
    for (let i = 0; i < amountOnePortion; i++) {
      const app = itemsList.find(item => date.getTime() === new Date(item.date).getTime());

      if (!app) {
        const newApp = await CommonService.newAppointment(date.toISOString());
        appointmentsList.push(newApp);
      } else {
        appointmentsList.push(app);
      }
      date.setDate(date.getDate() + 1);
    }

    const countDocuments = 90;

    return {appointmentsList, countDocuments}
  }
}

module.exports = new AppointmentService();