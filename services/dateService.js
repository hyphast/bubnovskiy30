class DateService {
  dateSearchRange(date) {
    const d = new Date(date);
    const start = +new Date(d.getFullYear(), d.getMonth(), d.getDate());
    console.log('start: ', start, new Date(start));

    const end = +new Date(d.getFullYear(), d.getMonth(), d.getDate() + 1);
    console.log('end1: ', end, new Date(end));

    return {start, end};
  }

}

module.exports = new DateService();