import React, { Component } from 'react';
import './Form.css';
import styles from './form.module.css';
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
      isHidden: true,
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
    this.setState(
      {
        isValidName: isValidName(name),
        isValidSurname: isValidSurname(surname),
        isValidGender: isValidGender(gender),
        isValidPhone: isValidPhone(phone),
        isValidEmail: isValidEmail(email),
        isValidPassword: isValidPassword(password),
      },
      () => {
        if (
          this.state.isValidName &&
          this.state.isValidSurname &&
          this.state.isValidGender &&
          this.state.isValidPhone &&
          this.state.isValidEmail &&
          this.state.isValidPassword
        ) {
          this.setState({
            isHidden: !this.state.isHidden,
          });
        }
      }
    );
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
  handleHide = () => {
    this.setState({
      isHidden: !this.state.isHidden,
    });
  };
  render() {
    const closeIcon = <i className="fas fa-times-circle text-red-400"></i>;
    const okIcon = <i className="fas fa-check-circle text-green-400"></i>;

    // ContainerMessage
    const containerMessage = (
      <div
        className={
          this.state.isHidden
            ? styles.hide
            : 'fixed w-96 h-full rounded-3xl border-none bg-gray-400 shadow-byKarlenV3 containerMessage'
        }
      >
        <a href="https://github.com/KarlenNersisyan" target="_blank">
          <i className="fas fa-smile-wink absolute text-yellow-500 text-9xl transition byKarlen cursor-pointer hover:text-red-700"></i>
        </a>
        <i
          onClick={this.handleHide}
          className="fas fa-times-hexagon text-white absolute right-8 top-6 text-4xl cursor-pointer transition hover:text-red-500"
        ></i>
        <ul className="ul-container w-56 h-full rounded-3xl border bg-yellow-200 absolute">
          <li className="text-center mt-1">
            <b> --- Your Name --- </b>
            <div className="text-px text-red-700 px-1 truncate">
              {this.state.name}
            </div>
          </li>
          <li className="text-center mt-1">
            <b> --- Your Surname --- </b>
            <div className="text-px text-red-700 px-1 truncate">
              {this.state.surname}
            </div>
          </li>
          <li className="text-center mt-1">
            <b> --- Your Gender --- </b>
            <div className="text-px text-red-700 px-1 truncate">
              {this.state.gender}
            </div>
          </li>
          <li className="text-center mt-1">
            <b> --- Your Phone --- </b>
            <div className="text-px text-red-700 px-1 truncate">
              {this.state.phone}
            </div>
          </li>
          <li className="text-center mt-1">
            <b> --- Your Email --- </b>
            <div className="text-px text-red-700 px-1 truncate">
              {this.state.email}
            </div>
          </li>
          <li className="text-center mt-1">
            <b> --- Your Password --- </b>
            <div className="text-px text-red-700 px-1 truncate">
              {this.state.password}
            </div>
          </li>
        </ul>
      </div>
    );

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
        {containerMessage}{' '}
        <div className="w-96 h-full mt-16 border bg-white rounded-2xl flex flex-col justify-evenly text-center containerRegister">
          {' '}
          <div className=" mt-3">
            <b className="text-3xl titleContainer transition text-purple-500 hover:text-green-400">
              <a href="https://github.com/KarlenNersisyan" target="_blank">
                ------- Register -------
              </a>
            </b>
          </div>
          <div className="mt-3">
            <label>
              <p className="text-purple-500 transition cursor-pointer labelName hover:text-green-400 font-bold">
                Name:
                <span className="ml-px" {...{ hidden: hiddenName }}>
                  {nameMessage}
                </span>
                <span className="ml-px" {...{ hidden: hiddenNameOk }}>
                  {nameOkMessage}
                </span>
              </p>
              <Input
                className="placeholder-green-400 inputName outline-none rounded-full border-solid border-purple-500 border-2 shadow-byKarlenV2 "
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
              <p className="text-purple-500 transition cursor-pointer labelName hover:text-green-400 font-bold">
                Surname:
                <span className="ml-px" {...{ hidden: hiddenSurname }}>
                  {surnameMessage}
                </span>
                <span className="ml-px" {...{ hidden: hiddenSurnameOk }}>
                  {surnameOkMessage}
                </span>
              </p>
              <Input
                className="placeholder-green-400 inputName outline-none rounded-full border-solid border-purple-500 border-2 shadow-byKarlenV2"
                type="text"
                placeholder="Nersisyan"
                value={this.state.surname}
                onChange={this.handleChange}
                name="surname"
              />
            </label>
          </div>
          <div className="mt-3">
            <p className="text-purple-500 transition cursor-pointer labelName hover:text-green-400 font-bold">
              Gender:
              <span className="ml-px" {...{ hidden: hiddenGender }}>
                {genderMessage}
              </span>
              <span className="ml-px" {...{ hidden: hiddenGenderOk }}>
                {genderOkMessage}
              </span>
            </p>
             {' '}
            <label>
              <i className="fas amigo fa-male text-xl text-blue-900"></i>{' '}
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
              /<i className="fas amigo fa-female text-xl text-pink-400"></i>{' '}
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
              <p className="text-purple-500 transition cursor-pointer labelName hover:text-green-400 font-bold">
                Email:
                <span className="ml-px" {...{ hidden: hiddenEmail }}>
                  {emailMessage}
                </span>
                <span className="ml-px" {...{ hidden: hiddenEmailOk }}>
                  {emailOkMessage}
                </span>
              </p>
              <Input
                className="placeholder-green-400 inputName outline-none rounded-full border-solid border-purple-500 border-2 shadow-byKarlenV2"
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
              <p className="text-purple-500 transition cursor-pointer labelName hover:text-green-400 font-bold">
                Phone Number:{' '}
                <span className="ml-px" {...{ hidden: hiddenPhone }}>
                  {phoneMessage}
                </span>
                <span className="ml-px" {...{ hidden: hiddenPhoneOk }}>
                  {phoneOkMessage}
                </span>
              </p>
              <Input
                className="placeholder-green-400 inputName outline-none rounded-full border-solid border-purple-500 border-2 shadow-byKarlenV2"
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
              <p className="text-purple-500 transition cursor-pointer labelName hover:text-green-400 font-bold">
                Password:
                <span className="ml-px" {...{ hidden: hiddenPassword }}>
                  {passwordMessage}
                </span>
                <span className="ml-px" {...{ hidden: hiddenPasswordOk }}>
                  {passwordOkMessage}
                </span>
              </p>
              <Input
                className="placeholder-green-400 inputName outline-none rounded-full border-solid border-purple-500 border-2 shadow-byKarlenV2"
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
              className="w-20 buttonName transition-all rounded-md border text-white bg-purple-500 hover:text-black hover:bg-green-400"
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
