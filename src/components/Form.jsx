import React, { Component } from 'react';
import Input from '../components/Input/Input';
import Button from '../components/Button/Button';
import {
  isValidName,
  isValidSurname,
  isValidGender,
  isValidEmail,
  isValidPhone,
  isValidPassword,
} from '../helpers/validations';
import { SetItemLocal, GetItemLocal } from '../helpers/localStorage';

class Form extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isValidName: '',
      isValidSurname: '',
      isValidGender: '',
      isValidPhone: '',
      isValidEmail: '',
      isValidPassword: '',
      name: GetItemLocal('name') ? GetItemLocal('name') : '',
      surname: GetItemLocal('surname') ? GetItemLocal('surname') : '',
      gender: GetItemLocal('gender') ? GetItemLocal('gender') : '',
      phone: GetItemLocal('phone') ? GetItemLocal('phone') : '',
      email: GetItemLocal('email') ? GetItemLocal('email') : '',
      password: GetItemLocal('password') ? GetItemLocal('password') : '',
    };
  }
  handleChange = (e) => {
    const { name, value } = e.target;
    this.setState({
      [name]: value,
    });
  };

  handleRegister = (e) => {
    const { name, surname, gender, phone, email, password } = this.state;
    e.preventDefault();
    this.setState({
      isValidName: isValidName(name),
      isValidSurname: isValidSurname(surname),
      isValidGender: isValidGender(gender),
      isValidPhone: isValidPhone(phone),
      isValidEmail: isValidEmail(email),
      isValidPassword: isValidPassword(password),
    });
  };

  componentDidUpdate() {
    if (this.state.name) {
      SetItemLocal('name', this.state.name);
    }
    if (this.state.surname) {
      SetItemLocal('surname', this.state.surname);
    }
    if (this.state.gender) {
      SetItemLocal('gender', this.state.gender);
    }
    if (this.state.phone) {
      SetItemLocal('phone', this.state.phone);
    }
    if (this.state.email) {
      SetItemLocal('email', this.state.email);
    }
    if (this.state.password) {
      SetItemLocal('password', this.state.password);
    }
  }
  render() {
    const closeIcon = <i className="fas fa-times-circle text-red-400"></i>;
    const okIcon = <i className="fas fa-check-circle text-green-400"></i>;

    const nameMessage =
      this.state.isValidName == true || this.state.isValidName === ''
        ? ''
        : closeIcon;
    const hiddenName = this.state.isValidName == true ? 'hidden' : '';

    const surnameMessage =
      this.state.isValidSurname == true || this.state.isValidSurname === ''
        ? ''
        : closeIcon;
    const hiddenSurname = this.state.isValidSurname == true ? 'hidden' : '';

    const genderMessage =
      this.state.isValidGender == true || this.state.isValidGender === ''
        ? ''
        : closeIcon;
    const hiddenGender = this.state.isValidGender == true ? 'hidden' : '';

    const phoneMessage =
      this.state.isValidPhone == true || this.state.isValidPhone === ''
        ? ''
        : closeIcon;
    const hiddenPhone = this.state.isValidPhone == true ? 'hidden' : '';

    const emailMessage =
      this.state.isValidEmail == true || this.state.isValidEmail === ''
        ? ''
        : closeIcon;
    const hiddenEmail = this.state.isValidEmail == true ? 'hidden' : '';
    const passwordMessage =
      this.state.isValidPassword == true || this.state.isValidPassword === ''
        ? ''
        : closeIcon;
    const hiddenPassword = this.state.isValidPassword == true ? 'hidden' : '';
    // okMessage
    const nameOkMessage = this.state.isValidName == false ? '' : okIcon;
    const hiddenNameOk = this.state.isValidName == false ? 'hidden' : '';
    const surnameOkMessage = this.state.isValidSurname == false ? '' : okIcon;
    const hiddenSurnameOk = this.state.isValidSurname == false ? 'hidden' : '';
    const genderOkMessage = this.state.isValidGender == false ? '' : okIcon;
    const hiddenGenderOk = this.state.isValidGender == false ? 'hidden' : '';
    const emailOkMessage = this.state.isValidEmail == false ? '' : okIcon;
    const hiddenEmailOk = this.state.isValidEmail == false ? 'hidden' : '';
    const phoneOkMessage = this.state.isValidPhone == false ? '' : okIcon;
    const hiddenPhoneOk = this.state.isValidPhone == false ? 'hidden' : '';
    const passwordOkMessage = this.state.isValidPassword == false ? '' : okIcon;
    const hiddenPasswordOk =
      this.state.isValidPassword == false ? 'hidden' : '';

    return (
      <form className="flex justify-center">
        <div className="w-96 h-full shadow-byKarlenV1 mt-16 border bg-white rounded-2xl flex flex-col justify-evenly text-center">
          {' '}
          <div className=" mt-3">
            <b className="text-3xl transition text-purple-500 hover:text-green-400">
              <a href="https://github.com/KarlenNersisyan" target="_blank">
                ------- Register -------
              </a>
            </b>
          </div>
          <div className="mt-3">
            <label>
              <p className="text-purple-500 transition cursor-pointer hover:text-green-400 font-bold">
                Name:
                <span
                  className="ml-px"
                  {...{ hidden: hiddenName }}
                >
                  {nameMessage}
                </span>
                <span
                  className="ml-px"
                  {...{ hidden: hiddenNameOk }}
                >
                  {nameOkMessage}
                </span>
              </p>
              <Input
                className="placeholder-green-400 outline-none rounded-full border-solid border-purple-500 border-2 shadow-byKarlenV2 "
                type="text"
                placeholder="Karlen"
                value={this.state.name}
                onChange={this.handleChange}
                name="name"
                required
              />
            </label>
          </div>
          <div className="mt-3">
            <label>
              <p className="text-purple-500 transition cursor-pointer hover:text-green-400 font-bold">
                Surname:
                <span
                  className="ml-px"
                  {...{ hidden: hiddenSurname }}
                >
                  {surnameMessage}
                </span>
                <span
                  className="ml-px"
                  {...{ hidden: hiddenSurnameOk }}
                >
                  {surnameOkMessage}
                </span>
              </p>
              <Input
                className="placeholder-green-400 outline-none rounded-full border-solid border-purple-500 border-2 shadow-byKarlenV2"
                type="text"
                placeholder="Nersisyan"
                value={this.state.surname}
                onChange={this.handleChange}
                name="surname"
              />
            </label>
          </div>
          <div className="mt-3">
            <p className="text-purple-500 transition cursor-pointer hover:text-green-400 font-bold">
              Gender:
              <span
                className="ml-px"
                {...{ hidden: hiddenGender }}
              >
                {genderMessage}
              </span>
              <span
                className="ml-px"
                {...{ hidden: hiddenGenderOk }}
              >
                {genderOkMessage}
              </span>
            </p>
             {' '}
            <label>
              <i className="fas fa-male text-xl text-blue-900"></i>{' '}
              <Input
                type="radio"
                name="gender"
                onChange={this.handleChange}
                className="cursor-pointer"
                value="male"
                checked={this.state.gender === 'male' ? true : false}
              />
            </label>
             {' '}
            <label>
              /<i className="fas fa-female text-xl text-pink-400"></i>{' '}
              <Input
                type="radio"
                name="gender"
                value="female"
                onChange={this.handleChange}
                className="cursor-pointer"
                checked={this.state.gender === 'female' ? true : false}
              />
            </label>
          </div>
          <div className="mt-3">
            <label>
              <p className="text-purple-500 transition cursor-pointer hover:text-green-400 font-bold">
                Email:
                <span
                  className="ml-px"
                  {...{ hidden: hiddenEmail }}
                >
                  {emailMessage}
                </span>
                <span
                  className="ml-px"
                  {...{ hidden: hiddenEmailOk }}
                >
                  {emailOkMessage}
                </span>
              </p>
              <Input
                className="placeholder-green-400 outline-none rounded-full border-solid border-purple-500 border-2 shadow-byKarlenV2"
                type="text"
                placeholder="1999karlen@gmail.com"
                value={this.state.email}
                onChange={this.handleChange}
                name="email"
                required
              />
            </label>
          </div>
          <div className="mt-3">
            <label>
              <p className="text-purple-500 transition cursor-pointer hover:text-green-400 font-bold">
                Phone Number:{' '}
                <span
                  className="ml-px"
                  {...{ hidden: hiddenPhone }}
                >
                  {phoneMessage}
                </span>
                <span
                  className="ml-px"
                  {...{ hidden: hiddenPhoneOk }}
                >
                  {phoneOkMessage}
                </span>
              </p>
              <Input
                className="placeholder-green-400 outline-none rounded-full border-solid border-purple-500 border-2 shadow-byKarlenV2"
                type="number"
                placeholder="+37493017153"
                value={this.state.phone}
                onChange={this.handleChange}
                name="phone"
                required
              />
            </label>
          </div>
          <div className="mt-3">
            <label>
              <p className="text-purple-500 transition cursor-pointer hover:text-green-400 font-bold">
                Password:
                <span
                  className="ml-px"
                  {...{ hidden: hiddenPassword }}
                >
                  {passwordMessage}
                </span>
                <span
                  className="ml-px"
                  {...{ hidden: hiddenPasswordOk }}
                >
                  {passwordOkMessage}
                </span>
              </p>
              <Input
                className="placeholder-green-400 outline-none rounded-full border-solid border-purple-500 border-2 shadow-byKarlenV2"
                type="password"
                placeholder="Karl1999@"
                value={this.state.password}
                onChange={this.handleChange}
                name="password"
                required
              />
            </label>
          </div>
          <div className="mt-3">
            <Button
              className="w-20 transition-all rounded-md border text-white bg-purple-500 hover:text-black hover:bg-green-400"
              text="Submit"
              onClick={this.handleRegister}
            />
          </div>
        </div>
      </form>
    );
  }
}

export default Form;
