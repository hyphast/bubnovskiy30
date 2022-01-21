const Appointments = require('../../../models/Appointments');
const DateService = require('../../../commonPart/services/dateService');

class AppointmentHandlers {
  async handlePagination(range) {
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
        const newApp = await this.newAppointment(curDate.toISOString());
        appointmentsList.push(newApp);
      }

      curDate.setDate(curDate.getDate() + 1);
    }

    await Appointments.insertMany(appointmentsList);

    return {start, end}
  }
}

module.exports = new AppointmentHandlers();