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
  //Phone
  export function isValidPhone(phone) {
    let regex =
      /\+(9[976]\d|8[987530]\d|6[987]\d|5[90]\d|42\d|3[875]\d|2[98654321]\d|9[8543210]|8[6421]|6[6543210]|5[87654321]|4[987654310]|3[9643210]|2[70]|7|1)\d{1,14}$/;
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