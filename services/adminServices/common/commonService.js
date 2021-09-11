const TimeTemplate = require('../../../models/TimeTemplate');
const { nanoid } = require('nanoid');

class CommonService {
  async getPortion(range, model) {
    const skip = range[0];
    const lim = range[1] - range[0] + 1;

    const items = await model.find()
      .limit(lim)
      .skip(skip);

    const countDocuments = await model.countDocuments({});

    const itemsList = items.map(i => ({
      id: i._id,
      ...i._doc,
    }))

    return {itemsList, countDocuments, amountOnePortion: lim};
  }

  async newAppointment(date) {
    const time = await TimeTemplate.find();

    const apps = time.map(i => ({
            time: i.time,
            patients: [],
            numberPatients: 0,
      }
    ))

    const app = {
      id: nanoid(10),
      date,
      appointments: apps
    }

    return app;
  }
}

module.exports = new CommonService();