module.exports = class ProfileDto {
  id;
  photoUrl;
  firstName;
  lastName;
  patronymic;
  gender;
  phoneNumber;
  isActivated;

  constructor(model) {
    this.id = model._id;
    this.photoUrl = model.photoUrl;
    this.firstName = model.firstName;
    this.lastName = model.lastName;
    this.patronymic = model.patronymic;
    this.gender = model.gender;
    this.phoneNumber = model.phoneNumber;
    this.isActivated = model.isActivated;
  }
}