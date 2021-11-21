const Users = require('../../models/User');
const ProfileDto = require('../../dtos/profileDto');

class ProfileService {
  async getUserProfile(id) {
    const profile = await Users.findOne({_id: id});

    const profileDto = new ProfileDto(profile); // id, firstName, lastName, gender, phoneNumber

    return {profile: profileDto};
  }
  async savePhoto(id, photoUrl) {
    const profile = await Users.findOne({_id: id});

    profile.photoUrl = photoUrl;

    return profile.save();
  }
  async editProfileInfo(id, firstName, lastName, patronymic, gender, phoneNumber) {
    const profile = await Users.findOne({_id: id});

    profile.firstName = firstName;
    profile.lastName = lastName;
    profile.patronymic = patronymic;
    profile.gender = gender;
    profile.phoneNumber = phoneNumber;

    return profile.save();
  }
}

module.exports = new ProfileService();