const Appointments = require('../../../models/Appointments');
const Instructor = require('../../../models/Instructors');
const TimeTemplate = require('../../../models/TimeTemplate');
const DateService = require('../../dateService');
const ApiError = require('../../../exceptions/apiError');
const User = require('../../../models/User');
const AppoinmentHelpers = require('./appointmentHelpers');

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

  async getAppointments(range) {
    console.time('test');
    const date = DateService.dateToUtc(new Date());
    const dateOffset = range[0];
    const amountOnePortion = range[1] - range[0] + 1;
    const startDate = date.setDate(date.getDate() + dateOffset);

    const {start, end} = DateService.dateSearchRange(startDate, amountOnePortion);

    const itemsList = await Appointments.find({date: {$gte: start, $lt: end}});

    let appointmentsList = [];
    const curDate = new Date(startDate);
    for (let i = 0; i < amountOnePortion; i++) {
      const range = DateService.dateSearchRange(curDate.getTime());
      const app = itemsList.find(item => {
        const itemDate = new Date(item.date).getTime();
        return itemDate >= range.start && itemDate <= range.end
      })

      if (!app) {
        const newApp = await AppoinmentHelpers.newAppointment(curDate.toISOString());
        appointmentsList.push(newApp);
      }

      curDate.setDate(curDate.getDate() + 1);
    }
    await Appointments.insertMany(appointmentsList);

    let appointments = await Appointments.find({date: {$gte: start, $lt: end}});
    appointments = appointments.map(item => ({id: item._id, ...item._doc}))

    const countDocuments = 180; // 6 month

    console.timeEnd('test');
    return {appointments, countDocuments}
  }
}

module.exports = new AppointmentService();