const RecordsService = require('../../services/clientServices/recordsService');

class RecordsController {
  async getUpcomingRecords(req, res, next) {
    try {
      const {id} = req.query;
      const records = await RecordsService.getUpcomingRecords(id);

      return res.json(records);
    } catch (e) {
      next(e);
    }
  }
}

module.exports = new RecordsController();