const recordsService = require('../services/recordService');

class RecordController {
  async getUpcomingRecords(req, res, next) {
    try {
      const userId = req.user.id;
      const records = await recordsService.getUpcomingRecords(userId);

      return res.json(records);
    } catch (e) {
      next(e);
    }
  }
  async deleteRecord(req, res, next) {
    try {
      const {id} = req.query;
      const userId = req.user.id;
      await recordsService.deleteRecord(userId, id);

      return res.json({message: 'Запись была удалена и перемещена в архив', type: 'warning', redirect: '/records'});
    } catch (e) {
      next(e);
    }
  }
}

module.exports = new RecordController();