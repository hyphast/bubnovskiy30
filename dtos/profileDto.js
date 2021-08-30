module.exports = class ProfileDto {
  id;
  firstName;
  lastName;
  gender;
  phoneNumber;

  constructor(model) {
    this.id = model._id;
    this.firstName = model.firstName;
    this.lastName = model.lastName;
    this.gender = model.gender;
    this.phoneNumber = model.phoneNumber;
  }
}