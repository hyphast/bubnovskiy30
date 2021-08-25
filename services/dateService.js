class dateService {
  timestampOffsetUTC4(date) {
    const UTC4OffsetMs = 14400000;
    const UTC4OffsetHours = 4;

    const dateUTC4 = new Date(date);
    dateUTC4.setHours(dateUTC4.getHours() + UTC4OffsetHours);
    console.log(dateUTC4);

    const start = +new Date(dateUTC4.getFullYear(), dateUTC4.getMonth(), dateUTC4.getDate()) + UTC4OffsetMs;
    console.log('start: ', start, new Date(start));

    const end = +new Date(dateUTC4.getFullYear(), dateUTC4.getMonth(), dateUTC4.getDate() + 1) + UTC4OffsetMs;
    console.log('app', end, new Date(end));

    return {dateUTC4, start, end};
  }

}

module.exports = new dateService();