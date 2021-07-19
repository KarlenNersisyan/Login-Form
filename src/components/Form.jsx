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
      isValidName: true,
      isValidSurname: true,
      isValidGender: true,
      isValidPhone: true,
      isValidEmail: true,
      isValidPassword: true,
      name: '',
      surname: '',
      gender: '',
      female: '',
      male: '',
      phone: '',
      email: '',
      password: '',
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
    const closeIcon = <i className="fas fa-times-circle"></i>;

    const nameMessage = this.state.isValidName ? '' : closeIcon;
    const hiddenName = this.state.isValidName ? 'hidden' : '';
    const surnameMessage = this.state.isValidSurname ? '' : closeIcon;
    const hiddenSurname = this.state.isValidSurname ? 'hidden' : '';
    const genderMessage = this.state.isValidGender ? '' : closeIcon;
    const hiddenGender = this.state.isValidGender ? 'hidden' : '';
    const phoneMessage = this.state.isValidPhone ? '' : closeIcon;
    const hiddenPhone = this.state.isValidPhone ? 'hidden' : '';
    const emailMessage = this.state.isValidEmail ? '' : closeIcon;
    const hiddenEmail = this.state.isValidEmail ? 'hidden' : '';
    const passwordMessage = this.state.isValidPassword ? '' : closeIcon;
    const hiddenPassword = this.state.isValidPassword ? 'hidden' : '';

    // okMessage

    // const containerMessage = (
    //   <div className="w-2/4 border rounded-lg h-screen text-center text-green-400 relative"></div>
    // );
    // const okMessageContainer =
    //   this.state.isValidName &&
    //   this.state.isValidSurname &&
    //   this.state.isValidGender &&
    //   this.state.isValidPhone &&
    //   this.state.isValidEmail &&
    //   this.state.isValidPassword
    //     ? containerMessage
    //     : '';
    // const okMessageHidden = okMessageContainer ? 'hidden' : '';
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
                  className="text-red-400 ml-px"
                  {...{ hidden: hiddenName }}
                >
                  {nameMessage}
                </span>
              </p>
              <Input
                className="placeholder-green-400 outline-none rounded-full border-solid border-purple-500 border-2 shadow-byKarlenV2 "
                type="text"
                placeholder="Karlen"
                value={this.state.name}
                onChange={this.handleChange}
                name="name"
              />
            </label>
          </div>
          <div className="mt-3">
            <label>
              <p className="text-purple-500 transition cursor-pointer hover:text-green-400 font-bold">
                Surname:
                <span
                  className="text-red-400 ml-px"
                  {...{ hidden: hiddenSurname }}
                >
                  {surnameMessage}
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
                className="text-red-400 ml-px"
                {...{ hidden: hiddenGender }}
              >
                {genderMessage}
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
              />
            </label>
          </div>
          <div className="mt-3">
            <label>
              <p className="text-purple-500 transition cursor-pointer hover:text-green-400 font-bold">
                Email:
                <span
                  className="text-red-400 ml-px"
                  {...{ hidden: hiddenEmail }}
                >
                  {emailMessage}
                </span>
              </p>
              <Input
                className="placeholder-green-400 outline-none rounded-full border-solid border-purple-500 border-2 shadow-byKarlenV2"
                type="text"
                placeholder="1999karlen@gmail.com"
                value={this.state.email}
                onChange={this.handleChange}
                name="email"
              />
            </label>
          </div>
          <div className="mt-3">
            <label>
              <p className="text-purple-500 transition cursor-pointer hover:text-green-400 font-bold">
                Phone Number:{' '}
                <span
                  className="text-red-400 ml-px"
                  {...{ hidden: hiddenPhone }}
                >
                  {phoneMessage}
                </span>
              </p>
              <Input
                className="placeholder-green-400 outline-none rounded-full border-solid border-purple-500 border-2 shadow-byKarlenV2"
                type="text"
                placeholder="+37493017153"
                value={this.state.phone}
                onChange={this.handleChange}
                name="phone"
              />
            </label>
          </div>
          <div className="mt-3">
            <label>
              <p className="text-purple-500 transition cursor-pointer hover:text-green-400 font-bold">
                Password:
                <span
                  className="text-red-400 ml-px"
                  {...{ hidden: hiddenPassword }}
                >
                  {passwordMessage}
                </span>
              </p>
              <Input
                className="placeholder-green-400 outline-none rounded-full border-solid border-purple-500 border-2 shadow-byKarlenV2"
                type="password"
                placeholder="Karl1999@"
                value={this.state.password}
                onChange={this.handleChange}
                name="password"
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
