const ProfileService = require('../../services/clientServices/profileService');

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
      const profile = await ProfileService.savePhoto(id, photoUrl);

      return res.json({message: 'Фото было обновлено'});
    } catch (e) {
      next(e);
    }
  }
  async editProfileInfo(req, res, next) {
    try {
      const {id} = req.user;
      const {firstName, lastName, patronymic, gender, phoneNumber} = req.body;
      const profile = await ProfileService.editProfileInfo(id, firstName, lastName, patronymic, gender, phoneNumber);

      return res.json({message: 'Профиль был изменен'});
    } catch (e) {
      next(e);
    }
  }
}

module.exports = new ProfileController();