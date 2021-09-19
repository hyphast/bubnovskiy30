const Appointments = require('../../../models/Appointments');
const Instructor = require('../../../models/Instructors');
const TimeTemplate = require('../../../models/TimeTemplate');
const DateService = require('../../dateService');
const ApiError = require('../../../exceptions/apiError');
const User = require('../../../models/User');
const AppoinmentHelpers = require('./appointmentHelpers');
const CommonService = require('../common/commonService');

class AppointmentService {
  // async createAppointment(date, appointments) {
  //   const range = DateService.dateSearchRange(date);
  //
  //   const isExist = await Appointments.find({date: {$gte: range.start, $lt: range.end}});
  //
  //   if(!!isExist.length) {
  //     throw ApiError.BadRequest('В этот день уже есть запись');
  //   }
  //
  //   const appointment = await Appointments.create({date, appointments});
  //
  //   return appointment;
  // }

  // async getInstructors() {
  //   const instructors = await Instructor.find();
  //
  //   return instructors;
  // }

  async getAppointmentsTime() {
    const time = await TimeTemplate.find();

    return time;
  }

  async getAppointments(filter, range, sort) {
    console.time('test');
    const {start, end} = await AppoinmentHelpers.handlePagination(range);

    const sortBy = CommonService.handleSort(sort);

    const appointments = await Appointments.find({date: {$gte: start, $lt: end}}).sort(sortBy);

    const apps = CommonService.withIdField(appointments);

    const countDocuments = 180; // 6 month

    console.timeEnd('test');
    return {appointments: apps, countDocuments}
  }

  async getOneAppointment(id) {
    const appointment = await Appointments.findOne({_id: id});

    const appointmentWithId = {id: appointment._id, ...appointment._doc}

    return appointmentWithId;
  }
}

module.exports = new AppointmentService();