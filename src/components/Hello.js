import { Component } from "../core/core";

export default class Hello extends Component {
  render() {
    this.el.innerHTML = /* */ `
      <h1>Hello World</h1>
    `
  }

}