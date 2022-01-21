const Records = require('../../models/Records');
const RecordsDto = require("../../dtos/recordsDto");
const ApiError = require('../../exceptions/apiError');
const AppointmentService = require('./appointment/appointmentService');

class RecordService {
  async addRecord(date, time, appointmentType, userId) {
    let rec = await Records.findOne({user: userId});

    if (!rec) {
      rec = await Records.create({user: userId, upcomingRecords: [], finishedRecords: []});
    }

    rec.upcomingRecords = rec.upcomingRecords.concat({date, time, appointmentType});

    console.log(rec.upcomingRecords);

    return rec.save();
  }

  async getUpcomingRecords(id) {
    const rec = await Records.findOne({user: id});

    if (!rec) {
     return {records: {upcomingRecords: [], finishedRecords: []}};
    }

    const recordsDto = new RecordsDto(rec);

    return {records: recordsDto};
  }

  async deleteRecord(userId, id) {
    let rec = await Records.findOne({user: userId});

    if (!rec.upcomingRecords.length) {
      throw ApiError.BadRequest('Такой записи не существует');
    }

    const index = rec.upcomingRecords.findIndex(item => String(item._id) === id);

    if (index === -1) {
      throw ApiError.BadRequest('Такой записи не существует');
    }

    const {date, time, appointmentType} = rec.upcomingRecords[index]._doc;

    await AppointmentService.deletePatient(date, time, appointmentType, userId);

    rec.finishedRecords.push({...rec.upcomingRecords[index]._doc, status: 'Услуга отменена'});

    rec.upcomingRecords.splice(index, 1);

    return rec.save();
  }
}

module.exports = new RecordService();