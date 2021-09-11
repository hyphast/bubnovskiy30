const User = require('../../models/User');
const CommonService = require('./common/commonService');

class UsersService {
  async getUsers(range) {
    const {itemsList, countDocuments} = await CommonService.getPortion(range, User);
    console.log('itemsList', itemsList);

    return {usersList: itemsList, countDocuments}
  }

  async getOneUser(id) {
    const user = await User.findOne({_id: id});

    const userList = {id: user._id, ...user._doc}
    console.log(userList);

    return userList;
  }
}

module.exports = new UsersService();