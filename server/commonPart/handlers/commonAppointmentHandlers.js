const TimeTemplate = require('../../models/TimeTemplate');

class CommonAppointmentHandlers {
  calcNumberAllPatients(appointments) {
    return appointments ?
      appointments.reduce((acc, cur) => cur?.patients?.length ? acc + cur.patients.length : acc + 0, 0) : null;
  }

  async initAppointments() {
    const time = await TimeTemplate.find().sort({time: 1});

    console.log('time', time);

    const appointments = time.map(i => ({
        time: i.time,
        patients: [],
        maxNumberPatients: 12,
      }
    ))

    return appointments;
  }
}

module.exports = new CommonAppointmentHandlers();