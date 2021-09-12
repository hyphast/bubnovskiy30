class DateService {
  dateSearchRange(date) {
    const d = new Date(date);
    const start = +new Date(d.getFullYear(), d.getMonth(), d.getDate());
    console.log('start: ', start, new Date(start));

    const end = +new Date(d.getFullYear(), d.getMonth(), d.getDate() + 1);
    console.log('end1: ', end, new Date(end));

    return {start, end};
  }

  // dateToUtc(date) {
  //   const d = new Date(date);
  //   console.log('d', d)
  //   const utc =  new Date(Date.UTC(d.getUTCFullYear(), d.getUTCMonth(), d.getUTCDate(), d.getUTCHours(), d.getUTCMinutes(), 0));
  //   console.log('utc', utc);
  //   console.log('utc.toUTCString()', utc.toUTCString());
  //
  //   return utc;
  // }
}

module.exports = new DateService();