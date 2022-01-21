module.exports = class RecordsDto {
  upcomingRecords;
  finishedRecords;

  constructor(model) {
    this.upcomingRecords = model.upcomingRecords;
    this.finishedRecords = model.finishedRecords;
  }
}