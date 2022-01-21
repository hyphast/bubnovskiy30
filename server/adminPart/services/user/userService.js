const User = require('../../../models/User');
const commonHandlers = require('../commonHandlers');

class UserService {
  async getOneUser(id) {
    const user = await User.findOne({_id: id});

    const userList = commonHandlers.withIdField(user)

    return userList;
  }

  async getUsers(filter, range, sort) {
    const match = commonHandlers.handleFilter(filter);
    const sortBy = commonHandlers.handleSort(sort);
    const {skip, lim} = commonHandlers.handlePagination(range);
    console.log('filter', filter)
    console.log('match', match);

    const users = await User.find(match).sort(sortBy).limit(lim).skip(skip);

    const countDocuments = await User.countDocuments({});

    const usersList = commonHandlers.withIdField(users)

    return {usersList, countDocuments};
  }
}

module.exports = new UserService();