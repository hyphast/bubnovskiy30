const TimeTemplate = require('../../../models/TimeTemplate');
const Appointments = require('../../../models/Appointments');

class AppointmentHelpers {
  async initAppointmentsTime() {
    const time = await TimeTemplate.find();

    const appointment = time.map(i => ({
        time: i.time,
        patients: [],
        numberPatients: 0,
      }
    ))
    return appointment;
  }

  async newAppointment(date) {
    const app = await this.initAppointmentsTime();

    const appointment = {
      date,
      app,
      numberAllPatients: 0,
    }


    return appointment;
  }

  async createAppointment(date) {
    const appointment = this.newAppointment(date);

    return appointment;
  }
}

module.exports = new AppointmentHelpers();