const Appointment = require('../../../models/Appointment');
const dateService = require('../../../commonPart/services/dateService');
const commonAppointmentHandlers = require('../../../commonPart/handlers/commonAppointmentHandlers');

class AppointmentHandlers {
  async handlePagination(range) {
    const date = dateService.dateToUtc(new Date());
    const dateOffset = range[0];
    const amountOnePortion = range[1] - range[0] + 1;
    const startDate = date.setDate(date.getDate() + dateOffset);

    const {start, end} = dateService.dateSearchRange(startDate, amountOnePortion);

    const itemsList = await Appointment.find({date: {$gte: start, $lt: end}});

    let appointmentsList = [];
    const curDate = new Date(startDate);
    for (let i = 0; i < amountOnePortion; i++) {
      const range = dateService.dateSearchRange(curDate.getTime());
      const app = itemsList.find(item => {
        const itemDate = new Date(item.date).getTime();
        return itemDate >= range.start && itemDate <= range.end
      })

      if (!app) {
        const app = await commonAppointmentHandlers.initAppointments();

        const newApp = {date: curDate.toISOString(), appointments: app, numberAllPatients: 0}

        appointmentsList.push(newApp);
      }

      curDate.setDate(curDate.getDate() + 1);
    }

    await Appointment.insertMany(appointmentsList);

    return {start, end}
  }
}

module.exports = new AppointmentHandlers();