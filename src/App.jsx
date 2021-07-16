import React, { Component } from 'react';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = { value: '' };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    this.setState({ value: event.target.value });
  }

  handleSubmit(event) {
    alert('A name was submitted: ' + this.state.value);
    event.preventDefault();
  }

  render() {
    return (
      <form className="flex justify-center" onSubmit={this.handleSubmit}>
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
              <input
                type="text"
                placeholder="Karlen"
                value={this.state.value}
                onChange={this.handleChange}
                className="placeholder-green-400 outline-none rounded-full border-solid border-purple-500 border-2 shadow-byKarlenV2"
                required
              />
            </label>
          </div>
          <div className="mt-3">
            <label>
              <p className="text-purple-500 transition cursor-pointer hover:text-green-400 font-bold">
                Surname:{' '}
              </p>
              <input
                type="text"
                placeholder="Nersisyan"
                value={this.state.value}
                onChange={this.handleChange}
                className="placeholder-green-400 outline-none rounded-full border-solid border-purple-500 border-2 shadow-byKarlenV2"
              />
            </label>
          </div>
          <div className="mt-3">
            <p className="text-purple-500 transition cursor-pointer hover:text-green-400 font-bold">
              Gender:{' '}
            </p>
             {' '}
            <label for="male">
            <i class="fas fa-male text-xl text-blue-900"></i> <input type="radio" name="person" className="cursor-pointer"></input>
            </label>
             {' '}
            <label for="female">
              / <i class="fas fa-female text-xl text-pink-400"></i> <input type="radio" name="person" className="cursor-pointer"></input>
            </label>
          </div>
          <div className="mt-3">
            <label>
              <p className="text-purple-500 transition cursor-pointer hover:text-green-400 font-bold">
                Email:{' '}
              </p>
              <input
                type="email"
                placeholder="1999karlen@gmail.com"
                value={this.state.value}
                onChange={this.handleChange}
                className="placeholder-green-400 outline-none rounded-full border-solid border-purple-500 border-2 shadow-byKarlenV2"
                required
              />
            </label>
          </div>
          <div className="mt-3">
            <label>
              <p className="text-purple-500 transition cursor-pointer hover:text-green-400 font-bold">
                Phone Number:{' '}
              </p>
              <input
                type="number"
                placeholder="+37493017153"
                value={this.state.value}
                onChange={this.handleChange}
                className="placeholder-green-400 outline-none rounded-full border-solid border-purple-500 border-2 shadow-byKarlenV2"
                required
              />
            </label>
          </div>
          <div className="mt-3">
            <label>
              <p className="text-purple-500 transition cursor-pointer hover:text-green-400 font-bold">
                Password:
              </p>
              <input
                type="password"
                placeholder="Karl1999@"
                value={this.state.value}
                onChange={this.handleChange}
                className="placeholder-green-400 outline-none rounded-full border-solid border-purple-500 border-2 shadow-byKarlenV2"
                required
              />
            </label>
          </div>
          <div className="mt-3">
            <button
              className="w-20 transition-all rounded-md border text-white bg-purple-500 hover:text-black hover:bg-green-400"
              type="submit"
            >
              Submit
            </button>
          </div>
        </div>
      </form>
    );
  }
}

export default App;
