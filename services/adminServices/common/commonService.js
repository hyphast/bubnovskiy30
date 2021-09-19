const TimeTemplate = require('../../../models/TimeTemplate');
const Appointments = require('../../../models/Appointments');

class CommonService {
   withIdField(items) {
     console.log('items', typeof items);
    if (Array.isArray(items)) {
      const itemsList = items.map(i => ({
        id: i._id,
        ...i._doc,
      }))

      return itemsList
    }
    else {
      const itemsList = {id: items._id, ...items._doc}

      return itemsList;
    }
  }

  handleFilter(filter) {
    let match = {};
    if (filter) {
      Object.keys(filter).forEach(item => {
        if (item === 'id') return match['_id'] = filter[item]
        return match[item] = filter[item]
      })
    }

    return match;
  }

  handleSort(sort) {
    let sortBy = {};
    if(sort){
      sortBy[sort[0]] = sort[1] === 'DESC' ? -1 : 1;
    }
    console.log('sortBy', sortBy)
    return sortBy;
  }

  handlePagination(range) {
    let skip, lim;
    if (range) {
      skip = range[0];
      lim = range[1] - range[0] + 1;
    }

    return {skip, lim}
  }

  async initAppointments() {
    const time = await TimeTemplate.find();

    const appointments = time.map(i => ({
        time: i.time,
        patients: [],
        numberPatients: 0,
      }
    ))
    return appointments;
  }

  async createAppointment(date) {
    const appointments = await this.initAppointments();

    const appointment = await Appointments.create({date, appointments, numberAllPatients: 0});

    return appointment;
  }
}

module.exports = new CommonService();