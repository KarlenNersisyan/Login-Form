import React, { Component } from 'react';
import Input from '../components/Input/Input';
import Button from '../components/Button/Button';
import {isValidNameSurname,isValidEmail,isValidPhone,isValidPassword} from '../helpers/validations';
import {SetItemLocal,GetItemLocal} from '../helpers/localStorage';

class Form extends Component {
  constructor(props) {
    super(props);
    
  }

  

  render() {
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
                type
                placeholder
                value
                onChange
                required
              />
            </label>
          </div>
          <div className="mt-3">
            <label>
              <p className="text-purple-500 transition cursor-pointer hover:text-green-400 font-bold">
                Surname:{' '}
              </p>
              <Input
                className="placeholder-green-400 outline-none rounded-full border-solid border-purple-500 border-2 shadow-byKarlenV2"
                type
                placeholder
                value
                onChange
              />
            </label>
          </div>
          <div className="mt-3">
            <p className="text-purple-500 transition cursor-pointer hover:text-green-400 font-bold">
              Gender:{' '}
            </p>
             {' '}
            <label for="male">
            <i class="fas fa-male text-xl text-blue-900"></i> <Input type="radio" name="person" className="cursor-pointer"/>
            </label>
             {' '}
            <label for="female">
              / <i class="fas fa-female text-xl text-pink-400"></i> <Input type="radio" name="person" className="cursor-pointer"/>
            </label>
          </div>
          <div className="mt-3">
            <label>
              <p className="text-purple-500 transition cursor-pointer hover:text-green-400 font-bold">
                Email:{' '}
              </p>
              <Input
                className="placeholder-green-400 outline-none rounded-full border-solid border-purple-500 border-2 shadow-byKarlenV2"
                type
                placeholder
                value
                onChange
                required
              />
            </label>
          </div>
          <div className="mt-3">
            <label>
              <p className="text-purple-500 transition cursor-pointer hover:text-green-400 font-bold">
                Phone Number:{' '}
              </p>
              <Input
                className="placeholder-green-400 outline-none rounded-full border-solid border-purple-500 border-2 shadow-byKarlenV2"
                type
                placeholder
                value
                onChange
                required
              />
            </label>
          </div>
          <div className="mt-3">
            <label>
              <p className="text-purple-500 transition cursor-pointer hover:text-green-400 font-bold">
                Password:
              </p>
              <Input
                className="placeholder-green-400 outline-none rounded-full border-solid border-purple-500 border-2 shadow-byKarlenV2"
                type
                placeholder
                value
                onChange
                required
              />
            </label>
          </div>
          <div className="mt-3">
            <Button
              className="w-20 transition-all rounded-md border text-white bg-purple-500 hover:text-black hover:bg-green-400"
              text='Submit'
              onClick
            />
          </div>
        </div>
      </form>
    );
  }
}

export default Form;
