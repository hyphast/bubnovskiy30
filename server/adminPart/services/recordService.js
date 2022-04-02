const Appointment = require('../../models/Appointment');
const recordService = require('../../clientPart/services/recordService');
const Record = require('../../models/Record');

class RecordService {
  async addRecord(id, newAppointments, date) {
    let curAppointments = await Appointment.findOne({_id: id});
    curAppointments = curAppointments.appointments;

    for (let i = 0; i < newAppointments.length; i++) {
      const sameAppointment = curAppointments.find(item => item.time.getTime() === new Date(newAppointments[i].time).getTime())

      for (let j = 0; j < newAppointments[i].patients.length; j++) {
        let patient;
        if (sameAppointment) {
          patient = sameAppointment.patients.filter(item => String(item.userId) === newAppointments[i].patients[j].userId);
          console.log('patient1', patient);
        } else {
          patient = [];
          console.log('patient2', patient);
        }

        if (!patient.length) {
          await recordService.addRecord(date, newAppointments[i].time,
            newAppointments[i].patients[j].appointmentType, newAppointments[i].patients[j].userId);
        }
      }
    }

    // for (let i = 0; i < curAppointments.length; i++) {
    //   const sameAppointment = newAppointments.find(item => new Date(item.time).getTime() === new Date(curAppointments[i].time).getTime())
    //
    //   for (let j = 0; j < curAppointments[i].patients.length; j++) {
    //     let patient;
    //     if (sameAppointment) {
    //       patient = sameAppointment.patients.filter(item => String(item.userId) === curAppointments[i].patients[j].userId);
    //     } else {
    //       patient = [];
    //     }
    //
    //     if (!patient.length) {
    //       //await recordService.addRecord(date, curAppointments[i].time,
    //         //curAppointments[i].patients[j].appointmentType, curAppointments[i].patients[j].id);
    //
    //       let rec = await Record.findOne({user: curAppointments[i].patients[j].userId});
    //
    //       //console.log('rec upcoming:', rec.upcomingRecords)
    //
    //       rec.upcomingRecords = rec.upcomingRecords.filter(item => item.appointmentId !== curAppointments[i].patients[j].appointmentId);
    //
    //       console.log('patient.appointmentId', patient);
    //       //console.log('rec upcoming 2:', rec.upcomingRecords)
    //
    //       //console.log(rec.upcomingRecords)
    //
    //       return rec.save();
    //     }
    //   }
    // }
  }
}

module.exports = new RecordService();