// export default class App{
//   constructor() {
//     this.el = document.createElement('div');
//     this.el.textContent = 'Hello, world!';
//   }
// }

import { Component } from './core/core';

export default class App extends Component {
  constructor() {
    super();
  }
  render() {
    this.el.textContent = 'Hello, world!';
  }
}
