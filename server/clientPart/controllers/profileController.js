const ProfileService = require('../services/profileService');

class ProfileController {
  async getUserProfile(req, res, next) {
    try {
      const {id} = req.user;
      const profile = await ProfileService.getUserProfile(id);

      return res.json(profile);
    } catch (e) {
      next(e);
    }
  }
  async savePhoto(req, res, next) {
    try {
      const {id} = req.user;
      const {photoUrl} = req.body;
      await ProfileService.savePhoto(id, photoUrl);

      return res.json({message: 'Фото было обновлено', type: 'info', redirect: '/profile'});
    } catch (e) {
      next(e);
    }
  }
  async editProfileInfo(req, res, next) {
    try {
      const {id} = req.user;
      const {firstName, lastName, patronymic, gender, phoneNumber} = req.body;
      await ProfileService.editProfileInfo(id, firstName, lastName, patronymic, gender, phoneNumber);

      return res.json({message: 'Основная информация профиля была изменена', type: 'info', redirect: '/profile'});
    } catch (e) {
      next(e);
    }
  }
}

module.exports = new ProfileController();