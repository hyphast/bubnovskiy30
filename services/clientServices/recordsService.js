const ProfileDto = require('../../dtos/profileDto');
const DateService = require("../dateService");
const Appointments = require("../../models/Appointments");
const CommonService = require("../adminServices/common/commonService");
const Records = require('../../models/Records');
const RecordsDto = require("../../dtos/recordsDto");

class RecordsService {
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
}

module.exports = new RecordsService();