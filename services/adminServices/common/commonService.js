const TimeTemplate = require('../../../models/TimeTemplate');
const { nanoid } = require('nanoid');
const Appointments = require('../../../models/Appointments');

class CommonService {
  async getPortion(range, model) {
    const skip = range[0];
    const lim = range[1] - range[0] + 1;

    const items = await model.find()
      .limit(lim)
      .skip(skip);

    const countDocuments = await model.countDocuments({});

    const itemsList = items.map(i => ({
      id: i._id,
      ...i._doc,
    }))

    return {itemsList, countDocuments, amountOnePortion: lim};
  }

  async getAppointmentTimes() {
    const time = await TimeTemplate.find();

    const appointments = time.map(i => ({
        time: i.time,
        patients: [],
        numberPatients: 0,
      }
    ))
    return appointments;
  }

  async createAppointment(date) {
    const appointments = await this.getAppointmentTimes();

    const appointment = await Appointments.create({date, appointments});

    return appointment;
  }

  async newAppointment(date) {
    const appointments = await this.getAppointmentTimes();

    const app = {
      id: nanoid(10),
      date,
      appointments,
      numberAllPatients: 0,
    }

    return app;
  }
}

module.exports = new CommonService();