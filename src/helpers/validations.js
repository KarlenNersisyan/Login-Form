// Name
export function isValidName(name) {
  let regex = /^[a-zA-Z ]{2,30}$/;
  return regex.test(name);
}
// Surname
export function isValidSurname(surname) {
  let regex = /^[a-zA-Z ]{2,30}$/;
  return regex.test(surname);
}
// Gender
export function isValidGender(gender) {
  return gender ? true : false;
}
//Phone
export function isValidPhone(phone) {
  let regex=/(([+374]{4}|[0]{1}))?([1-9]{2})(\d{6})/;
  return regex.test(phone);
}
// Email
export function isValidEmail(email) {
  let regex =
    /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/;
  return regex.test(String(email).toLowerCase());
}
// Password
export function isValidPassword(password) {
  let regex = /(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}/;
  return regex.test(password);
}
