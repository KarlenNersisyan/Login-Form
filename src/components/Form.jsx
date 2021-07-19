import React, { Component } from 'react';
import Input from '../components/Input/Input';
import Button from '../components/Button/Button';
import {
  isValidName,
  isValidSurname,
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
    const { email, name, surname, password, phone } = this.state;
    e.preventDefault();
    this.setState({
      isValidEmail: isValidEmail(email),
      isValidName: isValidName(name),
      isValidSurname: isValidSurname(surname),
      isValidPhone: isValidPhone(phone),
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
    const nameMessage = this.state.isValidName ? '' : 'Wrong Name';
    const hiddenName = this.state.isValidName ? 'hidden' : '';
    const surnameMessage = this.state.isValidSurname ? '' : 'Wrong Surname';
    const hiddenSurname = this.state.isValidSurname ? 'hidden' : '';
    const phoneMessage = this.state.isValidPhone ? '' : 'Wrong Phone';
    const hiddenPhone = this.state.isValidPhone ? 'hidden' : '';
    const emailMessage = this.state.isValidEmail ? '' : 'Wrong Email';
    const hiddenEmail = this.state.isValidEmail ? 'hidden' : '';
    const passwordMessage = this.state.isValidPassword ? '' : 'Wrong Password';
    const hiddenPassword = this.state.isValidPassword ? 'hidden' : '';

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
                Name:{' '}
              </p>
              <Input
                className="placeholder-green-400 outline-none rounded-full border-solid border-purple-500 border-2 shadow-byKarlenV2"
                type="text"
                placeholder="Karlen"
                value={this.state.name}
                onChange={this.handleChange}
                name="name"
              />
              <p className="mt-0 py-3 text-red-400" {...{ hidden: hiddenName }}>
                {nameMessage}
              </p>
            </label>
          </div>
          <div className="mt-3">
            <label>
              <p className="text-purple-500 transition cursor-pointer hover:text-green-400 font-bold">
                Surname:{' '}
              </p>
              <Input
                className="placeholder-green-400 outline-none rounded-full border-solid border-purple-500 border-2 shadow-byKarlenV2"
                type="text"
                placeholder="Nersisyan"
                value={this.state.surname}
                onChange={this.handleChange}
                name="surname"
              />
              <p
                className="mt-0 py-3 text-red-400"
                {...{ hidden: hiddenSurname }}
              >
                {surnameMessage}
              </p>
            </label>
          </div>
          <div className="mt-3">
            <p className="text-purple-500 transition cursor-pointer hover:text-green-400 font-bold">
              Gender:{' '}
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
                Email:{' '}
              </p>
              <Input
                className="placeholder-green-400 outline-none rounded-full border-solid border-purple-500 border-2 shadow-byKarlenV2"
                type="text"
                placeholder="1999karlen@gmail.com"
                value={this.state.email}
                onChange={this.handleChange}
                name="email"
              />
              <p
                className="mt-0 py-3 text-red-400"
                {...{ hidden: hiddenEmail }}
              >
                {emailMessage}
              </p>
            </label>
          </div>
          <div className="mt-3">
            <label>
              <p className="text-purple-500 transition cursor-pointer hover:text-green-400 font-bold">
                Phone Number:{' '}
              </p>
              <Input
                className="placeholder-green-400 outline-none rounded-full border-solid border-purple-500 border-2 shadow-byKarlenV2"
                type="text"
                placeholder="+37493017153"
                value={this.state.phone}
                onChange={this.handleChange}
                name="phone"
              />
              <p
                className="mt-0 py-3 text-red-400"
                {...{ hidden: hiddenPhone }}
              >
                {phoneMessage}
              </p>
            </label>
          </div>
          <div className="mt-3">
            <label>
              <p className="text-purple-500 transition cursor-pointer hover:text-green-400 font-bold">
                Password:
              </p>
              <Input
                className="placeholder-green-400 outline-none rounded-full border-solid border-purple-500 border-2 shadow-byKarlenV2"
                type="password"
                placeholder="Karl1999@"
                value={this.state.password}
                onChange={this.handleChange}
                name="password"
              />
              <p
                className="mt-0 py-3 text-red-400"
                {...{ hidden: hiddenPassword }}
              >
                {passwordMessage}
              </p>
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
