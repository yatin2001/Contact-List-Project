"use strict";

const validateName = (firstName, lastName) => {
 console.log(firstName);
 return firstName.toLowerCase().match(/^[A-Za-z\s]+$/);
};
const validateAge = (age) => {
  console.log(age);
  if (age < 0) return false;
  return true;
};
const validateNumber = (number) => {
return number.toString().match(/^\d{10}$/);
};
const validateEmail = (email) => {
  return email
    .toLowerCase()
    .match(
      /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
    );
};

const validate = (data) => {
  let isValid = true;
  console.log(data);
  isValid =
    validateName(data["firstName"], data["lastName"]) &&
    validateAge(data["age"]) &&
    validateNumber(data["phoneNumber"]) &&
    validateEmail(data["email"]);
  return isValid;
};

module.exports = {
  validate,
};
