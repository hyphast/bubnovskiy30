class dateService {
  dateSearchRange(date) {
    // const UTC4OffsetMs = 14400000;
    // const UTC4OffsetHours = 4;

    // date.setMinutes(date.getMinutes() + date.getTimezoneOffset());
    //
    // const dateUTC4 = new Date(date);
    // dateUTC4.setHours(dateUTC4.getHours() + UTC4OffsetHours);
    // console.log(dateUTC4);

    // console.log('date: ', date);
    const d = new Date(date);
    const start = +new Date(d.getFullYear(), d.getMonth(), d.getDate());
    console.log('start: ', start, new Date(start));

    const end = +new Date(d.getFullYear(), d.getMonth(), d.getDate() + 1);
    console.log('end1: ', end, new Date(end));

    return {start, end};
  }

}

module.exports = new dateService();