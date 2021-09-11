const usersService = require('../../services/adminServices/usersService');

class UsersController {
  async getUsers(req, res, next) {
    try {
      let {range} = req.query;
      range = JSON.parse(range);

      const users = await usersService.getUsers(range);

      console.log()
      return res.set('Content-Range', users.countDocuments.toString()).json(users.usersList);
    } catch (e) {
      next(e);
    }
  }

  async getOneUser(req, res, next) {
    try {
      let id = req.params.id;

      const user = await usersService.getOneUser(id);

      return res.json(user);
    } catch (e) {
      next(e);
    }
  }
}

module.exports = new UsersController();